import { format } from "date-fns";

import prismadb from "@/lib/prisma";

import ProductClient from "./components/ProductClient";
import { ProductColumn } from "./components/columns";
import { formatter } from "@/lib/utils";

const ProductPage = async () => {
  const products = await prismadb.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      collect: true,
      type: true,
      size: true,
      color: true,
    },
  });

  const formatedProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    prodcode: item.prodcode,
    isFeatured: item.isFeatured,
    amount: item.amount.toString(),
    forWho: item.for,
    price: formatter.format(item.price.toNumber()),
    collect: item.collect?.name || null,
    type: item.type.name,
    size: item.size.name,
    color: item.color.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formatedProducts} />
      </div>
    </div>
  );
};

export default ProductPage;
