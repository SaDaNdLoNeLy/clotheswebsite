import { format } from "date-fns";

import prismadb from "@/lib/prisma";

import ColorClient from "./components/ColorClient";
import { ColorColumn } from "./components/columns";

const SizePage = async () => {
  const colors = await prismadb.color.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorClient data={formatedColors} />
      </div>
    </div>
  );
};

export default SizePage;
