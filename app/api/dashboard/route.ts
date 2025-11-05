// https://nextjs.org/docs/pages/building-your-application/routing/api-routes
// https://nextjs.org/blog/building-apis-with-nextjs#2-why-and-when-to-build-apis-with-nextjs

import { Categories } from "@/app/_types/types";
import { Prisma, PrismaClient } from "@/app/generated/prisma/client";
import { NextRequest, NextResponse } from "next/server";

type PostRequestData = {
  id: number;
  title: string;
  value: number;
  date: Date;
  category: Categories;
  income: boolean;
  note: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

const prisma = new PrismaClient();

export const GET = async (request: NextRequest) => {
  console.log(request.nextUrl.searchParams);

  // const expenses = await prisma.expense.findMany();
  return NextResponse.json({
    expenses: "expenses",
  });
};

export const POST = async (request: NextRequest) => {
  await request.json().then((data) => {
    console.log(data);
  });
  // console.log(await request.json());
  // await prisma.expense.create({
  //   data: {
  //     title: "income",
  //     value: 500,
  //     date: "2025-11-02T11:32:25+00:00",
  //     category: "other",
  //     income: true,
  //     note: "",
  //     userId: "1",
  //     updatedAt: new Date().toISOString(),
  //   },
  // });

  const data = await prisma.expense.findMany();

  return NextResponse.json({
    message: "added",
    expenses: data,
  });
};

export const DELETE = async (request: NextRequest) => {
  const data = await request.json();
  try {
    if (data) {
      await prisma.expense.delete({
        where: {
          userId: data.userId,
          id: data.itemId,
        },
      });

      return NextResponse.json({
        message: "deleted successfully",
      });
    }
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log("error while processing request with given data: ", data);

      return NextResponse.json({
        error: `${error?.meta?.cause}`,
      });
    }

    return NextResponse.json({
      error: "Unexpected error ocurred",
    });
  }
};
