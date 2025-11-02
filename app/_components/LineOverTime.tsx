"use client";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  noIncomeArray: { name: string; Value: number }[];
};

const LineOverTime = ({ noIncomeArray }: Props) => {
  return (
    <LineChart width={500} height={500} responsive data={noIncomeArray}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        connectNulls
        type="monotone"
        dataKey="Value"
        stroke="#9810fa"
        fill="#9810fa"
      />
    </LineChart>
  );
};

export default LineOverTime;
