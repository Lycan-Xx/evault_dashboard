import React, { useState, useEffect } from "react";
import {
  User,
  Briefcase,
  DollarSign,
  PieChart,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor screen size to auto-collapse on smaller screens
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
      if (window.innerWidth <= 768) {
        setIsCollapsed(true);
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: PieChart },
    { name: "Trade", icon: Briefcase },
    { name: "Vault", icon: DollarSign },
    { name: "Portfolio", icon: User },
    { name: "Settings", icon: Settings },
  ];

  const loggedInUser = {
    firstName: "Usman",
    lastName: "Ahmad",
    role: "Customer (User)",
  };

  return (
    <div
      className={`bg-white shadow-md ${
        isCollapsed ? "w-[6.7rem]" : "w-64"
      } min-h-screen p-6 relative transition-all duration-300 overflow-hidden`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between mb-6">
        {!isCollapsed && (
          <h2 className="text-2xl font-bold text-blue-600">eVault</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-blue-600 focus:outline-none"
        >
          <Menu size={24} />
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
            <h3 className="text-lg font-bold mt-2 text-gray-800 text-xl">
              {loggedInUser.firstName} {loggedInUser.lastName}
            </h3>
            <p className="text-gray-600 text-base">{loggedInUser.role}</p>
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
            <item.icon
              size={isCollapsed ? 36 : 28}
              className={`${
                selectedTab === item.name ? "text-white" : "text-blue-600"
              }`}
            />
            {!isCollapsed && (
              <span className="ml-3 text-left text-base">{item.name}</span>
            )}
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <button
        onClick={() => console.log("Logout action triggered")} // Add actual logout logic here
        className={`absolute bottom-6 left-6 flex items-center p-3 rounded-md w-full transition duration-300 bg-red-600 text-white hover:bg-red-700`}
      >
        <LogOut size={isCollapsed ? 36 : 28} />
        {!isCollapsed && (
          <span className="ml-3 text-left text-base">Logout</span>
        )}
      </button>
    </div>
  );
};

export default Sidebar;
