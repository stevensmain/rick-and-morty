import { NextRequest, NextResponse } from "next/server";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import db from "@/libs/db";

interface UserRequestBody {
  email: string;
  username: string;
  password: string;
}

interface AppError extends Error {
  message: string;
  name: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: UserRequestBody = await request.json();

    const userFound = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userFound) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    const usernameFound: User | null = await db.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (usernameFound) {
      return NextResponse.json(
        { message: "username already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      },
    });

    const { password: _, ...user } = newUser;

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    const appError = error as AppError;
    return NextResponse.json({ message: appError.message }, { status: 500 });
  }
}
