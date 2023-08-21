import HomeNav from "@/components/nav/HomeNav";
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
