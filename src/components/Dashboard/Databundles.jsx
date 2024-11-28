import React, { useState } from "react";
import { Globe, Building, PhoneCall, PlugZap, Receipt, SatelliteDishIcon } from "lucide-react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";

const services = [
    { title: "9 mobile", description: "Buy power units", icon: PlugZap, component: "Electricity" },
    { title: "Airtel", description: "Purchase data", icon: Globe, component: "Databundles" },
    { title: "Glo", description: "Pay school fees", icon: Building, component: "Schoolfees" },
    { title: "M T N", description: "Top up airtime", icon: PhoneCall, component: "Airtime" },
    { title: "I P N x", description: "Remita services", icon: Receipt, component: "Remita" },
    { title: "Spectramet", description: "Subscribe to cable", icon: SatelliteDishIcon, component: "Cable" },
    { title: "Smile", description: "", icon: Building, component: "Data" },
];

const Databundles = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [mobileNumber, setMobileNumber] = useState("");
    const [planType, setPlanType] = useState("");
    const [dataPlan, setDataPlan] = useState("");
    const [pin, setPin] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [transactionComplete, setTransactionComplete] = useState(false);

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    const completeTransaction = () => {
        setTimeout(() => setTransactionComplete(true), 3000);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Data Bundles</h1>
            <p className="mb-6">Purchase your internet data bundles here.</p>

            <div className="bg-white rounded-xl p-6 shadow-md">
                {!selectedService ? (
                    <>
                        <h3 className="text-xl font-bold mb-4">Please choose your Service provider</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center p-4 border rounded-md hover:shadow-lg cursor-pointer"
                                    onClick={() => handleServiceClick(service)}
                                >
                                    <service.icon size={48} strokeWidth={1.5} />
                                    <h4 className="text-lg font-bold">{service.title}</h4>
                                    {service.description && (
                                        <p className="text-gray-600 text-sm">{service.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            Selected Service: {selectedService.title}
                        </h3>
                        {selectedService.description && (
                            <p className="mb-4">{selectedService.description}</p>
                        )}
                        <input
                            type="text"
                            placeholder="Enter 11-digit mobile number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="border p-2 rounded w-full mb-4"
                        />
                        <button
                            className={clsx(
                                "px-4 py-2 bg-blue-500 text-white rounded transition",
                                mobileNumber.length !== 11 && "opacity-50 cursor-not-allowed"
                            )}
                            disabled={mobileNumber.length !== 11}
                            onClick={() => setPlanType("")}
                        >
                            Proceed
                        </button>

                        {mobileNumber.length === 11 && (
                            <>
                                <div className="mt-4">
                                    <h4 className="text-lg font-bold mb-2">Select Plan Type</h4>
                                    <RadioGroup.Root
                                        className="flex flex-col gap-2"
                                        value={planType}
                                        onValueChange={setPlanType}
                                    >
                                        {["SME", "Corporate", "Gifting"].map((type) => (
                                            <div key={type} className="flex items-center">
                                                <RadioGroup.Item
                                                    value={type}
                                                    id={type}
                                                    className="mr-2 w-4 h-4 border rounded-full"
                                                />
                                                <label htmlFor={type} className="text-sm">
                                                    {type}
                                                </label>
                                            </div>
                                        ))}
                                    </RadioGroup.Root>
                                </div>

                                {planType && (
                                    <div className="mt-4">
                                        <h4 className="text-lg font-bold mb-2">Select Data Plan</h4>
                                        <DropdownMenu.Root>
                                            <DropdownMenu.Trigger asChild>
                                                <button className="border p-2 rounded w-full text-left">
                                                    {dataPlan || "Select a plan"}
                                                </button>
                                            </DropdownMenu.Trigger>
                                            <DropdownMenu.Content className="w-48 bg-white shadow rounded">
                                                {["1GB", "2GB", "5GB", "10GB"].map((plan) => (
                                                    <DropdownMenu.Item
                                                        key={plan}
                                                        onClick={() => setDataPlan(plan)}
                                                        className="p-2 hover:bg-gray-100"
                                                    >
                                                        {plan}
                                                    </DropdownMenu.Item>
                                                ))}
                                            </DropdownMenu.Content>
                                        </DropdownMenu.Root>
                                        <button
                                            className={clsx(
                                                "px-4 py-2 bg-green-500 text-white rounded mt-4 transition",
                                                !dataPlan && "opacity-50 cursor-not-allowed"
                                            )}
                                            disabled={!dataPlan}
                                            onClick={() => setShowPopup(true)}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>

            <Dialog.Root open={showPopup} onOpenChange={setShowPopup}>
                <Dialog.Content className="bg-white p-6 rounded shadow-md w-96">
                    {!transactionComplete ? (
                        <>
                            <Dialog.Title className="text-xl font-bold">Summary</Dialog.Title>
                            <Dialog.Description>
                                {selectedService && (
                                    <>
                                        <p>Service: {selectedService.title}</p>
                                        <p>Mobile Number: {mobileNumber}</p>
                                        <p>Plan Type: {planType}</p>
                                        <p>Data Plan: {dataPlan}</p>
                                    </>
                                )}
                                <input
                                    type="text"
                                    placeholder="Enter 4-digit PIN"
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    className="border p-2 rounded w-full mb-4"
                                />
                                <button
                                    disabled={pin.length !== 4}
                                    onClick={completeTransaction}
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Complete
                                </button>
                            </Dialog.Description>
                        </>
                    ) : (
                        <div className="text-center">
                            <Dialog.Title className="text-xl font-bold text-green-500">
                                Transaction Successful!
                            </Dialog.Title>
                            <p className="mb-4">🎉 Your purchase was successful.</p>
                        </div>
                    )}
                </Dialog.Content>
            </Dialog.Root>
        </div>
    );
};

export default Databundles;
