import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

// Import all subcomponents
import Sidebar from "../Dashboard/SideBar";
import TopBar from "./TopBar";
import PaymentCards from "../Dashboard/PaymentCard";
import TabContent from "./TabContents";
import Services from "./Services";

// Import icons for services
import {
  Wallet,
  PhoneCall,
  Globe,
  Building,
  Receipt,
  SatelliteDishIcon,
  Train,
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(null); // Manage active tab state

  // Payment card data
  const cardData = [
    {
      name: "Wema Bank",
      balance: "₦2,500.98",
      cardNumber: "**** **** **** 1234",
      expiry: "05/26",
      cardholder: "John Doe",
    },
    {
      name: "Monie Point",
      balance: "₦0.00",
      cardNumber: "**** **** **** 5678",
      expiry: "06/26",
      cardholder: "Jane Doe",
    },
    {
      name: "Zenith Bank",
      balance: "₦0.00",
      cardNumber: "**** **** **** 9101",
      expiry: "07/26",
      cardholder: "Alex Smith",
    },
  ];

  // Services data
  const services = [
    { title: "Instant Payment", description: "Pay instantly", icon: Wallet },
    { title: "Airtime Recharge", description: "Top up airtime", icon: PhoneCall },
    { title: "Data Bundles", description: "Purchase data", icon: Globe },
    { title: "School Fees Payment", description: "Pay school fees", icon: Building },
    { title: "Remita Payments", description: "Remita services", icon: Receipt },
    { title: "Cable Subscriptions", description: "Subscribe to cable", icon: SatelliteDishIcon },
    { title: "Transport Bookings", description: "Book transportation", icon: Train },
  ];

  const transferHistory = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    date: `2024-11-${10 + i}`,
    amount: `₦${(1000 + i * 100).toFixed(2)}`,
    recipient: `Recipient ${i + 1}`,
  }));

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  // Services Section Spring Animation
  const servicesSpring = useSpring({
    opacity: activeTab === null ? 1 : 0,
    transform: activeTab === null ? "translateY(0px)" : "translateY(-20px)",
    config: { tension: 180, friction: 20, duration: 300 },
    delay: activeTab === null ? 0 : 300, // Delay for fade-out
  });

  // Tab Content Spring Animation
  const tabContentSpring = useSpring({
    opacity: activeTab ? 1 : 0,
    transform: activeTab ? "translateY(0px)" : "translateY(-20px)",
    config: { tension: 180, friction: 20, duration: 300 },
    delay: activeTab ? 0 : 300, // Delay for fade-out
  });

  return (
    <div className="bg-blue-800 h-[4rm] flex">
      <Sidebar selectedTab={"Home"} setSelectedTab={() => {}} />

      <div className="flex-1 p-6">
        <TopBar />
        <PaymentCards cardData={cardData} />

        <div className="my-6">
          <div className="flex space-x-4">
            {["Transfer", "Withdraw", "History"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`py-2 px-4 rounded-md ${
                  activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <animated.div style={tabContentSpring}>
          {activeTab && (
            <TabContent selectedTab={activeTab} transferHistory={transferHistory} />
          )}
        </animated.div>

        {/* Services Section */}
        <animated.div style={servicesSpring}>
          {activeTab === null && <Services services={services} />}
        </animated.div>
      </div>
    </div>
  );
};

export default Dashboard;
