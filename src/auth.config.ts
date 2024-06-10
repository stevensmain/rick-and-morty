import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
import { ValidationError } from "yup";
import { User } from "@prisma/client";
import { loginFormSchema } from "./schemas/login-form-schema";
import db from "@/lib/db";

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
