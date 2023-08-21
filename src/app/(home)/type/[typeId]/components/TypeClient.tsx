import Container from "@/components/container";
import prismadb from "@/lib/prisma";
import { Color, Image, Product, Size, Type } from "@prisma/client";


interface TypeClientProps {
  products: (Product & { type: Type } & { images: Image[] } & {
    color: Color
  } & { size: Size })[];
}

const TypeClient: React.FC<TypeClientProps> = async ({ products }) => {
  const imageList = []
  console.log(products)
  return (
    <Container>
    </Container>
  );
};

export default TypeClient;
