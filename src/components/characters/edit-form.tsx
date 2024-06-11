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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";
import { statusOptions } from "@/constants";
import { formValidation } from "@/utils";
import { useCharacters } from "@/hooks";
import { EditCharacterFormValues, EditCharacterSchema } from "@/schemas";

export function CharacterEditForm() {
  const {
    currentCharacter,
    setShowEditModal,
    setCurrentCharacter,
    updateCharacter,
  } = useCharacters();

  const form = useForm<EditCharacterFormValues>({
    defaultValues: {
      name: "",
      status: "Alive",
    },
    resolver: yupResolver(EditCharacterSchema),
  });
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = form;

  const onClose = () => {
    setCurrentCharacter(null);
    setShowEditModal(false);
    reset();
  };

  const onSubmit = handleSubmit((data) => {
    if (!currentCharacter) return;
    updateCharacter({ ...currentCharacter, ...data });
    onClose();
  });

  useEffect(() => {
    if (currentCharacter) {
      setValue("name", currentCharacter.name);
      setValue("status", currentCharacter.status);
    }
  }, [currentCharacter, setValue]);

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
                      {statusOptions.map((specie, index) => (
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
