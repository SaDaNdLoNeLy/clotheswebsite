import type { User } from "next-auth";
import type { Role } from "@prisma/client";
import 'next-auth/jwt'

type UserId = string

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId,
    role: Role,
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId,
      role: Role,
    }
  }
}