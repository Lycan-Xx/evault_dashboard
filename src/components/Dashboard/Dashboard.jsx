import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

// Import all subcomponents
import Sidebar from "../Dashboard/SideBar";
import TopBar from "./TopBar";
import PaymentCards from "../Dashboard/PaymentCard";
import TabContent from "./TabContents";
import Services from "./Services";

// Import mockup components
import Trade from "./Trade";
import Vault from "./Vault";
import Settings from "./Settings";

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
  const [selectedTab, setSelectedTab] = useState("Home"); // Default to Dashboard tab

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

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Trade":
        return <Trade />;
      case "Vault":
        return <Vault />;
      case "Settings":
        return <Settings />;
      case "Transfer":
      case "Withdraw":
      case "History":
        return <TabContent selectedTab={selectedTab} transferHistory={transferHistory} />;
      default:
        return null;
    }
  };

  // Spring animations
  const homeSpring = useSpring({
    opacity: selectedTab === "Home" ? 1 : 0,
    transform: selectedTab === "Home" ? "translateY(0px)" : "translateY(-20px)",
    config: { tension: 200, friction: 25 },
  });

  const contentSpring = useSpring({
    opacity: selectedTab !== "Home" ? 1 : 0,
    transform: selectedTab !== "Home" ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 200, friction: 25 },
  });

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="flex-1 p-6">
        <TopBar />

        {/* Home Section */}
        <animated.div style={homeSpring}>
          {selectedTab === "Home" && (
            <>
              <PaymentCards cardData={cardData} />
              <Services services={services} />
            </>
          )}
        </animated.div>

        {/* Tab Content */}
        <animated.div style={contentSpring}>
          {selectedTab !== "Home" && renderTabContent()}
        </animated.div>
      </div>
    </div>
  );
};

export default Dashboard;
