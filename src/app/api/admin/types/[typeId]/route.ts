import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prismadb from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { typeId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    const userRole = session?.user.role;
    const body = await req.json();

    const { name, forWho } = body;

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

    if (!forWho) {
      return new NextResponse("Sex is required", { status: 400 });
    }

    if (!params.typeId) {
      return new NextResponse("Type id is required", { status: 400 });
    }

    const newType = await prismadb.type.updateMany({
      where: {
        id: params.typeId,
      },
      data: {
        name,
        for: forWho,
      },
    });

    return NextResponse.json(newType);
  } catch (error) {
    console.log("[SIZE_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { typeId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
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


    const type = await prismadb.type.deleteMany({
      where: {
        id: params.typeId,
      },
    });

    return NextResponse.json(type);
  } catch (error) {
    console.log("[SIZE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { typeId: string } }
) {
  try {
    if (params.typeId === "men") {
      const types = await prismadb.type.findMany({
        where: {
          for: "MALE"
        }
      })

      return NextResponse.json(types)
    }

    if (params.typeId === "women") {
      const types = await prismadb.type.findMany({
        where: {
          for: "FEMALE"
        }
      })

      return NextResponse.json(types)
    }
    
    const type = await prismadb.type.findUnique({
      where: {
        id: params.typeId,
      },
    });

    return NextResponse.json(type);
  } catch (error) {
    console.log("[SIZE_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
