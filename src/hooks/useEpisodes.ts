import { episodesStore } from "@/store";

export const useEpisodes = () => {
  const {
    episodes,
    currentEpisode,
    showEditModal,
    showCreateModal,
    addEpisode,
    deleteEpisode,
    setCurrentEpisode,
    setEpisodes,
    setShowCreateModal,
    setShowEditModal,
    updateEpisode,
  } = episodesStore();

  return {
    episodes,
    currentEpisode,
    showEditModal,
    showCreateModal,
    addEpisode,
    deleteEpisode,
    setCurrentEpisode,
    setEpisodes,
    setShowCreateModal,
    setShowEditModal,
    updateEpisode,
  };
};
