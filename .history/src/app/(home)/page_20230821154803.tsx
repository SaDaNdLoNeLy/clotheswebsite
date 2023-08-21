import HomeNav from "@/components/nav/HomeNav";
import { signOut } from "next-auth/react";
import HomeClient from "./components/HomeClient";
import Footer from "@/components/shopwebui/footer";
export default function ShopPage() {
  return (
    <>
      <HomeNav />
      <HomeClient />
      <Footer />
    </>
  );
}
