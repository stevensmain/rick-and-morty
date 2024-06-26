"use server";

import { signIn, signOut } from "@/auth";
import { LoginFormSchema } from "@/schemas";

export const handleLogout = async () => await signOut();

export const login = async (formData: LoginFormSchema) => {
  "use server";
  await signIn("credentials", {
    ...formData,
    redirectTo: "/characters",
  });
};
