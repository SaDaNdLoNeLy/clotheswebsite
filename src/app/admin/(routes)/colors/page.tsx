import {format} from "date-fns"

import prismadb from "@/lib/prisma"

import CollectClient from "./components/CollectClient"
import { CollectColumn } from "./components/columns";

const CollectPage = async () => {
  const collects = await prismadb.collect.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });
  
  const formatedCollects: CollectColumn[] = collects.map((item) => ({
    id: item.id,
    name: item.name,
    createdAt: format(item.createdAt, "MMMM do, yyyy")

  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CollectClient data={formatedCollects}/>
      </div>
    </div>
  )
}

export default CollectPage