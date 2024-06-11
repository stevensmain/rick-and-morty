export type Status = "Unknown" | "Dead" | "Alive";

export type Gender = "Female" | "Male" | "Genderless" | "unknown";

export type Species =
  | "Human"
  | "Alien"
  | "Humanoid"
  | "Poopybutthole"
  | "Mythological"
  | "Disease"
  | "Animal"
  | "Cronenberg"
  | "Robot"
  | "Unknown";

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  gender: Gender;
  image: string;
  type?: string;
  origin?: Origin;
  location?: Location;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}
