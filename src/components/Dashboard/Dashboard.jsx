import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Sidebar from "../Dashboard/SideBar";
import TopBar from "./TopBar";
import PaymentCards from "../Dashboard/PaymentCard";
import Services from "./Services";
import Trade from "./Trade";
import Vault from "./Vault";
import Settings from "./Settings";
import TabContent from "./TabContents";
import Databundles from "./Databundles";
import Schoolfees from "./Schoolfees";
import Airtime from "./Airtime";
import Electricity from "./Electricity";
import Remita from "./Remita";
import Cable from "./Cable";
import {
  PhoneCall,
  Globe,
  Building,
  Receipt,
  SatelliteDishIcon,
  PlugZap,
} from "lucide-react";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [selectedService, setSelectedService] = useState(null);

  const cardData = [
    { name: "Wema Bank", balance: "₦2,500.98", cardNumber: "**** **** **** 1234", expiry: "05/26", cardholder: "John Doe" },
    { name: "Monie Point", balance: "₦0.00", cardNumber: "**** **** **** 5678", expiry: "06/26", cardholder: "Jane Doe" },
    { name: "Zenith Bank", balance: "₦0.00", cardNumber: "**** **** **** 9101", expiry: "07/26", cardholder: "Alex Smith" },
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
        <animated.div style={homeSpring}>
          {selectedTab === "Home" && (
            <>
              {selectedService ? (
                renderSelectedService()
              ) : (
                <>
                  <PaymentCards cardData={cardData} />
                  <Services services={services} onServiceClick={handleServiceClick} />
                </>
              )}
            </>
          )}
        </animated.div>
        <animated.div style={contentSpring}>
          {selectedTab !== "Home" && renderTabContent()}
        </animated.div>
      </div>
    </div>
  );
};

export default Dashboard;
