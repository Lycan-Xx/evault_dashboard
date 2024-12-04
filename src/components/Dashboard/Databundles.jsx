import React, { useState } from "react";
import { Globe, PlugZap, Building, PhoneCall } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";

const services = [
  { title: "9 mobile", description: "Buy power units", icon: PlugZap },
  { title: "Airtel", description: "Purchase data", icon: Globe },
  { title: "Glo", description: "Pay school fees", icon: Building },
  { title: "M T N", description: "Top up airtime", icon: PhoneCall },
];

const Databundles = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [planType, setPlanType] = useState("");
  const [dataPlan, setDataPlan] = useState("");

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleBackClick = () => {
    setSelectedService(null);
    setMobileNumber("");
    setPlanType("");
    setDataPlan("");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Data Bundles</h1>
      {!selectedService && (
        <p className="mb-6 transition-opacity duration-500">
          Purchase your internet data bundles here.
        </p>
      )}

      <div className="bg-white rounded-xl p-6 shadow-md">
        {!selectedService ? (
          <>
            <h3 className="text-xl font-bold mb-4">
              Please choose your Service provider
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 border rounded-md hover:shadow-lg transition-transform duration-500 cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <service.icon size={48} strokeWidth={1.5} />
                  <h4 className="text-lg font-bold">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]">
            {/* Left Column */}
            <div
              className="flex flex-col items-center justify-center bg-cover bg-center text-white"
              style={{
                backgroundImage: `url('https://picsum.photos/600/800')`,
              }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-black bg-opacity-50 p-2 rounded-md">
                {selectedService.title}
              </h3>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Back Button */}
              <button
                onClick={handleBackClick}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md transition hover:bg-gray-300"
              >
                Back
              </button>

              <h3 className="text-xl font-bold">Enter your details</h3>

              {/* Mobile Number Input */}
              <label className="block text-sm font-medium">
                Enter your Mobile Number
              </label>
              <input
                type="text"
                placeholder="Enter 11-digit mobile number"
                value={mobileNumber}
                onChange={(e) =>
                  setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 11))
                }
                className="border p-2 rounded w-full"
              />

              {/* Plan Type (Radio Buttons) */}
              <label className="block text-sm font-medium">Select Plan Type</label>
              <div className="flex gap-4">
                {["SME", "Corporate", "Gifting"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setPlanType(type)}
                    className={clsx(
                      "px-4 py-2 border rounded-md transition text-sm font-bold duration-500",
                      planType === type
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Data Plan Dropdown */}
              <label className="block text-sm font-medium">Select Data Plan</label>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="border p-2 rounded w-2/3 text-left">
                    {dataPlan || "Select a plan"}
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="w-2/3 bg-white shadow rounded mt-2">
                  {["1GB", "2GB", "5GB", "10GB"].map((plan) => (
                    <DropdownMenu.Item
                      key={plan}
                      onClick={() => setDataPlan(plan)}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {plan}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Root>

              {/* Proceed Button */}
              <button
                onClick={() => alert("Proceeding with transaction")}
                disabled={!mobileNumber || !planType || !dataPlan}
                className={clsx(
                  "mt-6 px-6 py-3 rounded-md text-white font-bold text-sm transition duration-500",
                  mobileNumber && planType && dataPlan
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-300 cursor-not-allowed"
                )}
              >
                Proceed
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Databundles;