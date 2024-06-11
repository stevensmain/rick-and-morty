import * as yup from "yup";

export const EditEpisodeSchema = yup.object({
  name: yup.string().required(),
});

export type EditEpisodeFormValues = yup.InferType<typeof EditEpisodeSchema>;
