import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Episode } from "@/types";
import { CreateEpisodeFormValues } from "@/schemas";

interface State {
  episodes: Episode[];
  currentEpisode: Episode | null;
  showCreateModal: boolean;
  showEditModal: boolean;
}

interface Actions {
  setEpisodes: (episodes: Episode[]) => void;
  setCurrentEpisode: (episode: Episode | null) => void;
  setShowCreateModal: (show: boolean) => void;
  setShowEditModal: (show: boolean) => void;
  addEpisode: (episode: CreateEpisodeFormValues) => void;
  updateEpisode: (episode: Partial<Episode>) => void;
  deleteEpisode: (id: number) => void;
}

export const episodesStore = create(
  persist<State & Actions>(
    (set) => ({
      episodes: [],
      currentEpisode: null,
      showCreateModal: false,
      showEditModal: false,
      setEpisodes: (episodes) => set({ episodes }),
      setCurrentEpisode: (episode) => set({ currentEpisode: episode }),
      setShowCreateModal: (show) => set({ showCreateModal: show }),
      setShowEditModal: (show) => set({ showEditModal: show }),
      addEpisode: (episode) => {
        const newEpisode = { ...episode, id: Date.now(), characters: [] };
        set((state) => ({ episodes: [newEpisode, ...state.episodes] }));
      },
      updateEpisode: (episode) =>
        set((state) => ({
          episodes: state.episodes.map((e) =>
            e.id === episode.id ? { ...e, ...episode } : e
          ),
        })),
      deleteEpisode: (id) =>
        set((state) => ({
          episodes: state.episodes.filter((e) => e.id !== id),
        })),
    }),
    {
      name: "episodes",
    }
  )
);
