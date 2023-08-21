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

    const { name, forWho } = body;

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
    if (!forWho) {
      return new NextResponse("Sex is required", { status: 400 });
    }

    const type = await prismadb.type.create({
      data: {
        name,
        for: forWho,
      },
    });

    return NextResponse.json(type);
  } catch (error) {
    console.log("[TYPES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const forWho: any = searchParams.get("for");
    const types = await prismadb.type.findMany({
      where: {
        for: forWho
      },
      orderBy: {
        name: "asc"
      }
    });

    return NextResponse.json(types);
  } catch (error) {
    console.log("[SIZES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
