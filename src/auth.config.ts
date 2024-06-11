import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { User } from "@prisma/client";
import { ValidationError } from "yup";
import type { NextAuthConfig } from "next-auth";

import { loginFormSchema } from "@/schemas";
import { db } from "@/lib";

export default {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials): Promise<any> {
        try {
          const { email, password } = await loginFormSchema.validate(
            credentials
          );

          const user: User | null = await db.user.findUnique({
            where: { email },
          });

          if (!user) throw new Error("User not found");
          if (!bcrypt.compareSync(password, user.password))
            throw new Error("Invalid password");

          return user;
        } catch (error) {
          if (error instanceof ValidationError) {
            return error;
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/register",
    error: "/login",
  },
} satisfies NextAuthConfig;
