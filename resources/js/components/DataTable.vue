<script setup lang="ts" generic="TData, TValue">
import type { 
  ColumnDef ,
  SortingState,
  ColumnFiltersState, 
   VisibilityState,

} from '@tanstack/vue-table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,

  getFilteredRowModel,
  getSortedRowModel,
  useVueTable,
 
} from '@tanstack/vue-table'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'


import { ref, watch } from 'vue'
import { valueUpdater } from '@/lib/utils'
import Progress from './ui/progress/Progress.vue'
import Actions from '@/components/datatable/actions/dropdown.vue'
import {useDeleteMultiRows} from '@/Composables/actions/deleteMultiRows';
import { watchEffect } from 'vue'
import { reactive } from 'vue'
import { computed } from 'vue'
import {useI18n} from 'vue-i18n'

const {t}=useI18n();

const props = defineProps({

columns:{
type:Array<ColumnDef<TData, TValue>>,
  required: true
},
data:{
type:Array<TData>,
required: true
},
partialReloadData:{
type:Array<string>,
default: []
},
actionAllUrls:{
type:Object,
default: {}
},
maxActions:{
type:Number,
default: 0
},
multiActionsEnabled:{
type:Boolean,
default: false
}


})

// const inProgress =ref(props.inProgress);
const progress =ref(100);




const columnFilters = ref<ColumnFiltersState>([])
const sorting = ref<SortingState>([])
const columnVisibility = ref<VisibilityState>({})
 const rowSelection = ref({})

const table = useVueTable({
  get data() { return props.data },
  get columns() { return props.columns },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),

  getFilteredRowModel: getFilteredRowModel(),
  
    onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
    onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
    onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),

    state: {
        get sorting() { return sorting.value },
        get columnFilters() { return columnFilters.value },
        get columnVisibility() { return columnVisibility.value },
        get rowSelection() { return rowSelection.value },
    },
})

      const filterColumn = ref(table.getAllColumns()[0].id);
      const changeFilterColumn = function(column:string){
        filterColumn.value=column;
        table.resetColumnFilters()
      };

  function deleteMultipleRows (){
     const ids:number[]=table.getFilteredSelectedRowModel().rows.map((item)=>item.original.id);

     useDeleteMultiRows(props.actionAllUrls['delete'],ids,t,props.partialReloadData)
     .then(result => {
      if(result){
        table.resetRowSelection();
      }
    });
  
    
      }

      const operationsForMultiSelected = reactive([
        {name:"Delete",action:deleteMultipleRows},
    ]);

     const has_rows_selected = computed(()=>{
     const rows_count =table.getFilteredSelectedRowModel().rows.length;
      return rows_count>0 && rows_count<=props.maxActions;
    }
    )

        
  

</script>

<template>
  
  <div>
    <div class="flex items-center py-4">
            <Input class="max-w-sm" :placeholder="$t('Filter rows...')"
                :model-value="table.getColumn(filterColumn)?.getFilterValue() as string"
                @update:model-value=" table.getColumn(filterColumn)?.setFilterValue($event)" />
                    <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="outline" class="ml-auto">
                      {{$t('Search column')}}
                        <ChevronDown class="w-4 h-4 ml-2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuCheckboxItem
                        v-for="column in table.getAllColumns().filter((column) => column.getCanHide())" :key="column.id"
                        class="capitalize"  :modelValue="column.id==filterColumn"   @update:modelValue="(value) => {
                           changeFilterColumn(column.id)
                        }">
                        {{ column.id }}
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
                    <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="outline" class="ml-auto">
                      {{$t('Show and hide columns')}}
                        <ChevronDown class="w-4 h-4 ml-2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuCheckboxItem
                        v-for="column in table.getAllColumns().filter((column) => column.getCanHide())" :key="column.id"
                        class="capitalize" :modelValue="column.getIsVisible()" @update:modelValue="(value) => {
                            column.toggleVisibility(!!value)
                        }">
                        {{ column.id }}
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div v-if="multiActionsEnabled">

              <Actions v-if="has_rows_selected" :operations="operationsForMultiSelected" />
            </div>
           
        </div>



  <div class="border rounded-md">
    <Progress v-model="progress" class="w-full"   :class="{ hidden: !inProgress}" />
    <Table>
      <TableHeader>
        <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <TableHead v-for="header in headerGroup.headers" :key="header.id">
            <FlexRender
              v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
            v-for="row in table.getRowModel().rows" :key="row.id"
            :data-state="row.getIsSelected() ? 'selected' : undefined"
          >
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </TableCell>
          </TableRow>
        </template>
        <template v-else>
          <TableRow>
            <TableCell :colspan="columns.length" class="h-24 text-center">
              {{$t('No results.')}}
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
  </div>
  <div class="flex items-center justify-end py-4 space-x-2">
   
      <Button
        variant="outline"
        size="sm"
        :disabled="!table.getCanPreviousPage()"
        @click="table.previousPage()"
      >
        {{$t('Previous')}}
      </Button>
      <Button
        variant="outline"
        size="sm"
        :disabled="!table.getCanNextPage()"
        @click="table.nextPage()"
      >
      {{$t('Next')}}
      </Button>

      
    </div>
    <div>
      {{$t('Page')}} {{ table.getState().pagination.pageIndex + 1 }} {{$t('of')}} {{ table.getPageCount() }}
  </div>

  <div v-if="multiActionsEnabled" class="flex-1 text-sm text-muted-foreground">
        {{ table.getFilteredSelectedRowModel().rows.length }} {{$t('of')}}
        {{ table.getFilteredRowModel().rows.length }} {{$t('row(s) selected.')}} 
      </div>
</div>
</template>