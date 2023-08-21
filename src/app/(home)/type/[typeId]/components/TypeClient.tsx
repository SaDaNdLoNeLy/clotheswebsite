import Container from "@/components/container";
import { ProductClientType } from "../../../../../../type";


interface TypeClientProps {
  products: ProductClientType[];
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
