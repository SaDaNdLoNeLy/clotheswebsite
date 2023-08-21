import Container from "@/components/container";
import { ProductClientType } from "../../../../../../type";

interface TypeClientProps {
  products: ProductClientType[];
}

const TypeClient: React.FC<TypeClientProps> = async ({ products }) => {
  const imageList = [];
  const typeName = [...new Set(products.map((item: any) => item.type.name))][0];
  console.log(typeName);

  console.log(products);
  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-8 mt-10">
        <div className="type-name text-3xl uppercase font-bold">{typeName}</div>
      </div>
    </Container>
  );
};

export default TypeClient;
