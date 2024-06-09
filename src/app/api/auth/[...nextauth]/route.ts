import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import db from "@/libs/db";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials) throw new Error("No credentials provided");
        const { email, password } = credentials;

        const user: User | null = await db.user.findUnique({
          where: { email },
        });

        if (!user) throw new Error("User not found");
        if (!bcrypt.compareSync(password, user.password))
          throw new Error("Invalid password");

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
    signOut: "/login",
    newUser: "/register",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
