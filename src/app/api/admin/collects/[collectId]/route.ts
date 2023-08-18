import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prismadb from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { collectId: string } }
) {
  try {
    const session = await getServerSession();
    const userId = session?.user.id;
    const userRole = session?.user.role;
    const body = await req.json();

    const { name, image } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (userRole !== "ADMIN") {
      return new NextResponse("You don't have that permission", {
        status: 404,
      });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!image) {
      return new NextResponse("Image url is required", { status: 400 });
    }

    if (!params.collectId) {
      return new NextResponse("Collection id is required", { status: 400 });
    }

    const newCollect = await prismadb.collect.updateMany({
      where: {
        id: params.collectId,
      },
      data: {
        name,
        image,
      },
    });

    return NextResponse.json(newCollect);
  } catch (error) {
    console.log("[COLLECT_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { collectId: string } }
) {
  try {
    const session = await getServerSession();
    const userId = session?.user.id;
    const userRole = session?.user.role;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (userRole !== "ADMIN") {
      return new NextResponse("You don't have that permission", {
        status: 404,
      });
    }


    const collect = await prismadb.collect.deleteMany({
      where: {
        id: params.collectId,
      },
    });

    return NextResponse.json(collect);
  } catch (error) {
    console.log("[COLLECT_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { collectId: string } }
) {
  try {
    const collect = await prismadb.collect.findUnique({
      where: {
        id: params.collectId,
      },
    });

    return NextResponse.json(collect);
  } catch (error) {
    console.log("[COLLECT_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
