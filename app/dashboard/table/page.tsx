import React from "react";
import { getSession } from "@/app/_lib/auth";
import { PrismaClient } from "@/app/generated/prisma/client";
import TableElementActionButtons from "@/app/_components/TableElementActionButtons";
import { formatDate } from "@/app/_helpers/formatDate";

type ExpenseData = {
  id: number;
  title: string;
  value: number;
  date: Date;
  category: string;
  income: boolean;
  note: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

const prisma = new PrismaClient();

const page = async () => {
  const sess = await getSession();

  let fetchedData;

  if (sess?.user.id) {
    fetchedData = await prisma.expense.findMany({
      where: { userId: "1" },
    });

    if (fetchedData) console.log(fetchedData);
  }

  return (
    <div className="w-full h-full max-h-[600px] overflow-y-auto overflow-x-auto">
      <table className="w-full">
        <thead className="bg-purple-300 sticky top-0">
          <tr>
            <th scope="col" className="p-2 text-purple-950">
              Title
            </th>
            <th scope="col" className="p-2 text-purple-950">
              Value
            </th>
            <th scope="col" className="p-2 text-purple-950">
              Date
            </th>
            <th scope="col" className="p-2 text-purple-950">
              Category
            </th>
            <th scope="col" className="p-2 text-purple-950">
              Notes
            </th>
            <th scope="col" className="p-2 text-purple-950">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {fetchedData !== undefined && fetchedData.length > 0 ? (
            fetchedData.map((el: ExpenseData) => {
              return (
                <tr
                  key={el.id}
                  className="even:bg-purple-100 odd:bg-purple-200 text-center">
                  <td className="p-2">{el.title}</td>
                  <td
                    className={`p-2 font-bold ${
                      el.income ? "text-green-600" : "text-red-600"
                    }`}>
                    {el.income ? "+" : "-"}
                    {el.value}
                  </td>
                  <td className="p-2">{formatDate(el.date)}</td>
                  <td className="p-2">{el.category}</td>
                  <td className="p-2">{el.note || ""}</td>
                  {sess?.user.id && (
                    <TableElementActionButtons
                      itemId={el.id}
                      userId={sess?.user.id}
                    />
                  )}
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={6}
                className="text-center p-4 font-bold text-2xl text-purple-950">
                Nothing here yet...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default page;
