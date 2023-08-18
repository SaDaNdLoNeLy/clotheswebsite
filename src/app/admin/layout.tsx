import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

import prismadb from "@/lib/prisma";
import Navbar from "@/components/layout/Navbar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log("hello")
    redirect("/auth")
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
