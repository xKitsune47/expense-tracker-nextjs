"use client";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  incomeExpense: {
    name: string;
    Income: number;
    Expense: number;
  }[];
};

const BarChartInEx = ({ incomeExpense }: Props) => {
  return (
    <BarChart data={incomeExpense} responsive width={500} height={500}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Bar dataKey="Income" fill="#00c951" activeBar={<Rectangle />} />
      <Bar dataKey="Expense" fill="#fb2c36" activeBar={<Rectangle />} />
    </BarChart>
  );
};

export default BarChartInEx;
