
import { Category } from '@/types/Category'

import DropdownAction from '@admin/Components/Category/table/actions.vue'
import { ColumnDef } from '@tanstack/vue-table'
import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'

import { h } from 'vue'
import { Button } from '@/components/ui/button'
import { useFilterNumbers } from '@/Composables/table/filter/numbers'


export function getColumns(t): ColumnDef<Category>[] {
  return [
  
  // {
  //   accessorKey: 'id',
  //   filterFn: useFilterNumbers,
  //   header: ({ column }) => {
  //     return h(Button, {
  //         variant: 'ghost',
  //         onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  //     }, () => ['ID', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
  // },
  // },
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
    header: () => t("Actions"),
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const category = row.original

      return h('div', { class: 'relative' }, h(DropdownAction, {
        category,
      }))
    },
  },
]

}
