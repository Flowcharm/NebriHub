"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Member = {
  id: number
  first_name: string
  last_name: string
  class: string
  subjects: string[]
  email: string
}

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "first_name",
    header: "Nombre",
  },
  {
    accessorKey: "last_name",
    header: "Apellidos",
  },
  {
    accessorKey: "class",
    header: "Clase",
  },
  {
    accessorKey: "subjects",
    header: "Asignaturas",
  },
  {
    accessorKey: "email",
    header: "Correo electrónico",
  },
]
