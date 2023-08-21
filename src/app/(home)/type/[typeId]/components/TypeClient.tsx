import Container from "@/components/container";
import { ProductClientType } from "../../../../../../type";

interface TypeClientProps {
  products: ProductClientType[];
  typename: string | undefined;
}

const TypeClient: React.FC<TypeClientProps> = async ({ products, typename }) => {


  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-8 mt-10">
        <div className="type-name text-3xl uppercase font-bold">{typename}</div>
      </div>
    </Container>
  );
};

export default TypeClient;
