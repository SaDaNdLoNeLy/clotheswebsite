import Container from "@/components/container";
import HomeNav from "@/components/layout/HomeNav";
import { signOut } from "next-auth/react";
import HomeClient from "./components/HomeClient";

export default function ShopPage() {
  return (
    <>
      <HomeNav />
      <HomeClient />
    </>
  );
}
