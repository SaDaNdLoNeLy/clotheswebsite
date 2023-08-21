import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import prismadb from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    const userRole = session?.user.role;
    const body = await req.json();

    let {
      name,
      prodcode,
      forWho,
      price,
      amount,
      colId,
      colorId,
      sizeId,
      typeId,
      images,
      isFeatured,
    } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (userRole !== "ADMIN") {
      return new NextResponse("You don't have that permission", {
        status: 404,
      });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!prodcode) {
      return new NextResponse("Product code is required", { status: 400 });
    }
    if (!forWho) {
      return new NextResponse("For is required", { status: 400 });
    }
    if (!price) {
      return new NextResponse("Price is required", { status: 400 });
    }
    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }
    if (colId === "null") {
      colId = undefined;
    }
    if (!colorId) {
      return new NextResponse("Color is required", { status: 400 });
    }
    if (!sizeId) {
      return new NextResponse("Size is required", { status: 400 });
    }
    if (!typeId) {
      return new NextResponse("Type is required", { status: 400 });
    }
    if (!images || !images.length) {
      return new NextResponse("Image is required", { status: 400 });
    }

    const product = await prismadb.product.create({
      data: {
        name,
        prodcode,
        price,
        amount,
        isFeatured,
        typeId,
        colId,
        colorId,
        sizeId,
        for: forWho,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCTS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}


