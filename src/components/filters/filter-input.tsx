"use client";

import { Search } from "lucide-react";
import { Table } from "@tanstack/react-table";

import { Input } from "@/components";
import { Character } from "@/types";

interface FilterInputProps<TData> {
  table: Table<TData>;
  placeholder?: string;
  columnKey?: keyof Character;
  widthFull?: boolean;
}

export function FilterInput<TData>({
  table,
  columnKey = "name",
  placeholder = "Filter by name...",
  widthFull = false,
}: FilterInputProps<TData>) {
  return (
    <div
      className={`relative max-w-[400px] w-full ${
        !widthFull && "lg:max-w-[240px]"
      } basis-[70%]`}
    >
      <Search className="absolute top-0 bottom-0 w-4 h-4 my-auto left-4 cursor-pointer" />

      <Input
        placeholder={placeholder}
        value={(table.getColumn(columnKey)?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn(columnKey)?.setFilterValue(event.target.value)
        }
        className="pl-12 pr-4 text-sm py-4 bg-white"
      />
    </div>
  );
}
