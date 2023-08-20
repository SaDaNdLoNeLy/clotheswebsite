import prismadb from "@/lib/prisma"
import ProductForm from "./components/ProductForm"

const DynamicProductPage = async ({
  params
}: {
  params: {productId: string}
}) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId
    },
    include: {
      images: true,
    }
  })

  if (product?.colId === null) {
    product.colId = "null"
  }

  const types = await prismadb.type.findMany()

  const collects = await prismadb.collect.findMany()

  const colors = await prismadb.color.findMany()

  const sizes = await prismadb.size.findMany()

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-4">
        <ProductForm 
          types={types}
          collects={collects}
          colors={colors}
          sizes={sizes}
          initialData={product}
        />
      </div>
    </div>
  )
}

export default DynamicProductPage