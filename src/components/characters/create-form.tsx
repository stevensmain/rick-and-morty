"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button,
  FormMessage,
  useToast,
} from "@/components";
import { useCharacters } from "@/hooks";
import { formValidation } from "@/utils";
import { genderOptions, speciesOptions, statusOptions } from "@/constants";
import { CreateCharacterFormValues, CreateCharacterSchema } from "@/schemas";

export function CreateCharacterForm() {
  const { addCharacter, setShowCreateModal } = useCharacters();
  const { toast } = useToast();

  const form = useForm<CreateCharacterFormValues>({
    defaultValues: {
      name: "",
      image: "",
      gender: "Male",
      species: "Human",
      status: "Alive",
    },
    resolver: yupResolver(CreateCharacterSchema),
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
      addCharacter(data);
      toast({
        title: "Character created",
        description: "The character was created successfully",
      });
      onClose();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "An error occurred while creating the character",
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
            name="image"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Image"
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
            name="gender"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    {...field}
                  >
                    <SelectTrigger className="w-full truncate bg-white">
                      <SelectValue placeholder="Gender" />
                    </SelectTrigger>

                    <SelectContent className="overflow-y-auto max-h-[215px]">
                      {genderOptions.map((gender, index) => (
                        <SelectItem key={index} value={gender.label}>
                          {gender.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage>{formValidation(errors, field.name)}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="species"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    {...field}
                  >
                    <SelectTrigger className="w-full truncate bg-white">
                      <SelectValue placeholder="Specie" />
                    </SelectTrigger>

                    <SelectContent className="overflow-y-auto max-h-[215px]">
                      {speciesOptions.map((specie, index) => (
                        <SelectItem key={index} value={specie.label}>
                          {specie.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage>{formValidation(errors, field.name)}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="status"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    {...field}
                  >
                    <SelectTrigger className="w-full truncate bg-white">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>

                    <SelectContent className="overflow-y-auto max-h-[215px]">
                      {statusOptions.map((status, index) => (
                        <SelectItem key={index} value={status.label}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
