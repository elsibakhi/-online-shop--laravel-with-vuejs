import { PurchaseTransaction } from '@finance/js/types/PurchaseTransaction'

import DropdownAction from '@finance/js/components/PurchaseTransaction/table/actions.vue'
import Items from '@finance/js/components/PurchaseTransaction/table/items.vue'
import { ColumnDef } from '@tanstack/vue-table'
import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { h } from 'vue'
import { Button } from '@/components/ui/button'



export function getColumns(t): ColumnDef<PurchaseTransaction>[] {
  return [
  

  {
    accessorKey: 'items',
   
    header: ({ column }) => {
      return h(Button, {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [t('Items'), h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
  },
  cell: ({ row ,getValue }) => {
   

    return h(Items, { items: getValue() } )
  },
  },
  {
    accessorKey: 'amount',
   
    header: ({ column }) => {
      return h(Button, {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [t('Amount'), h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
  },
//   filterFn: function useFilterNumbers(row, columnId, filterValue) {

//     if (!filterValue) return true; 

//     const rowValue = row.getValue(columnId)?.name.toString().toLowerCase(); 
//     const filterString = filterValue.toString().toLowerCase(); 

//     return rowValue.includes(filterString); 

// },

  },
  {
    accessorKey: 'currency',
   
    header: ({ column }) => {
      return h(Button, {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [t('Currency'), h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
  },
  },
  {
    accessorKey: 'status',
   
    header: ({ column }) => {
      return h(Button, {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [t('Status'), h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
  },
  cell: ({ row,getValue }) => {
   
  
   return h(Badge,getValue() )
  },
  },
  {
    accessorKey: 'description',
   
    header: ({ column }) => {
      return h(Button, {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [t('Description'), h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
  },
  },
  {
    accessorKey: 'date',
   
    header: ({ column }) => {
      return h(Button, {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [t('Date'), h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
  },
  },
  {
    header: () => t("Actions"),
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const transaction = row.original

      return h('div', { class: 'relative' }, h(DropdownAction, {
        transaction
      }))
    },
  },
]
}


