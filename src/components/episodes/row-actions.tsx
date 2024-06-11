"use client";

import { Row } from "@tanstack/react-table";

import { Button } from "@/components";
import { useEpisodes } from "@/hooks";
import { Episode } from "@/types";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function EpisodesRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const { deleteEpisode, setCurrentEpisode, setShowEditModal } = useEpisodes();
  const episode = row.original as Episode;

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="secondary"
        onClick={() => {
          setCurrentEpisode(episode);
          setShowEditModal(true);
        }}
      >
        Edit
      </Button>

      <Button variant="destructive" onClick={() => deleteEpisode(episode.id)}>
        Delete
      </Button>
    </div>
  );
}
