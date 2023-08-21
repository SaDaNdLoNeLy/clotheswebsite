import Link from "next/link";
import Container from "../container";
import TypeNav from "./TypeNav";
import CartButton from "./CartButton";

const HomeNav = () => {
  return (
    <div className="z-50 border-b w-full">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-20 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-extrabold text-green-950 text-4xl">FASHION</p>
          </Link>
          <TypeNav />
          <CartButton />
        </div>
      </Container>
    </div>
  );
};

export default HomeNav;
