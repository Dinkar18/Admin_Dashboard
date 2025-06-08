import { BsBarChartLine } from 'react-icons/bs';
import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../context/contextApi";
import { MdSpaceDashboard, MdViewKanban, MdAdminPanelSettings} from "react-icons/md";
     import { MdHelpOutline, MdContactMail } from "react-icons/md";

export default function Sidebar({ setShowSidebar }) {
  const { themeMode } = useContext(Context);

  const iconColor = themeMode === "dark" ? "black" : "white";
  const textColor = themeMode === "dark" ? "text-black" : "text-white";
  const hoverBg = themeMode === "dark" ? "hover:bg-gray-200" : "hover:bg-gray-800";
  const hoverText = themeMode === "dark" ? "hover:text-black" : "hover:text-white";

  return (
    <div className="bg-gradient-to-b from-[#56db3b] to-[#dfba06] dark:from-[#43a8d7] dark:to-[#f4f3f3] font-[Montserrat] text-white white:text-black py-12 rounded-2xl w-full h-full flex flex-col justify-between items-center relative shadow-xl">
      {/* Close Icon on Sidebar (only on small screens) */}
      <div
        onClick={() => setShowSidebar(false)}
        className="text-xl sm:hidden absolute top-4 right-4 cursor-pointer"
      >
        <AiOutlineClose />
      </div>

      <div className="top">
        <div className="font-bold text-2xl flex items-center space-x-3">
  <Link to={"/"} className="flex items-center space-x-2">
    <MdAdminPanelSettings size={28} className="text-[#5CE1E6]" />
    <span className="text-[#5CE1E6]">Admin</span>
    <span className={`${textColor}`}>Panel</span>
  </Link>
</div>

        <div className="items font-light mt-14 flex flex-col space-y-4">
          {[
            { name: "Dashboard", icon: <MdSpaceDashboard size={21} color={iconColor} />, path: "/" },
            { name: "Calender", icon: <FaCalendarAlt size={21} color={iconColor} />, path: "/calendar" },
            { name: "Kanban", icon: <MdViewKanban size={21} color={iconColor} />, path: "/projects" },
            { name: "Users", icon: <FaRegUserCircle size={21} color={iconColor} />, path: "/users" },
            { name: "Charts", icon: <BsBarChartLine size={21} color={iconColor} />, path: "/charts" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center space-x-4 px-5 py-3 rounded-xl transition duration-200 ease-in-out ${hoverBg} ${hoverText}`}
            >
              {item.icon}
              <span className={`text-lg font-medium ${textColor}`}>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>


<div className="contact text-start w-1/2 flex flex-col text-sm text-white-400 space-y-2 mt-8">
  <a
    href="https://dinkar-arya-portfolio.netlify.app/"
    className="hover:underline hover:text-[#52e5ea] transition flex items-center space-x-2"
  >
    <MdHelpOutline />
    <span>Help</span>
  </a>

  <a
    href="https://dinkar-arya-portfolio.netlify.app/#contact"
    className="hover:underline hover:text-[#52e5ea] transition flex items-center space-x-2"
  >
    <MdContactMail />
    <span>Contact us</span>
  </a>
</div>

    </div>
  );
}
