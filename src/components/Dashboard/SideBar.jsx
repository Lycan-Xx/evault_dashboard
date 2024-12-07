import React, { useState } from "react";
import { User, Briefcase, DollarSign, PieChart, Settings, LogOut, ChevronLeft, ChevronRight } from "lucide-react";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { name: "Home", icon: User },
    { name: "Trade", icon: Briefcase },
    { name: "Vault", icon: DollarSign },
    { name: "Portfolio", icon: PieChart },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div
      className={`bg-white shadow-md ${
        isCollapsed ? "w-[7rem]" : "w-64"
      } h-screen p-6 relative transition-all duration-300 overflow-hidden`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between mb-6">
        {!isCollapsed && <h2 className="text-2xl font-bold text-blue-600">eVault</h2>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-blue-600 focus:outline-none"
        >
          {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>

      {/* User Avatar */}
      <div className="text-center mb-6">
        <img
          src="https://picsum.photos/id/237/200/300"
          alt="User Avatar"
          className={`rounded-full mx-auto ${
            isCollapsed ? "w-12 h-12" : "w-20 h-20"
          }`}
        />
        {!isCollapsed && (
          <>
            <h3 className="text-lg font-bold mt-2">Usman Ahmad</h3>
            <p className="text-gray-600 text-sm">Customer (User)</p>
          </>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-4">
  {menuItems.map((item) => (
    <button
      key={item.name}
      onClick={() => setSelectedTab(item.name)}
      className={`flex items-center ${
        isCollapsed ? "justify-center" : "justify-start"
      } p-3 rounded-md w-full transition duration-300 ${
        selectedTab === item.name
          ? "bg-blue-600 text-white"
          : "text-gray-700 hover:bg-blue-50"
      }`}
    >
      {/* Icon with conditional color */}
      <item.icon
        size={isCollapsed ? 36 : 28}
        className={`${
          selectedTab === item.name ? "text-white" : "text-blue-600"
        }`}
      />
      {/* Display text only in expanded state */}
      {!isCollapsed && (
        <span className="ml-3 text-left text-base">{item.name}</span>
      )}
    </button>
  ))}
</nav>


      {/* Logout Button */}
      <button
        className={`absolute bottom-6 ${
          isCollapsed ? "left-6" : "left-6"
        } bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 flex items-center`}
      >
        <LogOut size={24} className="mr-2" />
        {!isCollapsed && "Logout"}
      </button>
    </div>
  );
};

export default Sidebar;
