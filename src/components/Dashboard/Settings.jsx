import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const ToggleSwitch = ({ isOn, onToggle }) => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isOn}
        onChange={onToggle}
      />
      <span
        className={`w-10 h-6 rounded-full transition-colors bg-gray-300 ${
          isOn ? "bg-blue-600" : ""
        }`}
      ></span>
      <span
        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
          isOn ? "translate-x-4" : ""
        }`}
      ></span>
    </label>
  );
  
  const Settings = () => {
    const [openSection, setOpenSection] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [accountInfo, setAccountInfo] = useState({
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+123456789",
      address: "1234 Elm St",
      nin: "123456789",
      bvn: "987654321",
    });
    const [privacySettings, setPrivacySettings] = useState({
      promotionalEmails: false,
      promotionalNotifications: false,
    });
    const [notificationSettings, setNotificationSettings] = useState({
      emailAlerts: true,
      smsAlerts: false,
    });
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [previewPhoto, setPreviewPhoto] = useState(null);
  
    const toggleSection = (section) => {
      setOpenSection(openSection === section ? null : section);
    };
  
    const handleAccountInfoChange = (e) => {
      const { name, value } = e.target;
      setAccountInfo({ ...accountInfo, [name]: value });
    };
  
    const handleProfilePhotoChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setProfilePhoto(file);
        setPreviewPhoto(URL.createObjectURL(file));
      }
    };
  
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Settings</h2>
  
        {/* Account Information */}
        <div className="border-b">
          <div
            onClick={() => toggleSection("accountInfo")}
            className="flex justify-between items-center cursor-pointer py-4"
          >
            <h3 className="text-lg font-bold">Account Information</h3>
            {openSection === "accountInfo" ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openSection === "accountInfo" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="pl-4 mb-4 space-y-4">

             {/* Profile Photo */}
             <div className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <img
                  src={previewPhoto || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border border-gray-300"
                />
                {isEditing && (
                  <label
                    htmlFor="profilePhoto"
                    className="absolute bottom-0 right-0 bg-blue-600 text-white text-sm rounded-full px-2 py-1 cursor-pointer"
                  >
                    Edit
                  </label>
                )}
                <input
                  type="file"
                  id="profilePhoto"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfilePhotoChange}
                />
              </div>
              {profilePhoto && isEditing && (
                <p className="text-sm text-gray-500 mt-2">
                  New photo selected: {profilePhoto.name}
                </p>
              )}
            </div>
            {Object.keys(accountInfo).map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium capitalize">
                  {key}:
                </label>
                <input
                  type="text"
                  name={key}
                  value={accountInfo[key]}
                  disabled={!isEditing}
                  onChange={handleAccountInfoChange}
                  className={`w-full p-2 border rounded ${
                    isEditing ? "bg-white" : "bg-gray-100"
                  }`}
                />
              </div>
            ))}
            {isEditing ? (
              <button
                onClick={() => setIsEditing(false)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 px-4 py-2 bg-gray-200 rounded-md"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>

     {/* Security Settings */}
<div className="border-b">
  <div
    onClick={() => toggleSection("security")}
    className="flex justify-between items-center cursor-pointer py-4"
  >
    <h3 className="text-lg font-bold">Security Settings</h3>
    {openSection === "security" ? (
      <ChevronUp size={20} />
    ) : (
      <ChevronDown size={20} />
    )}
  </div>
  <div
    className={`overflow-hidden transition-all duration-300 ${
      openSection === "security" ? "max-h-screen" : "max-h-0"
    }`}
  >
    <div className="pl-4 mb-4 space-y-4">
      

      {/* Password Change Section */}
      <div className="mt-6">
        <h4 className="font-medium text-lg mb-2">Change Password:</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Current Password:</label>
            <input
              type="password"
              className="w-full p-2 border rounded bg-gray-100"
              placeholder="Enter current password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">New Password:</label>
            <input
              type="password"
              className="w-full p-2 border rounded bg-gray-100"
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Confirm New Password:
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded bg-gray-100"
              placeholder="Confirm new password"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
            Confirm
          </button>

          <p className="font-medium">Enable Two-Factor Authentication (2FA):</p>
      <ToggleSwitch
        isOn={twoFactorEnabled}
        onToggle={() => setTwoFactorEnabled(!twoFactorEnabled)}
      />

        </div>
      </div>
    </div>
  </div>
</div>


      {/* Privacy Settings */}
      <div className="border-b">
        <div
          onClick={() => toggleSection("privacy")}
          className="flex justify-between items-center cursor-pointer py-4"
        >
          <h3 className="text-lg font-bold">Privacy Settings</h3>
          {openSection === "privacy" ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openSection === "privacy" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="pl-4 mb-4 space-y-4">
            <p className="font-medium">Marketing Preferences:</p>
            <div>
              <label className="block mb-2">Promotional Emails:</label>
              <ToggleSwitch
                isOn={privacySettings.promotionalEmails}
                onToggle={() =>
                  setPrivacySettings({
                    ...privacySettings,
                    promotionalEmails: !privacySettings.promotionalEmails,
                  })
                }
              />
            </div>
            <div>
              <label className="block mb-2">Promotional Notifications:</label>
              <ToggleSwitch
                isOn={privacySettings.promotionalNotifications}
                onToggle={() =>
                  setPrivacySettings({
                    ...privacySettings,
                    promotionalNotifications:
                      !privacySettings.promotionalNotifications,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="border-b">
        <div
          onClick={() => toggleSection("notifications")}
          className="flex justify-between items-center cursor-pointer py-4"
        >
          <h3 className="text-lg font-bold">Notification Settings</h3>
          {openSection === "notifications" ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openSection === "notifications" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="pl-4 mb-4 space-y-4">
            <p className="font-medium">Email Notifications:</p>
            <ToggleSwitch
              isOn={notificationSettings.emailAlerts}
              onToggle={() =>
                setNotificationSettings({
                  ...notificationSettings,
                  emailAlerts: !notificationSettings.emailAlerts,
                })
              }
            />
            <p className="font-medium mt-4">SMS Notifications:</p>
            <ToggleSwitch
              isOn={notificationSettings.smsAlerts}
              onToggle={() =>
                setNotificationSettings({
                  ...notificationSettings,
                  smsAlerts: !notificationSettings.smsAlerts,
                })
              }
            />
          </div>
        </div>
      </div>

      {/* Payment Settings */}
      <div className="border-b">
        <div
          onClick={() => toggleSection("payment")}
          className="flex justify-between items-center cursor-pointer py-4"
        >
          <h3 className="text-lg font-bold">Payment Settings</h3>
          {openSection === "payment" ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openSection === "payment" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="pl-4 mb-4 space-y-4">
            <p>Linked Accounts: Manage your linked accounts here.</p>
            <p>Default Payment Method: Set your default payment method.</p>
            <p>Transaction Limits: View or set transaction limits.</p>
          </div>
        </div>
      </div>

      {/* Accessibility Settings */}
      <div className="border-b">
        <div
          onClick={() => toggleSection("accessibility")}
          className="flex justify-between items-center cursor-pointer py-4"
        >
          <h3 className="text-lg font-bold">Accessibility Settings</h3>
          {openSection === "accessibility" ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openSection === "accessibility" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="pl-4 mb-4">
            <p>Language Preferences: English</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md">
              Change
            </button>
          </div>
        </div>
      </div>

      {/* Account Security */}
      <div className="border-b">
        <div
          onClick={() => toggleSection("accountSecurity")}
          className="flex justify-between items-center cursor-pointer py-4"
        >
          <h3 className="text-lg font-bold">Account Security</h3>
          {openSection === "accountSecurity" ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openSection === "accountSecurity" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="pl-4 mb-4">
            <p>Login History: View recent login activity.</p>
            <p>Active Sessions: Manage or log out of active sessions.</p>
          </div>
        </div>
      </div>

      {/* Help & Support */}
      <div className="border-b">
        <div
          onClick={() => toggleSection("helpSupport")}
          className="flex justify-between items-center cursor-pointer py-4"
        >
          <h3 className="text-lg font-bold">Help & Support</h3>
          {openSection === "helpSupport" ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openSection === "helpSupport" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="pl-4 mb-4">
            <p>Contact Support: Reach us via chat, email, or phone.</p>
            <p>FAQs: Access frequently asked questions.</p>
            <p>Feedback: Provide feedback or report issues.</p>
          </div>
        </div>
      </div>

      {/* Delete Account */}
      <div className="border-b">
        <div
          onClick={() => toggleSection("deleteAccount")}
          className="flex justify-between items-center cursor-pointer py-4"
        >
          <h3 className="text-lg font-bold text-red-600">Delete Account</h3>
          {openSection === "deleteAccount" ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openSection === "deleteAccount" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="pl-4 mb-4">
            <p className="text-red-600">
              Deleting your account is permanent and cannot be reversed.
            </p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md">
              Confirm Deletion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;