import charactersStore from "@/store/characters";

export const useCharacters = () => {
  const {
    addCharacter,
    characters,
    currentCharacter,
    showCreateModal,
    showEditModal,
    removeCharacter,
    setCharacters,
    setCurrentCharacter,
    updateCharacter,
    setShowCreateModal,
    setShowEditModal,
  } = charactersStore();

  return {
    characters,
    currentCharacter,
    showCreateModal,
    showEditModal,
    setShowCreateModal,
    setShowEditModal,
    addCharacter,
    removeCharacter,
    setCharacters,
    setCurrentCharacter,
    updateCharacter,
  };
};
