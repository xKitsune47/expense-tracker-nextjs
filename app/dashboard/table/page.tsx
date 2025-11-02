"use client";

import React from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
// import { getSession } from "@/app/_lib/auth";

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
    date: "2025-10-24",
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

// const sampleData: ExpenseData[] = [];

const page = () => {
  // const user = getSession(); // needed for userID to check if this user really "owns" this expense

  const onEditAction = (id: number) => {
    console.log("edit", id);
  };
  const onDeleteAction = (id: number) => {
    console.log("delete", id);
  };

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
            <th scope="col" className="p-2 text-purple-950" colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleData.length > 0 ? (
            sampleData.map((el: ExpenseData) => {
              return (
                <tr
                  key={el.id}
                  className="even:bg-purple-100 odd:bg-purple-200">
                  <td className="p-2">{el.title}</td>
                  <td className="p-2">
                    <span
                      className={
                        el.income ? "text-green-600 font-bold" : "text-red-600"
                      }>
                      {el.income ? "+" : "-"}
                      {el.value}
                    </span>
                  </td>
                  <td className="p-2">{el.date}</td>
                  <td className="p-2">{el.category}</td>
                  <td className="p-2">{el.note || ""}</td>
                  <td className="p-2">
                    <PencilSquareIcon
                      className="size-6 text-purple-950 hover:text-purple-600 transition-all duration-200 cursor-pointer"
                      onClick={() => onEditAction(el.id)}
                    />
                  </td>
                  <td className="p-2">
                    <TrashIcon
                      className="size-6 text-red-800 hover:text-red-500 transition-all duration-200 cursor-pointer"
                      onClick={() => onDeleteAction(el.id)}
                    />
                  </td>
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
