"use client"

import { ColumnDef } from "@tanstack/react-table"


import { User } from "../schema"
import { DataTableColumnHeader } from "./data-table-column-header"
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="flex">{row.getValue("name")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row }) => <div className="flex font-medium">{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "lastMessage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Message" />
    ),
    cell: ({ row }) => <div className="flex font-medium">{row.getValue("lastMessage")}</div>,
  },
  {
    accessorKey: "activity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Activity" />
    ),
    cell: ({ row }) => <div className="flex items-center">{row.getValue("activity")}</div>,
  },
  {
    accessorKey: "intake",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Intake" />
    ),
    cell: ({ row }) => <div className="flex items-center">{row.getValue("intake")}</div>,
  },
]