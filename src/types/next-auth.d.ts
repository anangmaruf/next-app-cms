import NextAuth, { User, type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      token: string;
      name: string;
      email: string;
    };
  }
  interface User {
    id: string;
    token: string;
    name: string;
    email: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: number;
      token: string;
      name: string;
      email: string;
    };
  }
}

// declare module "next-auth" {
//   interface Session extends DefaultSession {
//     user: {
//       id: string;
//     } & DefaultSession["user"];
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     userId: string;
//   }
// }
