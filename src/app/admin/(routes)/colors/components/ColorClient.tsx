"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ColorColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface ColorClientProps {
  data: ColorColumn[]
}

const SizeClient: React.FC<ColorClientProps> = ({
  data
}) => {
  const router = useRouter()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Colors (${data.length})`} description="Manage Colors of products"/>
        <Button onClick={() => router.push("/admin/colors/new")}>
          <Plus className="mr-2 h-4 w-4"/>
          Add new color
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name"/>
    </>
  )
}

export default SizeClient