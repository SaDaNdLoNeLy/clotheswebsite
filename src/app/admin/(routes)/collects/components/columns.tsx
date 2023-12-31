"use client"

import { ColumnDef } from "@tanstack/react-table"
import CellAction from "./cell-action"

export type CollectColumn = {
  id: string
  name: string
  createdAt: string
}

export const columns: ColumnDef<CollectColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
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
