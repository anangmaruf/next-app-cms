import prisma from "@/lib/prisma";
import { UserRegisterProps } from "@/types/User.types";
import argon2 from "argon2";

const findUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

const createRegisterUser = async (user: UserRegisterProps) => {
  try {
    const hashPassword = await argon2.hash(user.password);

    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashPassword,
      },
    });
    return { id: newUser.id, name: newUser.name, email: newUser.email };
  } catch (error: any) {
    throw new Error(error);
  }
};

export { findUserByEmail, createRegisterUser };
