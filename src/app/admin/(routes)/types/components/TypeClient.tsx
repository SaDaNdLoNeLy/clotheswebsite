"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { TypeColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface TypeClientProps {
  data: TypeColumn[]
}

const TypeClient: React.FC<TypeClientProps> = ({
  data
}) => {
  const router = useRouter()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Types (${data.length})`} description="Manage types of products"/>
        <Button onClick={() => router.push("/admin/types/new")}>
          <Plus className="mr-2 h-4 w-4"/>
          Add new type
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name"/>
    </>
  )
}

export default TypeClient