"use client";

import { X } from "lucide-react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  CharacterEditForm,
} from "@/components";
import { useCharacters } from "@/hooks";

export function CharacterEditModal() {
  const { currentCharacter, showEditModal, setShowEditModal } = useCharacters();

  const onClose = () => {
    setShowEditModal(false);
  };

  return (
    <AlertDialog open={showEditModal}>
      <AlertDialogContent className="w-full max-w-[360px]">
        <AlertDialogHeader className="flex-row items-center justify-between -mt-3">
          <AlertDialogTitle className="mt-2">
            Character - {currentCharacter?.name}
          </AlertDialogTitle>

          <AlertDialogCancel onClick={onClose}>
            <X />
          </AlertDialogCancel>
        </AlertDialogHeader>

        <CharacterEditForm />
      </AlertDialogContent>
    </AlertDialog>
  );
}
