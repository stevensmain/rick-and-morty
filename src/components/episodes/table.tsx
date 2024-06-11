"use client";

import { useEffect, useState } from "react";
import { FilterX, PlusCircle } from "lucide-react";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getFilteredRowModel,
  ColumnFiltersState,
} from "@tanstack/react-table";

import {
  DataTable,
  DataTablePagination,
  EpisodesColumns,
  FilterRoot,
  FilterInput,
  Button,
  EpisodeEditModal,
} from "@/components";
import { useEpisodes } from "@/hooks";
import { Episode } from "@/types";

export function EpisodesTable({
  episodes: defaultEpisodes,
}: {
  episodes: Episode[];
}) {
  const { episodes, setEpisodes, setShowCreateModal } = useEpisodes();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: episodes,
    columns: EpisodesColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  useEffect(() => {
    setEpisodes(defaultEpisodes);
  }, [defaultEpisodes, setEpisodes]);

  return (
    <>
      <FilterRoot>
        <FilterInput table={table} columnKey="name" />

        <Button onClick={() => table.resetColumnFilters()} className="h-[34px]">
          <FilterX className="w-5 h-5" />
        </Button>
        <Button onClick={() => setShowCreateModal(true)} className="h-[34px]">
          <PlusCircle className="w-5 h-5" />
        </Button>
      </FilterRoot>
      <DataTable table={table} />
      <DataTablePagination table={table} />
      <EpisodeEditModal />
    </>
  );
}
