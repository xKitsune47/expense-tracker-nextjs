"use client";
import React, { useEffect } from "react";
import { Cell, Pie, PieChart, Sector, Tooltip } from "recharts";
import { FormattedExpensesArrayItem } from "../dashboard/charts/page";

type Coordinate = {
  x: number;
  y: number;
};

type PieSectorData = {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: { name?: string; value?: number };
};

type PieSectorDataItem = React.SVGProps<SVGPathElement> &
  Partial<React.ComponentProps<typeof Sector>> &
  PieSectorData;

type Props = {
  formattedExpensesArray: FormattedExpensesArrayItem[];
};

const PIE_CHART_COLORS: string[] = [
  "#ff6900",
  "#efb100",
  "#7ccf00",
  "#00c951",
  "#00bba7",
  "#00b8db",
  "#2b7fff",
  "#8e51ff",
  "#e12afb",
  "#ff2056",
];

const PieChartCategories = ({ formattedExpensesArray }: Props) => {
  useEffect(() => {
    const func = async () => {
      const res1 = await fetch("/api/dashboard?uid=1", {
        method: "POST",
        body: JSON.stringify({
          data: "usu",
        }),
      });
      const data1 = await res1.json();
      const res2 = await fetch("/api/dashboard?uid=1");
      const data2 = await res2.json();
      if (data1 && data2) console.log(data1, data2);
    };

    func();
  });

  return (
    <PieChart width={600} height={500}>
      <Pie
        activeShape={renderActiveShape}
        data={formattedExpensesArray.filter(
          (el: FormattedExpensesArrayItem) => el.value > 0
        )}
        innerRadius={100}
        outerRadius={150}
        dataKey="value"
        isAnimationActive={true}>
        {formattedExpensesArray
          .filter((el: FormattedExpensesArrayItem) => el.value > 0)
          .map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]}
            />
          ))}
      </Pie>
      <Tooltip content={() => null} />
    </PieChart>
  );
};

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}: PieSectorDataItem) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        className="font-bold">
        {payload?.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333">{`$${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999">
        {`(${((percent ?? 1) * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default PieChartCategories;
