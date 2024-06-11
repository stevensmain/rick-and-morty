import { Metadata } from "next";
import { ApiResponse, Episode } from "@/types";

export const metadata: Metadata = {
  title: "Episodes | Rick And Morty Project",
};

async function getEpisodes(): Promise<ApiResponse<Episode>> {
  const response = await fetch("https://rickandmortyapi.com/api/episode");
  if (!response.ok) {
    throw new Error("Failed to fetch episodes");
  }
  return response.json();
}

export default async function EpisodesPage() {
  const { results } = await getEpisodes();
  console.log(results);

  return <></>;
}
