import { Tag } from '@admin/types/Tag'
import DropdownAction from '@admin/Components/Tag/table/actions.vue'
import { ColumnDef } from '@tanstack/vue-table'
import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'
import { Checkbox } from '@/components/ui/checkbox'

import { h } from 'vue'
import { Button } from '@/components/ui/button'



export function getColumns(t :any): ColumnDef<Tag>[] {
  return [
    {
      id: 'select',
      header: ({ table }) => h(Checkbox, {
          'modelValue': table.getIsAllPageRowsSelected(),
          'onUpdate:modelValue': (value: boolean) => table.toggleAllPageRowsSelected(!!value),
          'ariaLabel': 'Select all',
      }),
      cell: ({ row }) => h(Checkbox, {
          'modelValue': row.getIsSelected(),
          'onUpdate:modelValue': (value: boolean) => row.toggleSelected(!!value),
          'ariaLabel': 'Select row',
      }),
      enableSorting: false,
      enableHiding: false,
  },
  {
    accessorKey: 'tag',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [t('Tag'), h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
  },
  {
    header: () => t("Actions"),
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const tag = row.original
      return h('div', { class: 'relative' }, h(DropdownAction, {
        tag,
      }))
    },
  },
]
}