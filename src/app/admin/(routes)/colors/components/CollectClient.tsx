"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CollectColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface CollectClientProps {
  data: CollectColumn[]
}

const CollectClient: React.FC<CollectClientProps> = ({
  data
}) => {
  const router = useRouter()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Collect (${data.length})`} description="Manage collect of products"/>
        <Button onClick={() => router.push("/admin/collects/new")}>
          <Plus className="mr-2 h-4 w-4"/>
          Add new collection
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name"/>
    </>
  )
}

export default CollectClient