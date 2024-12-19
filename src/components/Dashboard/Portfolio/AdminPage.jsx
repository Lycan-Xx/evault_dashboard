import React, { useState } from "react";

const AdminPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    topBanner: "",
    leftBanner: "",
    profilePicture: "",
    contactEmail: "",
    contactPhone: "",
    paymentOptions: {
      card: false,
      transfer: false,
      ussd: false,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      paymentOptions: {
        ...formData.paymentOptions,
        [name]: checked,
      },
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, [name]: event.target.result });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const vendorId = "vendor-id"; // Replace with actual vendor ID
      // Assume `updateVendor` is defined elsewhere or implement logic here.
      alert("Vendor updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update vendor.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Admin Page</h1>

      <div className="mb-4">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>

      <div className="mb-4">
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Top Banner:</label>
        <input
          name="topBanner"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2"
        />
        {formData.topBanner && (
          <img src={formData.topBanner} alt="Top Banner Preview" className="mt-2 max-h-40" />
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Left Banner:</label>
        <input
          name="leftBanner"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2"
        />
        {formData.leftBanner && (
          <img src={formData.leftBanner} alt="Left Banner Preview" className="mt-2 max-h-40" />
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Profile Picture:</label>
        <input
          name="profilePicture"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2"
        />
        {formData.profilePicture && (
          <img src={formData.profilePicture} alt="Profile Picture Preview" className="mt-2 max-h-40" />
        )}
      </div>

      <div className="mb-4">
        <input
          name="contactEmail"
          placeholder="Contact Email"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>

      <div className="mb-4">
        <input
          name="contactPhone"
          placeholder="Contact Phone"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Payment Options:</label>
        {["card", "transfer", "ussd"].map((option) => (
          <div key={option} className="flex items-center">
            <input
              type="checkbox"
              name={option}
              checked={formData.paymentOptions[option]}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label>{option.charAt(0).toUpperCase() + option.slice(1)}</label>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-200"
      >
        Update Vendor
      </button>
    </form>
  );
};

export default AdminPage;
