import * as yup from "yup";

export const EditCharacterSchema = yup.object({
  name: yup.string().required(),
  status: yup.string().required(),
});

export type EditCharacterFormValues = yup.InferType<typeof EditCharacterSchema>;
