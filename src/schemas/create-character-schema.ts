import { Gender, Species, Status } from "@/types";
import * as yup from "yup";

export const CreateCharacterSchema = yup.object({
  image: yup.string().required().url(),
  name: yup.string().required(),
  status: yup.mixed<Status>().oneOf(["Unknown", "Dead", "Alive"]).required(),
  species: yup
    .mixed<Species>()
    .oneOf([
      "Human",
      "Alien",
      "Humanoid",
      "Poopybutthole",
      "Mythological",
      "Disease",
      "Animal",
      "Cronenberg",
      "Robot",
      "Unknown",
    ])
    .required(),
  gender: yup
    .mixed<Gender>()
    .oneOf(["Female", "Male", "Genderless", "unknown"])
    .required(),
});

export type CreateCharacterFormValues = yup.InferType<
  typeof CreateCharacterSchema
>;
