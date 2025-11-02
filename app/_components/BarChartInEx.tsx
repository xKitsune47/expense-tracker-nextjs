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

const BarChartInEx = ({
  incomeExpense,
}: {
  name: string;
  income: number;
  expense: number;
}[]) => {
  return (
    <BarChart data={incomeExpense} responsive width={500} height={500}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Bar dataKey="income" fill="#00c951" activeBar={<Rectangle />} />
      <Bar dataKey="expense" fill="#fb2c36" activeBar={<Rectangle />} />
    </BarChart>
  );
};

export default BarChartInEx;
