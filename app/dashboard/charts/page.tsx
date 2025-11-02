"use client";

import React from "react";
import BarChartInEx from "@/app/_components/BarChartInEx";
import LineOverTime from "@/app/_components/LineOverTime";
import PieChartCategories from "@/app/_components/PieChartCategories";

type ExpenseData = {
  id: number;
  title: string;
  value: number;
  date: string;
  category: string;
  income: boolean;
  note?: string;
};

const sampleData: ExpenseData[] = [
  {
    id: 1,
    title: "Groceries",
    value: 125.5,
    date: "2025-10-25",
    category: "Food",
    income: false,
    note: "Weekly grocery shopping at Walmart",
  },
  {
    id: 2,
    title: "Gas",
    value: 45.0,
    date: "2025-10-25",
    category: "Transportation",
    income: false,
    note: "Filled up tank at Shell station on Main St",
  },
  {
    id: 3,
    title: "Restaurant",
    value: 68.25,
    date: "2025-10-23",
    category: "Food",
    income: false,
    note: "Dinner with friends at Italian restaurant downtown. Had amazing pasta and tiramisu for dessert.",
  },
  {
    id: 4,
    title: "Netflix Subscription",
    value: 15.99,
    date: "2025-10-22",
    category: "Entertainment",
    income: false,
    note: "Monthly subscription",
  },
  {
    id: 5,
    title: "Electricity Bill",
    value: 89.3,
    date: "2025-10-21",
    category: "Utilities",
    income: false,
    note: "October electricity payment. Usage was higher this month due to AC running constantly during heat wave.",
  },
  {
    id: 6,
    title: "Coffee",
    value: 5.75,
    date: "2025-10-20",
    category: "Food",
    income: false,
    note: "Morning latte",
  },
  {
    id: 7,
    title: "Gym Membership",
    value: 50.0,
    date: "2025-10-19",
    category: "Health",
    income: false,
    note: "Monthly gym membership fee at FitLife. Includes access to all classes and personal training sessions.",
  },
  {
    id: 8,
    title: "Books",
    value: 32.99,
    date: "2025-10-18",
    category: "Education",
    income: false,
    note: "Programming books from Amazon",
  },
  {
    id: 9,
    title: "Uber Ride",
    value: 18.5,
    date: "2025-10-17",
    category: "Transportation",
    income: false,
    note: "Ride to airport",
  },
  {
    id: 10,
    title: "Movie Tickets",
    value: 28.0,
    date: "2025-10-16",
    category: "Entertainment",
    income: false,
    note: "Two tickets for evening show at AMC Theater. Watched the new sci-fi thriller everyone's been talking about.",
  },
  {
    id: 11,
    title: "Payday",
    value: 500,
    date: "2025-10-16",
    category: "Other",
    income: true,
    note: "Monthly salary deposit",
  },
  {
    id: 12,
    title: "Internet Bill",
    value: 65.0,
    date: "2025-10-15",
    category: "Utilities",
    income: false,
    note: "Fiber optic 500mbps plan from Verizon",
  },
  {
    id: 13,
    title: "Pharmacy",
    value: 24.5,
    date: "2025-10-14",
    category: "Health",
    income: false,
    note: "Prescription refill and vitamins",
  },
  {
    id: 14,
    title: "Parking Fee",
    value: 12.0,
    date: "2025-10-13",
    category: "Transportation",
    income: false,
    note: "Downtown parking garage - 4 hours",
  },
  {
    id: 15,
    title: "Freelance Project",
    value: 350.0,
    date: "2025-10-12",
    category: "Other",
    income: true,
    note: "Website design project for local business. Completed ahead of schedule with positive client feedback.",
  },
  {
    id: 16,
    title: "New Headphones",
    value: 89.99,
    date: "2025-10-11",
    category: "Shopping",
    income: false,
    note: "Noise-cancelling wireless headphones",
  },
  {
    id: 17,
    title: "Pet Supplies",
    value: 42.3,
    date: "2025-10-10",
    category: "Shopping",
    income: false,
    note: "Dog food and treats from PetSmart",
  },
  {
    id: 18,
    title: "Haircut",
    value: 35.0,
    date: "2025-10-09",
    category: "Health",
    income: false,
    note: "Trim and styling at usual barbershop",
  },
  {
    id: 19,
    title: "Spotify Premium",
    value: 10.99,
    date: "2025-10-08",
    category: "Entertainment",
    income: false,
    note: "Monthly music streaming subscription",
  },
  {
    id: 20,
    title: "Clothes Shopping",
    value: 156.75,
    date: "2025-10-07",
    category: "Shopping",
    income: false,
    note: "Fall wardrobe update at H&M. Got two sweaters, jeans, and a jacket on sale.",
  },
];

const page = () => {
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
  const formattedExpensesArray: { name: string; value: number }[] = [];
  const incomeExpense: { name: string; income: number; expense: number }[] = [
    { name: "Income/expense", income: 0, expense: 0 },
  ];
  const noIncomeArray: { name: string; Value: number }[] = [];
  sampleData
    .map((el) => {
      if (!el.income) {
        return { name: el.date, value: el.value };
      }
    })
    .filter((el) => el !== undefined)
    .forEach((el) => {
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
    });

  if (sampleData.length > 0) {
    sampleData.forEach((el) => {
      if (!el.income) {
        formattedCategories[el.category] += el.value;
        incomeExpense[0].expense += el.value;
      } else {
        incomeExpense[0].income += el.value;
      }
    });

    Object.keys(formattedCategories).map((key) => {
      formattedExpensesArray.push({
        name: key,
        value: Math.round(formattedCategories[key] * 100) / 100,
      });
    });
  }

  return (
    <div className="flex flex-col w-full h-full">
      {sampleData.length === 0 && (
        <p className="font-bold text-center">Nothing to see here yet...</p>
      )}
      {sampleData.length > 0 && (
        <>
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center">
              <p>Expenses in each category</p>
              <PieChartCategories
                formattedExpensesArray={formattedExpensesArray}
              />
            </div>
            <div className="flex flex-col items-center">
              <p>Income to expense ratio</p>
              <BarChartInEx incomeExpense={incomeExpense} />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col items-center">
              <p>Expenses over time</p>
              <LineOverTime noIncomeArray={noIncomeArray.reverse()} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
