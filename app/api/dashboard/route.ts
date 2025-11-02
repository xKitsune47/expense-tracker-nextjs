// https://nextjs.org/docs/pages/building-your-application/routing/api-routes
// https://nextjs.org/blog/building-apis-with-nextjs#2-why-and-when-to-build-apis-with-nextjs

import { PrismaClient } from "@/app/generated/prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  const expenses = await prisma.expense.findMany();
  return NextResponse.json({
    message: "Dashboard API działa!",
    expenses: expenses,
  });
};

export const POST = async () => {
  await prisma.expense.create({
    data: {
      title: "income",
      value: 500,
      date: "2025-11-02T11:32:25+00:00",
      category: "other",
      income: true,
      note: "",
      userId: "1",
      updatedAt: new Date().toISOString(),
    },
  });

  const data = await prisma.expense.findMany();

  return NextResponse.json({
    message: "added",
    expenses: data,
  });
};
