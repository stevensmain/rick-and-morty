"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Episode } from "@/types";
import { EpisodesRowActions } from "./row-actions";

export const EpisodesColumns: ColumnDef<Episode>[] = [
  {
    header: "Name",
    accessorKey: "episode",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Air Date",
    accessorKey: "air_date",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <EpisodesRowActions row={row} />,
  },
];
