"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Character } from "@/types";
import { CharactersRowActions } from "@/components";

export const CharacterColumns: ColumnDef<Character>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Specie",
    accessorKey: "species",
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CharactersRowActions row={row} />,
  },
];
