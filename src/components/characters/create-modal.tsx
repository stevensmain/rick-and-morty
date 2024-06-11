"use client";

import { X } from "lucide-react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  CreateCharacterForm,
} from "@/components";
import { useCharacters } from "@/hooks";

export function CharacterCreateModal() {
  const { showCreateModal, setShowCreateModal } = useCharacters();

  const onClose = () => setShowCreateModal(false);

  return (
    <AlertDialog open={showCreateModal}>
      <AlertDialogContent className="w-full max-w-[360px]">
        <AlertDialogHeader className="flex-row items-center justify-between -mt-3">
          <AlertDialogTitle className="mt-2">Create character</AlertDialogTitle>

          <AlertDialogCancel onClick={onClose}>
            <X />
          </AlertDialogCancel>
        </AlertDialogHeader>

        <CreateCharacterForm />
      </AlertDialogContent>
    </AlertDialog>
  );
}
