"use client";

import { useEffect, useState } from "react";
import { FilterX, UserPlus } from "lucide-react";
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
  CharacterEditModal,
  CharacterColumns,
  FilterRoot,
  FilterInput,
  FilterSelect,
  Button,
} from "@/components";
import { useCharacters } from "@/hooks";
import { Character } from "@/types";
import { genderOptions, speciesOptions, statusOptions } from "@/constants";

export function CharactersTable({
  characters: defaultCharacters,
}: {
  characters: Character[];
}) {
  const { characters, setCharacters, setShowCreateModal } = useCharacters();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: characters,
    columns: CharacterColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  useEffect(() => {
    setCharacters(defaultCharacters);
  }, [defaultCharacters, setCharacters]);

  return (
    <>
      <FilterRoot>
        <FilterInput table={table} columnKey="name" />
        <FilterSelect
          table={table}
          columnKey="gender"
          placeholder="Gender"
          selectOptions={genderOptions}
        />
        <FilterSelect
          table={table}
          columnKey="species"
          placeholder="Species"
          selectOptions={speciesOptions}
        />
        <FilterSelect
          table={table}
          columnKey="status"
          placeholder="Status"
          selectOptions={statusOptions}
        />
        <Button onClick={() => table.resetColumnFilters()} className="h-[34px]">
          <FilterX className="w-5 h-5" />
        </Button>
        <Button onClick={() => setShowCreateModal(true)} className="h-[34px]">
          <UserPlus className="w-5 h-5" />
        </Button>
      </FilterRoot>
      <DataTable table={table} />
      <DataTablePagination table={table} />
      <CharacterEditModal />
    </>
  );
}
