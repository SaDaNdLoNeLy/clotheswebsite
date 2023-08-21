import Container from "@/components/container";
import { ProductClientType } from "../../../../../../type";
import ProductList from "@/components/product-list";
import { productFirst } from "@/lib/utils";

interface TypeClientProps {
  products: ProductClientType[];
  typename: string | undefined;
}

const TypeClient: React.FC<TypeClientProps> = async ({ products, typename }) => {
  const trimProducts = productFirst(products)

  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-8 mt-10">
        <div className="type-name text-3xl uppercase font-bold">{typename}</div>
        <ProductList items={trimProducts}/>
      </div>
    </Container>
  );
};

export default TypeClient;
