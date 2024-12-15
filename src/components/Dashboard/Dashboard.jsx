import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Sidebar from "../Dashboard/SideBar";
import TopBar from "./TopBar";
import PaymentCards from "../Dashboard/PaymentCard";
import Services from "./Services";
import Trade from "./Trade";
import Vault from "./Vault/Vault";
import Settings from "./Settings";
import TabContent from "./TabContents/TabContent";
import Databundles from "./Databundles";
import Schoolfees from "./SchoolFees/Schoolfees";
import Airtime from "./Airtime";
import Electricity from "./Electricity";
import Remita from "./Remita";
import Cable from "./Cable";
import Portfolio from "./Portfolio";
import {
  PhoneCall,
  Globe,
  Building,
  Receipt,
  SatelliteDishIcon,
  PlugZap,
  Banknote,
  DollarSign,
  List,
} from "lucide-react";
import TransferForm from "./TabContents/TransferForm";
import { clsx } from "clsx";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

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

  const services = [
    { title: "Data Bundles", description: "Purchase data", icon: Globe, component: "Databundles" },
    { title: "School Fees Payment", description: "Pay school fees", icon: Building, component: "Schoolfees" },
    { title: "Airtime Recharge", description: "Top up airtime", icon: PhoneCall, component: "Airtime" },
    { title: "Electricity", description: "Buy power units", icon: PlugZap, component: "Electricity" },
    { title: "Remita Payments", description: "Remita services", icon: Receipt, component: "Remita" },
    { title: "Cable Subscriptions", description: "Subscribe to cable", icon: SatelliteDishIcon, component: "Cable" },
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

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  const renderSelectedService = () => {
    if (!selectedService) return null;

    switch (selectedService) {
      case "Databundles":
        return <Databundles onBack={handleBack} />;
      case "Schoolfees":
        return <Schoolfees onBack={handleBack} />;
      case "Airtime":
        return <Airtime onBack={handleBack} />;
      case "Electricity":
        return <Electricity onBack={handleBack} />;
      case "Remita":
        return <Remita onBack={handleBack} />;
      case "Cable":
        return <Cable onBack={handleBack} />;
      case "TransferForm":
        return <TransferForm onBack={handleBack} />;
      default:
        return null;
    }
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Trade":
        return <Trade />;
      case "Vault":
        return <Vault />;
      case "Portfolio":
        return <Portfolio />;
      case "Settings":
        return <Settings />;
      case "Transfer":
      case "Withdraw":
      case "History":
        return <TabContent selectedTab={selectedTab} transferHistory={transferHistory} />;
      case "Dashboard":
        return (
          <>
            <Services
              services={[
                { title: "Funds Transfer", component: "TransferForm" },
                // ...other services
              ]}
              onServiceClick={(service) => handleServiceClick(service.component)}
            />
          </>
        );
      default:
        return null;
    }
  };

  const homeSpring = useSpring({
    opacity: selectedTab === "Dashboard" ? 1 : 0,
    transform: selectedTab === "Dashboard" ? "translateY(0px)" : "translateY(-20px)",
    config: { tension: 200, friction: 25 },
  });

  const contentSpring = useSpring({
    opacity: selectedTab !== "Dashboard" ? 1 : 0,
    transform: selectedTab !== "Dashboard" ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 200, friction: 25 },
  });

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="flex-1 p-6">
        <TopBar />
        <animated.div style={homeSpring}>
          {selectedTab === "Dashboard" && (
            <>
              {selectedService ? (
                renderSelectedService()
              ) : (
                <>
                  <PaymentCards cardData={cardData} />

                  {/* Buttons for Tab Switching */}
                  <div className="my-6">
                    <div className="flex justify-between flex-wrap gap-4">
					{[
  { label: "Transfer", icon: <Banknote className="w-6 h-6" /> },
  { label: "Withdraw", icon: <DollarSign className="w-6 h-6" /> },
  { label: "History", icon: <List className="w-6 h-6" /> },
].map(({ label, icon }) => (
  <button
    key={label}
    onClick={() => setSelectedTab(label)}
    className={clsx(
      "py-3 px-8 h-[4rem] w-[8rem] rounded-xl flex items-center justify-center space-x-2",
      selectedTab === label
        ? "bg-blue-600 text-white"
        : "bg-white text-gray-700 border",
      "transition duration-300 transform hover:scale-105 active:scale-95",
      "sm:w-20 md:w-[12rem] lg:w-[17rem]" // Responsive width
    )}
  >
    {icon}
    <span className="text-[0.8rem]  md:text-[1.3rem] font-semibold">{label}</span> {/* Adjusted font size */}
  </button>
))}


                    </div>
                  </div>

                  {/* Render Services */}
                  <Services
                    services={services}
                    onServiceClick={handleServiceClick}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8" // Responsive grid and gaps
                  />
                </>
              )}
            </>
          )}
        </animated.div>
        <animated.div style={contentSpring}>
          {selectedTab !== "Dashboard" && renderTabContent()}
        </animated.div>
      </div>
    </div>
  );
};

export default Dashboard;