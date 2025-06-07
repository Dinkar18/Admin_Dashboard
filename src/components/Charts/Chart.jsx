import React from "react";
import AreaChartComponent from "./AreaChartComponent";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";

const Chart = () => {
  return (
    <div className="flex flex-col gap-12 w-full">
      <h2 className="text-2xl font-bold text-center">Analytics Dashboard</h2>

      <div className="bg-white dark:bg-[#2c2c2c] rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">User Growth (Area Chart)</h3>
        <AreaChartComponent />
      </div>

      <div className="bg-white dark:bg-[#2c2c2c] rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Monthly Revenue (Bar Chart)</h3>
        <BarChartComponent />
      </div>

      <div className="bg-white dark:bg-[#2c2c2c] rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Website Traffic (Line Chart)</h3>
        <LineChartComponent />
      </div>

      <div className="bg-white dark:bg-[#2c2c2c] rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">User Distribution (Pie Chart)</h3>
        <PieChartComponent />
      </div>
    </div>
  );
};

export default Chart;
