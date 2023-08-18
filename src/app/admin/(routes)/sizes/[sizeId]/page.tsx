import prismadb from "@/lib/prisma"
import SizeForm from "./components/SizeForm"

const DynamicSizePage = async ({
  params
}: {
  params: {sizeId: string}
}) => {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId
    }
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-4">
        <SizeForm initialData={size}/>
      </div>
    </div>
  )
}

export default DynamicSizePage