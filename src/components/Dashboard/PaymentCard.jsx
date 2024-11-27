import React from "react";

const PaymentCards = ({ cardData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden text-white transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
          style={{
            width: "350px", // Width of the card
            height: "180px", // Height of the card
          }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://picsum.photos/200?random=${index}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Black Opaque Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Card Content */}
          <div className="relative z-10 p-4 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-lg font-bold">{card.name}</h4>
              <p className="text-sm">Balance: {card.balance}</p>
              <p className="text-sm">
                Card Number: <span className="font-mono">{card.cardNumber}</span>
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Expiry: {card.expiry}</p>
              <p className="text-sm">Cardholder: {card.cardholder}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentCards;
