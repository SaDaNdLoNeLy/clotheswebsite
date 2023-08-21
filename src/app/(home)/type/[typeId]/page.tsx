import HomeNav from "@/components/layout/HomeNav"
import TypeClient from "./components/TypeClient"
import prismadb from "@/lib/prisma"


const TypePage = async ({
  params
}: {params: {typeId: string}}) => {
  const products = await prismadb.product.findMany({
    where: {
      typeId: params.typeId
    },
    include: {
      images:true,
      type: true,
      color: true,
      collect: true,
    }
  })
  return (
    <>
      <HomeNav />
      <TypeClient products={products}/>
    </>
  )
}

export default TypePage