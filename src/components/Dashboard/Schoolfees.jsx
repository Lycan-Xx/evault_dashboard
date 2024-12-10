import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import clsx from "clsx";

// Updated list with 10+ random school names
const schools = [
  "Greenwood High School",
  "Horizon International School",
  "Maple Leaf Academy",
  "Riverside Public School",
  "Sunshine Valley High",
  "Oakridge Academy",
  "Silvercrest High School",
  "Bluebell Secondary School",
  "Eagleview Academy",
  "Bright Future High School",
  "Lakeside International School",
];

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

  // Filter schools based on the input in the search bar
  const filteredSchools = schools.filter((school) =>
    school.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
            <ul className="bg-white shadow rounded w-2/3 mx-auto mt-4 max-h-60 overflow-y-auto">
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

        {/* Selected School Page */}
        {selectedSchool && (
          <div>
            {/* Banner Section */}
            <div
              className="w-full h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://picsum.photos/1200/400?random=${selectedSchool}')`,
              }}
            >
              <h2 className="text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded-md inline-block mt-16 ml-8">
                {selectedSchool}
              </h2>
            </div>

            {/* Profile Picture Section */}
            <div className="flex justify-end -mt-12">
              <div className="w-24 h-24 rounded-2xl border-4 border-white overflow-hidden shadow-lg">
                <img
                  src={`https://picsum.photos/100?random=${selectedSchool}`}
                  alt={`${selectedSchool} Owner`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Payment Form */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 min-h-[500px]">
  {/* Left Column: Image Section */}
  <div
    className=" rounded-lg bg-cover bg-center text-white flex flex-col items-center justify-center h-72 sm:h-96 md:h-full w-13"
    style={{
      backgroundImage: `url('https://picsum.photos/600/800?random=${selectedSchool}')`,
    }}
  >
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 bg-black bg-opacity-50 p-1 md:p-2 rounded-md">
      {selectedSchool}
    </h3>
  </div>

  {/* Payment Form Section */}
  <div className="flex flex-col justify-center space-y-6">
    <h3 className="text-lg sm:text-xl font-bold">Enter Payment Details</h3>

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
      type="text"
      placeholder="Enter the payment info."
      value={text}
      onChange={(e) => setText(e.target.value)}
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

          </div>
        )}
      </div>

	 	 <button
			onClick={() => setIsDialogOpen(!isDialogOpen)}
			className="fixed bottom-6 right-6 bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600"
			>
			?
		</button>

		{isDialogOpen && (
  <div className="fixed bottom-20 right-6 bg-white shadow-lg rounded-lg p-4 w-64">
    <h3 className="text-lg font-bold mb-2">Contact Us</h3>
    <ul className="space-y-2">
      <li className="flex items-center space-x-2">
        <span>📧 Email:</span>
        <a href="mailto:contact@school.com" className="text-blue-500">contact@school.com</a>
      </li>
      <li className="flex items-center space-x-2">
        <span>📞 Phone:</span>
        <a href="tel:+1234567890" className="text-blue-500">+1234567890</a>
      </li>
      <li className="flex items-center space-x-2">
        <span>💬 Live Chat:</span>
        <a href="/livechat" className="text-blue-500">Start Chat</a>
      </li>
    </ul>
    <button
      onClick={() => setIsDialogOpen(false)}
      className="mt-4 text-sm text-gray-500 underline"
    >
      Close
    </button>
  </div>
)}

    </div>
  );
};

export default SchoolFees;