import HomeNav from "@/components/nav/HomeNav";
import TypeClient from "./components/TypeClient";
import prismadb from "@/lib/prisma";
import Footer from "@/components/shopwebui/footer";

const TypePage = async ({ params }: { params: { typeId: string } }) => {
  // Cần lọc array bằng function trc khi truyền vào TypeClient
  const products = await prismadb.product.findMany({
    where: {
      typeId: params.typeId,
    },
    include: {
      images: true,
      color: true,
      size: true,
      type: true,
    },
  });

  const type = await prismadb.type.findFirst({
    where: {
      id: params.typeId
    }
  })

  return (
    <>
      <HomeNav />
      <TypeClient products={products} typename={type?.name} />
      <Footer />
    </>
  );
};

export default TypePage;
