// "use client";

import React from "react";
import BarChartInEx from "@/app/_components/BarChartInEx";
import LineOverTime from "@/app/_components/LineOverTime";
import PieChartCategories from "@/app/_components/PieChartCategories";
import { getSession } from "@/app/_lib/auth";
import { PrismaClient } from "@/app/generated/prisma/client";

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
}[];

export type FormattedExpensesArrayItem = { name: string; value: number };
export type IncomeExpense = { name: string; Income: number; Expense: number }[];

const prisma = new PrismaClient();

const page = async () => {
  const sess = await getSession();

  const formattedCategories: { [key: string]: number } = {
    Food: 0,
    Transportation: 0,
    Housing: 0,
    Utilities: 0,
    Entertainment: 0,
    Health: 0,
    Education: 0,
    Shopping: 0,
    Travel: 0,
    Other: 0,
  };
  const formattedExpensesArray: FormattedExpensesArrayItem[] = [];
  const incomeExpense: IncomeExpense = [
    { name: "Income/expense", Income: 0, Expense: 0 },
  ];
  const noIncomeArray: { name: string; Value: number }[] = [];

  let fetchedExpenses: ExpenseData = [];

  if (sess?.user.id) {
    const data = await prisma.expense.findMany({
      where: {
        userId: `1`,
      },
    });

    fetchedExpenses = data;
    console.log(data);

    data
      .map((el) => {
        if (!el.income) {
          return { name: el.date.toISOString().split("T")[0], value: el.value };
        }
      })
      .filter((el) => el !== undefined)
      .forEach((el) => {
        if (el) {
          if (noIncomeArray.length === 0) {
            noIncomeArray.push({ name: el.name, Value: el.value });
          } else {
            const existingItem = noIncomeArray.find(
              (elem) => elem.name === el.name
            );
            if (existingItem) {
              existingItem.Value += el.value;
            } else {
              noIncomeArray.push({ name: el.name, Value: el.value });
            }
          }
        }
      });

    data.forEach((el) => {
      if (!el.income) {
        formattedCategories[el.category] += el.value;
        incomeExpense[0].Expense += el.value;
      } else {
        incomeExpense[0].Income += el.value;
      }
    });

    Object.keys(formattedCategories).forEach((key) => {
      formattedExpensesArray.push({
        name: key,
        value: Math.round(formattedCategories[key] * 100) / 100,
      });
    });
  }

  if (fetchedExpenses.length === 0) {
    return (
      <div className="flex w-full items-center justify-center">
        <p className="font-bold text-center text-xl text-purple-950">
          Nothing to see here yet...
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 w-full h-full">
      {fetchedExpenses.length > 0 && (
        <>
          {!formattedExpensesArray.every((el) => el.value === 0) && (
            <div className="flex flex-col items-center">
              <p className="font-bold text-purple-950">
                Expenses in each category
              </p>
              <PieChartCategories
                formattedExpensesArray={formattedExpensesArray}
              />
            </div>
          )}

          {(incomeExpense[0].Income > 0 || incomeExpense[0].Expense > 0) && (
            <div className="flex flex-col items-center">
              <p className="font-bold text-purple-950">
                Income to expense ratio
              </p>
              <BarChartInEx incomeExpense={incomeExpense} />
            </div>
          )}

          {noIncomeArray.length > 0 && (
            <div className="flex flex-col items-center">
              <p className="font-bold text-purple-950">Expenses over time</p>
              <LineOverTime noIncomeArray={noIncomeArray.reverse()} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default page;
