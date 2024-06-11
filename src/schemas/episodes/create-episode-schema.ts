import * as yup from "yup";

export const CreateEpisodeSchema = yup.object({
  name: yup.string().required(),
  air_date: yup.string().required(),
  season: yup.string().required(),
  episode: yup.string().required(),
});

export type CreateEpisodeFormValues = yup.InferType<typeof CreateEpisodeSchema>;
