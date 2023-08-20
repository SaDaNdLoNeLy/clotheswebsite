"use client"

import { ColumnDef } from "@tanstack/react-table"
import CellAction from "./cell-action"
import { For } from "@prisma/client"

export type ProductColumn = {
  id: string
  name: string
  prodcode: string
  price: string
  amount: string
  forWho: string
  type: string
  size: string
  color: string
  collect: string | null
  isFeatured: boolean
  createdAt: string
}

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "prodcode",
    header: "Product code",
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "forWho",
    header: "For",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: row.original.color }}
        />
      </div>
    ),
  },
  {
    accessorKey: "collect",
    header: "Collection",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({row}) => <CellAction data={row.original}/>
  }
]
