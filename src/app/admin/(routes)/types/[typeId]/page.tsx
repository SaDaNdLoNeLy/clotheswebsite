import prismadb from "@/lib/prisma"
import TypeForm from "./components/TypeForm"

const DynamicTypePage = async ({
  params
}: {
  params: {typeId: string}
}) => {
  const type = await prismadb.type.findUnique({
    where: {
      id: params.typeId
    }
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-4">
        <TypeForm initialData={type}/>
      </div>
    </div>
  )
}

export default DynamicTypePage