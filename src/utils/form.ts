import { FieldErrors } from "react-hook-form";

export const formValidation = (
  errors: FieldErrors,
  errorKey: string
): string | null => {
  return errors[errorKey] ? (errors[errorKey]?.message as string) : null;
};
