import { ProductClientType } from "../../type";
import ProductCard from "./product-card";

interface ProductListProps {
  items: ProductClientType[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.length === 0 && (
        <div className="flex items-center justify-center h-full w-full text-neutral-500">
          No result found
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
