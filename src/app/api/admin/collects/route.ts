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

    const { name, image } = body;

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
    if (!image) {
      return new NextResponse("Image url is required", { status: 400 });
    }

    const collect = await prismadb.collect.create({
      data: {
        name,
        image,
      },
    });

    return NextResponse.json(collect);
  } catch (error) {
    console.log("[COLLECTS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    const body = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const collects = await prismadb.collect.findMany();

    return NextResponse.json(collects);
  } catch (error) {
    console.log("[COLLECTS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
