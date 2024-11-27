import React from "react";
import { User } from "lucide-react";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const menuItems = [
    { name: "Home", icon: User },
    { name: "Trade", icon: User },
    { name: "Vault", icon: User },
    { name: "Settings", icon: User },
  ];

  return (
    <div className="bg-white shadow-md w-64 p-6 relative">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-600">eVault</h2>
      </div>
      <div className="text-center mb-6">
        <img
          src="https://picsum.photos/id/237/200/300"
          alt="User Avatar"
          className="rounded-full w-20 h-20 mx-auto"
        />
        <h3 className="text-lg font-bold mt-2">Usman Ahmad</h3>
        <p className="text-gray-600 text-sm">Customer (User)</p>
      </div>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setSelectedTab(item.name)} // Set selected tab on click
            className={`flex items-center p-3 rounded-md w-full transition duration-300 ${
              selectedTab === item.name
                ? "bg-blue-600 text-white" // Highlight active tab
                : "text-gray-700 hover:bg-blue-50" // Style for inactive tabs
            }`}
          >
            <item.icon className="mr-3" />
            {item.name}
          </button>
        ))}
      </nav>
      <button className="absolute bottom-6 left-6 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
