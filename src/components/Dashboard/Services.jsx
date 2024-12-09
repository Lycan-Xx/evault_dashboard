import React from "react";

const Services = ({ services, onServiceClick }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-6">Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8"> {/* Increased gaps */}
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 border rounded-md hover:shadow-lg cursor-pointer transition duration-300 transform hover:scale-105"
            onClick={() => onServiceClick(service.component)}
          >
            <service.icon size={48} strokeWidth={1.5} className="text-blue-600 mb-4" /> {/* Icon with spacing */}
            <h4 className="text-lg font-bold mb-2">{service.title}</h4> {/* Added spacing below title */}
            <p className="text-gray-600 text-sm text-center">{service.description}</p> {/* Centered description */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;