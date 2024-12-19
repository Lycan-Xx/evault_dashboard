import React from "react";
import { motion } from "framer-motion";

const Services = ({ services, onServiceClick }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Services</h3>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
      >
        {services.map((service, index) => (
          <motion.button
            key={index}
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onServiceClick(service.component)}
            className="flex flex-col items-center p-3 md:p-4 rounded-lg border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all duration-200 bg-white"
          >
            <service.icon className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="text-sm md:text-base font-semibold text-gray-800 text-center">
              {service.title}
            </h4>
            <p className="text-xs md:text-sm text-gray-500 text-center mt-1">
              {service.description}
            </p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
