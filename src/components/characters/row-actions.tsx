"use client";

import { Row } from "@tanstack/react-table";

import { Button } from "@/components";
import { useCharacters } from "@/hooks";
import { Character } from "@/types";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function CharactersRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const { removeCharacter, setCurrentCharacter, setShowEditModal } =
    useCharacters();
  const character = row.original as Character;

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="secondary"
        onClick={() => {
          setCurrentCharacter(character);
          setShowEditModal(true);
        }}
      >
        Edit
      </Button>

      <Button
        variant="destructive"
        onClick={() => removeCharacter(character.id)}
      >
        Delete
      </Button>
    </div>
  );
}
