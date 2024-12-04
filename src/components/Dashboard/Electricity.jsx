import React, { useState } from "react";
import clsx from "clsx";
import { PlugZap, ArrowLeft } from "lucide-react";

// List of Subservices for Electricity
const services = [
  { title: "YEDC", description: "Yola Electricity Distribution", icon: PlugZap },
  { title: "PHCN", description: "Port Harcourt Electricity", icon: PlugZap },
  { title: "JEDCO", description: "Jos Electricity Distribution", icon: PlugZap },
  { title: "NEPA", description: "National Electric Power Authority", icon: PlugZap },
];

const Electricity = ({ onBack }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [meterId, setMeterId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  // Handle back button click
  const handleBackClick = () => {
    if (selectedService) {
      // If a service is selected, go back to the "Please choose your Service provider" state
      setSelectedService(null); // Deselect the service
    } else {
      // If no service is selected, navigate back to the Dashboard
      onBack(); // Trigger the back navigation to the Dashboard
    }
    setMeterId("");
    setPhoneNumber("");
    setEmail("");
    setAmount("");
  };

  const handleProceed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Transaction completed successfully!");
    }, 5000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Electricity</h1>

      {/* Show the back button when a service is selected or if no service is selected */}
      <button
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
        aria-label="Go back"
        onClick={handleBackClick}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>{selectedService ? "Back" : "Go to Dashboard"}</span>
      </button>


      {!selectedService ? (
        <>
         
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Please choose your Service provider</h3>
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
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]">
          {/* Left Column: Image and Service Title */}
          <div
            className="flex flex-col items-center rounded-lg  justify-center bg-cover bg-center text-white"
            style={{
              backgroundImage: `url('https://picsum.photos/600/800')`,
            }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-black bg-opacity-50 p-2 rounded-md">
              {selectedService.title}
            </h3>
          </div>

          {/* Right Column: Form */}
          <div className="flex flex-col justify-center space-y-6">
            

            <h3 className="text-xl font-bold">Enter your details</h3>

            {/* Meter ID Input */}
            <label className="block text-sm font-medium">Enter your Meter ID</label>
            <input
              type="text"
              placeholder="Enter Meter ID"
              value={meterId}
              onChange={(e) => setMeterId(e.target.value)}
              className="border p-2 rounded w-full"
            />

            {/* Phone Number Input */}
            <label className="block text-sm font-medium">Enter your Phone Number</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 11))
              }
              className="border p-2 rounded w-full"
            />

            {/* Email Input (optional) */}
            <label className="block text-sm font-medium">Enter your Email (optional)</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded w-full"
            />

            {/* Amount Input */}
            <label className="block text-sm font-medium">Enter Amount</label>
            <input
              type="text"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border p-2 rounded w-full"
            />

            {/* Proceed Button */}
            <button
              onClick={handleProceed}
              disabled={!meterId || !phoneNumber || !amount}
              className={clsx(
                "mt-6 px-6 py-3 rounded-md text-white font-bold text-sm transition duration-500",
                meterId && phoneNumber && amount
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-300 cursor-not-allowed"
              )}
            >
              {loading ? (
                <span className="animate-pulse">Fetching data...</span>
              ) : (
                "Proceed"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Electricity;
