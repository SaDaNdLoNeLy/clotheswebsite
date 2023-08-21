import Container from "@/components/container";
import HomeNav from "@/components/layout/HomeNav";
import { signOut } from "next-auth/react";

export default function ShopPage() {
  return (
    <Container>
      <HomeNav />
      Main page
      Footer
    </Container>
  );
}
