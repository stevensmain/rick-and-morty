import { CharacterCreateModal, CharactersTable } from "@/components";
import { ApiResponse, Character } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters | Rick And Morty Project",
};

async function getCharacters(query: string): Promise<ApiResponse<Character>> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?${query}`
  );
  if (!response.ok) {
    return {
      info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
      },
      results: [],
    };
  }
  return response.json();
}

export default async function CharactersPage({
  searchParams,
}: {
  searchParams: {
    page?: string;
    name?: string;
    species?: string;
    gender?: string;
    status?: string;
  };
}) {
  const searchQuery = new URLSearchParams(searchParams).toString();
  const { results } = await getCharacters(searchQuery);

  return (
    <>
      <CharactersTable characters={results} />
      <CharacterCreateModal />
    </>
  );
}
