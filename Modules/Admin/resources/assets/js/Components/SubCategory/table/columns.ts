import { SubCategory } from '@admin/types/SubCategory'

import DropdownAction from '@admin/Components/SubCategory/table/actions.vue'
import { ColumnDef } from '@tanstack/vue-table'
import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'

import { h } from 'vue'
import { Button } from '@/components/ui/button'



export function getColumns(t): ColumnDef<SubCategory>[] {
  return [
  

  {
    accessorKey: 'name',
   
    header: ({ column }) => {
      return h(Button, {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [t('Name'), h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
  },
  },
  {
    accessorKey: 'category',
   
    header: ({ column }) => {
      return h(Button, {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [t('Category'), h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
  },
  filterFn: function useFilterNumbers(row, columnId, filterValue) {

    if (!filterValue) return true; 

    const rowValue = row.getValue(columnId)?.name.toString().toLowerCase(); 
    const filterString = filterValue.toString().toLowerCase(); 

    return rowValue.includes(filterString); 

},
  cell: ({ row }) => {
    const category = row.original.category.name

    return h('div', { class: 'relative' },category )
  },
  },
  {
    header: () => t("Actions"),
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const sub_category = row.original

      return h('div', { class: 'relative' }, h(DropdownAction, {
        sub_category
      }))
    },
  },
]
}