import { format } from "date-fns";

import prismadb from "@/lib/prisma";

import TypeClient from "./components/TypeClient";
import {  TypeColumn } from "./components/columns";

const SizePage = async () => {
  const types = await prismadb.type.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedTypes: TypeColumn[] = types.map((item) => ({
    id: item.id,
    name: item.name,
    forWho: item.for,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <TypeClient data={formatedTypes} />
      </div>
    </div>
  );
};

export default SizePage;
