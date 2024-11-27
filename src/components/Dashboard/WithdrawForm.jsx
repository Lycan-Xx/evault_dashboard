import React, { useState } from "react";
import { Layers, ArrowDownToLine } from "lucide-react";

const WithdrawForm = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle withdrawal logic here
    alert(`Withdrew ₦${amount}`);
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-50 rounded-md shadow-md transition duration-500"
    >
      <h4 className="text-lg font-bold mb-4 flex items-center">
        <Layers className="mr-2" /> Withdraw Funds
      </h4>
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
        className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center justify-center"
      >
        <ArrowDownToLine className="mr-2" /> Withdraw
      </button>
    </form>
  );
};

export default WithdrawForm;