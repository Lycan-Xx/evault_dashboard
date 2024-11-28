import React from "react";
import { Globe, Building, PhoneCall, PlugZap, Receipt, SatelliteDishIcon } from 'lucide-react';

const services = [
    { title: "Data Bundles", description: "Purchase data", icon: Globe, component: "Databundles" },
    { title: "School Fees Payment", description: "Pay school fees", icon: Building, component: "Schoolfees" },
    { title: "Airtime Recharge", description: "Top up airtime", icon: PhoneCall, component: "Airtime" },
    { title: "Electricity", description: "Buy power units", icon: PlugZap, component: "Electricity" },
    { title: "Remita Payments", description: "Remita services", icon: Receipt, component: "Remita" },
    { title: "Cable Subscriptions", description: "Subscribe to cable", icon: SatelliteDishIcon, component: "Cable" },
];

const Databundles = () => {
    const onServiceClick = (component) => {
        console.log(`Service clicked: ${component}`);
        // Add your logic here to handle the service click
    };

    return (
        <div>
            <h1>Data Bundles</h1>
            <p>Purchase your internet data bundles here.</p>

            <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Our Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 border rounded-md hover:shadow-lg cursor-pointer"
                            onClick={() => onServiceClick(service.component)}
                        >
                            {/* Render the icon as a component */}
                            <service.icon size={48} strokeWidth={1.5} />
                            <h4 className="text-lg font-bold">{service.title}</h4>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Databundles;
