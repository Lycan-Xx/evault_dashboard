import React from "react";

const Portfolio = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      {/* Business Banner Section */}
      

      <div className="bg-white p-6 rounded-lg shadow">
       
        <div className="flex items-center mt-6">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Apply for Virtual Card
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 right-1/4">
            Edit Business Info
          </button>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Edit
          </button>
        </div>
        <p className="mt-4 text-lg font-medium">Musa Audu</p>
        <div className="flex space-x-4 mt-4">
          <button className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-100">
            Login Settings
          </button>
          <button className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-100">
            Payment Settings
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Services</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add New
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-medium">Primary One School Fee</p>
              <p className="text-sm text-green-600">Active</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                Edit
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Deactivate
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-medium">Primary Two School Fee</p>
              <p className="text-sm text-green-600">Active</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                Edit
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Deactivate
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-medium">Primary One School Fee</p>
              <p className="text-sm text-gray-600">03/03/2022 - NGN 20,000</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Transaction
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Download Statement
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-medium">Primary Two School Fee</p>
              <p className="text-sm text-gray-600">04/03/2022 - NGN 25,000</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Transaction
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Download Statement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;