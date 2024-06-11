"use client";

import { Table } from "@tanstack/react-table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";

interface FilterSelectProps<TData> {
  table: Table<TData>;
  placeholder: string;
  columnKey: keyof TData;
  selectOptions: {
    value: string;
    label: string;
  }[];
}

export function FilterSelect<TData>({
  table,
  selectOptions,
  columnKey,
  placeholder,
}: FilterSelectProps<TData>) {
  return (
    <Select
      defaultValue={
        (table.getColumn(columnKey as string)?.getFilterValue() as string) ?? ""
      }
      onValueChange={(selectValue) =>
        table.getColumn(columnKey as string)?.setFilterValue(selectValue)
      }
      value={
        (table.getColumn(columnKey as string)?.getFilterValue() as string) ?? ""
      }
    >
      <SelectTrigger className="w-full max-w-[240px] truncate bg-white">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="overflow-y-auto max-h-[215px]">
        {selectOptions.map((specie, index) => (
          <SelectItem key={index} value={specie.value}>
            {specie.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
