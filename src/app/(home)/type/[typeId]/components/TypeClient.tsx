import Container from "@/components/container";
import prismadb from "@/lib/prisma";
import { Product } from "@prisma/client";

interface TypeClientProps {
  products: Product[];
}

const TypeClient: React.FC<TypeClientProps> = async ({ products }) => {

  return (
    <Container>
      {products.map((product) => (<div>{product.name}</div>))}
    </Container>
  );
};

export default TypeClient;
