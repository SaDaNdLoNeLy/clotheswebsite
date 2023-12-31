"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SizeColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface SizeClientProps {
  data: SizeColumn[]
}

const SizeClient: React.FC<SizeClientProps> = ({
  data
}) => {
  const router = useRouter()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Sizes (${data.length})`} description="Manage sizes of products"/>
        <Button onClick={() => router.push("/admin/sizes/new")}>
          <Plus className="mr-2 h-4 w-4"/>
          Add new size
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name"/>
    </>
  )
}

export default SizeClient