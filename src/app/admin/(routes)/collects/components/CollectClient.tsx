"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";


const CollectClient = () => {
  const router = useRouter()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Collect (0)" description="Manage collect of products"/>
        <Button onClick={() => router.push("/admin/collects/new")}>
          <Plus className="mr-2 h-4 w-4"/>
          Add new collection
        </Button>
      </div>
      <Separator />
    </>
  )
}

export default CollectClient