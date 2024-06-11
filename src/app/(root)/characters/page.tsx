import { CharacterCreateModal, CharactersTable } from "@/components";
import { ApiResponse, Character } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters | Rick And Morty Project",
};

async function getCharacters(): Promise<ApiResponse<Character>> {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  return response.json();
}

export default async function CharactersPage() {
  const { results } = await getCharacters();

  return (
    <>
      <CharactersTable characters={results} />
      <CharacterCreateModal />
    </>
  );
}
