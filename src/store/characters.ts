import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CreateCharacterFormValues } from "@/schemas";
import { Character } from "@/types";

interface State {
  characters: Character[];
  currentCharacter: Character | null;
  showCreateModal: boolean;
  showEditModal: boolean;
}

interface Actions {
  setCharacters: (characters: Character[]) => void;
  addCharacter: (character: CreateCharacterFormValues) => void;
  setCurrentCharacter: (character: Character | null) => void;
  removeCharacter: (id: number) => void;
  updateCharacter: (character: Partial<Character>) => void;
  setShowCreateModal: (show: boolean) => void;
  setShowEditModal: (show: boolean) => void;
}

export const charactersStore = create(
  persist<State & Actions>(
    (set) => ({
      characters: [],
      currentCharacter: null,
      showCreateModal: false,
      showEditModal: false,
      setCharacters: (characters) => set({ characters }),
      addCharacter: (character) => {
        const newCharacter = {
          ...character,
          id: Math.floor(Math.random() * 1000),
        };
        set((state) => ({ characters: [newCharacter, ...state.characters] }));
      },
      setCurrentCharacter: (character) => set({ currentCharacter: character }),
      removeCharacter: (id) =>
        set((state) => ({
          characters: state.characters.filter(
            (character) => character.id !== id
          ),
        })),
      updateCharacter: (character) =>
        set((state) => ({
          characters: state.characters.map((c) =>
            c.id === character.id ? { ...c, ...character } : c
          ),
        })),

      setShowCreateModal: (show) => set({ showCreateModal: show }),
      setShowEditModal: (show) => set({ showEditModal: show }),
    }),
    {
      name: "auth",
    }
  )
);
