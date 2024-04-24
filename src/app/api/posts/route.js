import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page")) || 1;
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 2;
  const skip = Math.max(0, POST_PER_PAGE * (page - 1));
  const query = {
    take: POST_PER_PAGE,
    skip: skip,
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};

// to create a post
export const POST = async (req) => {
  const session = await getAuthSession();
  // console.log(session);
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "not authenticated" }, { status: 401 })
    );
  }
  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};
