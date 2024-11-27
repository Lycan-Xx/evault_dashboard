import React from "react";

const PaymentCards = ({ cardData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="rounded-lg p-4 text-white"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 255, 0.7), rgba(0, 0, 255, 0.6)), url('https://picsum.photos/200?random=${index}')`,
            backgroundSize: "cover",
          }}
        >
          <h4 className="text-lg font-bold">{card.name}</h4>
          <p className="text-sm">Balance: {card.balance}</p>
          <p className="text-sm">Card Number: {card.cardNumber}</p>
          <p className="text-sm">Expiry: {card.expiry}</p>
          <p className="text-sm">Cardholder: {card.cardholder}</p>
        </div>
      ))}
    </div>
  );
};

export default PaymentCards;