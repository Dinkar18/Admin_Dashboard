import React, { useContext } from "react";
import Card from "./Card";
import Chart from "./Chart";
import { PieChart } from "./PieChart";
import Schedules from "./Schedules";
import LineChart from "./LineChart";
import { Context } from "../../context/contextApi";
import revenue from "../../images/Vector.svg";
import likes from "../../images/Vector (1).svg";
import users from "../../images/Vector (2).svg";
import trans from "../../images/total_transactions_icon.svg";

export default function Dashboard() {
  const { themeMode, cardData } = useContext(Context);

  const getCardStyle = (card) => {
    switch (card.title) {
      case "Revenues":
        return { bgColor: "bg-blue-500", icon: revenue };
      case "Transactions":
        return { bgColor: "bg-purple-500", icon: trans };
      case "Likes":
        return { bgColor: "bg-pink-500", icon: likes };
      case "Users":
        return { bgColor: "bg-yellow-300", icon: users };
      default:
        return { bgColor: "bg-slate-400", icon: users };
    }
  };

  return (
    <div className="p-6 space-y-10">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cardData &&
          cardData.map((card, i) => (
            <Card
              key={i}
              bgColor={getCardStyle(card).bgColor}
              icon={getCardStyle(card).icon}
              text={card.title}
              value={card.value}
            />
          ))}
      </div>

      {/* Line Chart */}
      <div className="rounded-2xl backdrop-blur-md bg-white/20 dark:bg-gray-800/40 p-6 border border-white/20 dark:border-gray-600 shadow-xl">
        <Chart />
      </div>

      {/* PieChart and Schedules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl backdrop-blur-md bg-white/20 dark:bg-gray-800/40 p-6 border border-white/20 dark:border-gray-600 shadow-xl">
          <PieChart />
        </div>
        <div className="rounded-2xl backdrop-blur-md bg-white/20 dark:bg-gray-800/40 p-6 border border-white/20 dark:border-gray-600 shadow-xl">
          <Schedules />
        </div>
      </div>

      {/* LineChart (Bottom) */}
      <div className="rounded-2xl backdrop-blur-md bg-white/20 dark:bg-gray-800/40 p-6 border border-white/20 dark:border-gray-600 shadow-xl">
        <LineChart />
      </div>
    </div>
  );
}
