import React, { useState } from "react";
import { Bell, Mail, Eye, EyeOff, User, Settings, LogOut } from "lucide-react";

const TopBar = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex justify-between items-center mb-6">
      {/* Account Balance Section */}
      <div className="text-white text-xl font-bold flex items-center space-x-2">
        <span>{showBalance ? "Wallet Balance: ₦2,500.98" : "Wallet Balance: ****"}</span>
        <button onClick={toggleBalance} className="focus:outline-none">
          {showBalance ? (
            <EyeOff className="text-white hover:text-blue-600 cursor-pointer" size={20} />
          ) : (
            <Eye className="text-white hover:text-blue-600 cursor-pointer" size={20} />
          )}
        </button>
      </div>

      {/* Notification and User Avatar Section */}
      <div className="flex space-x-4 items-center">
        <Bell className="text-white hover:text-blue-600 cursor-pointer" size={24} />
        <Mail className="text-white hover:text-blue-600 cursor-pointer" size={24} />
        <div className="relative">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="User Avatar"
            className="rounded-full w-10 h-10 cursor-pointer"
            onClick={toggleMenu}
          />
          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <ul className="py-2">
                <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  <User className="mr-2 text-gray-500" size={18} />
                  Account Preference
                </li>
                <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  <Settings className="mr-2 text-gray-500" size={18} />
                  Settings
                </li>
                <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  <LogOut className="mr-2 text-gray-500" size={18} />
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
