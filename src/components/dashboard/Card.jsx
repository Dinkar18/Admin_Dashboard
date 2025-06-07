import React, { useContext } from "react";
import { Context } from "../../context/contextApi";

export default function Card({ bgColor, text, value, icon }) {
  const { themeMode } = useContext(Context);

  function addCommasToNumber(number) {
    const numberString = Math.floor(number).toString();
    const lastThree = numberString.slice(-3);
    const otherNumbers = numberString.slice(0, -3);
    return (
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
      (otherNumbers ? "," : "") +
      lastThree
    );
  }

  return (
    <div
      className={`relative rounded-2xl p-6 h-36 flex flex-col justify-end
      ${bgColor}
      backdrop-blur-md text-white border border-white/20
      shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:brightness-110`}
    >
      <div className="absolute top-4 right-4">
        <img className="w-7 h-7" src={icon} alt={`${text} icon`} />
      </div>
      <div className="text-sm font-medium">Total {text}</div>
      <div className="text-2xl font-bold">
        {text === "Revenues" ? "₹ " : ""}
        {addCommasToNumber(value)}
      </div>
    </div>
  );
}
