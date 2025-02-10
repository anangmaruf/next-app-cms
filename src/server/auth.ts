import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as UserService from "@/server/services/UserService";
import { PrismaAdapter } from "@auth/prisma-adapter";
import argon2 from "argon2";
import prisma from "@/lib/prisma";

const nextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing email or password.");
          }

          // Fetch user from database
          const response = await UserService.findUserByEmail(credentials.email);
          const { name, id, email } = response;
          if (!response) {
            throw new Error("Invalid email or password.");
          }

          // Check password
          const isPasswordValid = argon2.verify(credentials.password, response.password);
          if (!isPasswordValid) {
            throw new Error("Invalid email or password.");
          }
          const user = {
            id,
            name,
            email,
          };

          // Return user object
          return user;
        } catch (error) {
          console.error("Authentication error:", error);
          throw new Error("Authentication failed.");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }): Promise<any> {
      if (user) {
        token.user = user;
      }
      return Promise.resolve(token);
    },
    async session({ session, token }): Promise<any> {
      session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
} satisfies NextAuthOptions;

export default nextAuthOptions;
