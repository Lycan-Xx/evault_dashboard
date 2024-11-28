import React, { useState } from "react";
import { Globe, Building, PhoneCall } from 'lucide-react';

const services = [
    { title: "Data Bundles", description: "Purchase data", icon: Globe, component: "Databundles" },
    { title: "School Fees Payment", description: "Pay school fees", icon: Building, component: "Schoolfees" },
    { title: "Airtime Recharge", description: "Top up airtime", icon: PhoneCall, component: "Airtime" },
];

const Settings = () => {
    const [selectedService, setSelectedService] = useState(null);

    const onServiceClick = (component) => {
        console.log(`Service clicked: ${component}`);
        setSelectedService(component); // Set the selected service
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Settings</h2>
            <p className="text-gray-700">Here you can configure your settings.</p>

            {selectedService ? (
                <div>
                    <button
                        onClick={() => setSelectedService(null)}
                        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                        Back to Dashboard
                    </button>
                    <h3 className="text-xl font-bold mb-4">Selected Service: {selectedService}</h3>
                    {/* You can add more details about the selected service here */}
                </div>
            ) : (
                <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-4">Our Services</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-4 border rounded-md hover:shadow-lg cursor-pointer"
                                onClick={() => onServiceClick(service.component)}
                            >
                                <service.icon size={48} strokeWidth={1.5} />
                                <h4 className="text-lg font-bold">{service.title}</h4>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Settings;
