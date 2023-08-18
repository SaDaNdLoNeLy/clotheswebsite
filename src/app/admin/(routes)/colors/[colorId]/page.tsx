import prismadb from "@/lib/prisma"
import CollectForm from "./components/CollectForm"

const DynamicCollectPage = async ({
  params
}: {
  params: {collectId: string}
}) => {
  const collect = await prismadb.collect.findUnique({
    where: {
      id: params.collectId
    }
  })

  console.log(collect)

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-4">
        <CollectForm initialData={collect}/>
      </div>
    </div>
  )
}

export default DynamicCollectPage