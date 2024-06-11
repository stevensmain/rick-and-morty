"use client";

import { X } from "lucide-react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  EpisodeCreateForm,
} from "@/components";
import { useEpisodes } from "@/hooks";

export function EpisodeCreateModal() {
  const { showCreateModal, setShowCreateModal } = useEpisodes();

  const onClose = () => setShowCreateModal(false);

  return (
    <AlertDialog open={showCreateModal}>
      <AlertDialogContent className="w-full max-w-[360px]">
        <AlertDialogHeader className="flex-row items-center justify-between -mt-3">
          <AlertDialogTitle className="mt-2">Create episode</AlertDialogTitle>

          <AlertDialogCancel onClick={onClose}>
            <X />
          </AlertDialogCancel>
        </AlertDialogHeader>

        <EpisodeCreateForm />
      </AlertDialogContent>
    </AlertDialog>
  );
}
