import React, { useState } from "react";
import { ArrowRightLeft, Send } from "lucide-react";

const TransferForm = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Transferred ₦${amount} to ${recipient}`);
    setRecipient("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-50 rounded-md shadow-md transition duration-500"
    >
      <h4 className="text-lg font-bold mb-4 flex items-center">
        <ArrowRightLeft className="mr-2" /> Funds Transfer
      </h4>
      <div className="mb-4">
        <label htmlFor="recipient" className="block text-gray-700 mb-2">
          Recipient
        </label>
        <input
          id="recipient"
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Enter recipient name"
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 mb-2">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center"
      >
        <Send className="mr-2" /> Transfer
      </button>
    </form>
  );
};

export default TransferForm;