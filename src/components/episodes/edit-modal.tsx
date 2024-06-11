"use client";

import { X } from "lucide-react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  EpisodeEditForm,
} from "@/components";
import { useEpisodes } from "@/hooks";

export function EpisodeEditModal() {
  const { currentEpisode, showEditModal, setShowEditModal } = useEpisodes();

  const onClose = () => {
    setShowEditModal(false);
  };

  return (
    <AlertDialog open={showEditModal}>
      <AlertDialogContent className="w-full max-w-[360px]">
        <AlertDialogHeader className="flex-row items-center justify-between -mt-3">
          <AlertDialogTitle className="mt-2">
            Episode - {currentEpisode?.name}
          </AlertDialogTitle>

          <AlertDialogCancel onClick={onClose}>
            <X />
          </AlertDialogCancel>
        </AlertDialogHeader>

        <EpisodeEditForm />
      </AlertDialogContent>
    </AlertDialog>
  );
}
