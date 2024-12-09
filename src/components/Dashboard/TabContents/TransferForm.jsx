import React, { useState } from "react";
import { Send } from "lucide-react";
import clsx from "clsx";

const TransferForm = () => {
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleProceed = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Transaction Successful!");
    }, 500);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Transfer Form */}
      <form
        onSubmit={handleProceed}
        className="p-6 bg-gray-50 rounded-md shadow-md space-y-6"
      >
        <h4 className="text-2xl font-bold text-center mb-6">Funds Transfer</h4>

        {/* Bank Selection */}
        <div>
          <label htmlFor="bank" className="block text-sm font-medium mb-2">
            Select Bank
          </label>
          <select
            id="bank"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="" disabled>
              Select a bank
            </option>
            {[
              "Bank A",
              "Bank B",
              "Bank C",
              "Bank D",
              "Bank E",
            ].map((bankName) => (
              <option key={bankName} value={bankName}>
                {bankName}
              </option>
            ))}
          </select>
        </div>

        {/* Account Number Input */}
        <div>
          <label htmlFor="accountNumber" className="block text-sm font-medium mb-2">
            Account Number
          </label>
          <input
            id="accountNumber"
            type="text"
            value={accountNumber}
            onChange={(e) =>
              setAccountNumber(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            placeholder="Enter 10-digit account number"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Amount Input */}
        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-2">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Proceed Button */}
        <button
          type="submit"
          disabled={!bank || !accountNumber || !amount || loading}
          className={clsx(
            "w-full py-3 rounded-md text-white font-bold text-lg flex justify-center items-center transition duration-500",
            bank && accountNumber && amount && !loading
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed"
          )}
        >
          {loading ? <span className="animate-pulse">Processing...</span> : "Proceed"}
        </button>
      </form>
    </div>
  );
};

export default TransferForm;
