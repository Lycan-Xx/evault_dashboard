import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import clsx from "clsx";

const schools = ["School A", "School B", "School C", "School D", "School E"];

const SchoolFees = ({ onBack }) => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleBackClick = () => {
    if (selectedSchool) {
      setSelectedSchool(null); // Deselect the school
    } else {
      onBack(); // Navigate back to the Dashboard
    }
    // Reset form data
    setStudentName("");
    setEmail("");
	setText("");
    setAmount("");
    setClassLevel("");
    setSearchQuery("");
  };

  const handleProceed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Payment successful!");
    }, 3000);
  };

  const filteredSchools = schools.filter((school) =>
    school.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to the School Fees Payment Portal</h1>

      {/* Back Button */}
      <button
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1 mb-4"
        aria-label="Go back"
        onClick={handleBackClick}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>{selectedSchool ? "Back" : "Go to Dashboard"}</span>
      </button>

      <div className="grid grid-cols-1 gap-8">
        {/* Search Box and Welcome Text */}
        {!selectedSchool && (
          <div className="text-center space-y-6">
            <h3 className="text-xl font-bold">Please search for the school you want to make payments to</h3>
            <input
              type="text"
              placeholder="Search schools"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border p-2 rounded w-2/3 mx-auto"
            />
            <ul className="bg-white shadow rounded w-2/3 mx-auto mt-4">
              {filteredSchools.map((school) => (
                <li
                  key={school}
                  onClick={() => setSelectedSchool(school)}
                  className="cursor-pointer p-2 hover:bg-gray-100"
                >
                  {school}
                </li>
              ))}
              {filteredSchools.length === 0 && (
                <li className="p-2 text-gray-500">No schools found</li>
              )}
            </ul>
          </div>
        )}

        {/* Left Column: Selected School Image */}
        {selectedSchool && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]">
            <div
              className="rounded-lg bg-cover bg-center text-white flex flex-col items-center justify-center h-full w-full"
              style={{
                backgroundImage: `url('https://picsum.photos/600/800?random=${selectedSchool}')`,
              }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-black bg-opacity-50 p-2 rounded-md">
                {selectedSchool}
              </h3>
            </div>

            {/* Right Column: Payment Form */}
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-xl font-bold">Enter Payment Details</h3>

              {/* Class Level Selection */}
              <label className="block text-sm font-medium">Select Class</label>
              <select
                value={classLevel}
                onChange={(e) => setClassLevel(e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="" disabled>
                  Select class
                </option>
                {["Class 1", "Class 2", "Class 3", "Class 4"].map((className) => (
                  <option key={className} value={className}>
                    {className}
                  </option>
                ))}
              </select>

              {/* Student Name Input */}
              <label className="block text-sm font-medium">Student's Name</label>
              <input
                type="text"
                placeholder="Enter student's name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="border p-2 rounded w-full"
              />

              {/* Email Address Input */}
              <label className="block text-sm font-medium">Email Address (Optional)</label>
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded w-full"
              />

			  {/* Payment Purpose */}
              <label className="block text-sm font-medium">What are you paying for (Optional)</label>
              <input
                type="email"
                placeholder="Enter the payment info."
                value={text}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded w-full"
              />

              {/* Amount Input */}
              <label className="block text-sm font-medium">Amount</label>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border p-2 rounded w-full"
              />

              {/* Proceed Button */}
              <button
                onClick={handleProceed}
                disabled={!studentName || !classLevel || !amount || loading}
                className={clsx(
                  "mt-6 px-6 py-3 rounded-md text-white font-bold text-sm transition duration-500",
                  studentName && classLevel && amount
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-300 cursor-not-allowed"
                )}
              >
                {loading ? (
                  <span className="animate-pulse">Processing...</span>
                ) : (
                  "Proceed"
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolFees;
