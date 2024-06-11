import * as yup from "yup";
import { Status } from "@/types";

export const EditCharacterSchema = yup.object({
  name: yup.string().required(),
  status: yup.mixed<Status>().oneOf(["Unknown", "Dead", "Alive"]).required(),
});

export type EditCharacterFormValues = yup.InferType<typeof EditCharacterSchema>;
