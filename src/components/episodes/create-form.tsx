"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  Button,
  FormMessage,
  useToast,
} from "@/components";
import { useEpisodes } from "@/hooks";
import { formValidation } from "@/utils";
import { CreateEpisodeFormValues, CreateEpisodeSchema } from "@/schemas";

export function EpisodeCreateForm() {
  const { addEpisode, setShowCreateModal } = useEpisodes();
  const { toast } = useToast();

  const form = useForm<CreateEpisodeFormValues>({
    defaultValues: {
      name: "",
      air_date: "",
      episode: "",
      season: "",
    },
    resolver: yupResolver(CreateEpisodeSchema),
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const onClose = () => {
    setShowCreateModal(false);
    reset();
  };

  const onSubmit = handleSubmit((data) => {
    try {
      addEpisode(data);
      toast({
        title: "Episode created",
        description: "The episode was created successfully",
      });
      onClose();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "An error occurred while creating the episode",
        variant: "destructive",
      });
    }
  });

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

          <FormField
            control={control}
            name="air_date"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="date"
                    placeholder="Air date"
                    className="p-4 text-sm bg-white"
                    {...field}
                  />
                </FormControl>

                <FormMessage>{formValidation(errors, field.name)}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="season"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    placeholder="Season"
                    className="p-4 text-sm bg-white"
                    {...field}
                  />
                </FormControl>

                <FormMessage>{formValidation(errors, field.name)}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="episode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    placeholder="Episode"
                    className="p-4 text-sm bg-white"
                    {...field}
                  />
                </FormControl>

                <FormMessage>{formValidation(errors, field.name)}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Apply
        </Button>
      </form>
    </Form>
  );
}
