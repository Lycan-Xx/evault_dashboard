import React from "react";

const Services = ({ services }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4">Our Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-md hover:shadow-lg"
          >
            <service.icon size={48} strokeWidth={1.5} />
            <h4 className="text-lg font-bold">{service.title}</h4>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;