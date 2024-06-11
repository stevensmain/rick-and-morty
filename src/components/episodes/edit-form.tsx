"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  AlertDialogAction,
  AlertDialogFooter,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@/components";
import { formValidation } from "@/utils";
import { useEpisodes } from "@/hooks";
import { EditEpisodeFormValues, EditEpisodeSchema } from "@/schemas";

export function EpisodeEditForm() {
  const { currentEpisode, setShowEditModal, setCurrentEpisode, updateEpisode } =
    useEpisodes();

  const form = useForm<EditEpisodeFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(EditEpisodeSchema),
  });
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = form;

  const onClose = () => {
    setCurrentEpisode(null);
    setShowEditModal(false);
    reset();
  };

  const onSubmit = handleSubmit((data) => {
    if (!currentEpisode) return;
    updateEpisode({ ...currentEpisode, ...data });
    onClose();
  });

  useEffect(() => {
    if (currentEpisode) {
      setValue("name", currentEpisode.name);
    }
  }, [currentEpisode, setValue]);

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col items-center justify-center gap-6 my-4">
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Name"
                    className="p-4 text-sm bg-white"
                    {...field}
                  />
                </FormControl>

                <FormMessage>{formValidation(errors, field.name)}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <AlertDialogFooter>
          <AlertDialogAction type="submit" className="w-full">
            Apply
          </AlertDialogAction>
        </AlertDialogFooter>
      </form>
    </Form>
  );
}
