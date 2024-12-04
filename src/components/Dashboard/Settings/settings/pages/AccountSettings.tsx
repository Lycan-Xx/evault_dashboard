import React, { useState } from 'react';
import { SettingsHeader } from '../components/SettingsHeader.tsx';
import { SettingsSection } from '../components/SettingsSection.tsx';
import { FormField } from '../components/FormField.tsx';

export const AccountSettings: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    nin: '',
    bvn: '',
  });

  const [businessInfo, setBusinessInfo] = useState({
    businessName: '',
    businessAddress: '',
    businessEmail: '',
    businessPhone: '',
  });

  const handlePersonalInfoChange = (field: string, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleBusinessInfoChange = (field: string, value: string) => {
    setBusinessInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <SettingsHeader
        title="Account Management"
        description="Manage your personal and business information"
      />

      <SettingsSection
        title="Personal Information"
        description="Update your personal details and identification"
      >
        <FormField
          id="name"
          label="Full Name"
          type="text"
          value={personalInfo.name}
          onChange={(value) => handlePersonalInfoChange('name', value as string)}
          required
        />
        <FormField
          id="email"
          label="Email Address"
          type="email"
          value={personalInfo.email}
          onChange={(value) => handlePersonalInfoChange('email', value as string)}
          required
        />
        <FormField
          id="phone"
          label="Phone Number"
          type="tel"
          value={personalInfo.phone}
          onChange={(value) => handlePersonalInfoChange('phone', value as string)}
        />
        <FormField
          id="address"
          label="Address"
          type="text"
          value={personalInfo.address}
          onChange={(value) => handlePersonalInfoChange('address', value as string)}
        />
        <FormField
          id="nin"
          label="National Identification Number (NIN)"
          type="text"
          value={personalInfo.nin}
          onChange={(value) => handlePersonalInfoChange('nin', value as string)}
        />
        <FormField
          id="bvn"
          label="Bank Verification Number (BVN)"
          type="text"
          value={personalInfo.bvn}
          onChange={(value) => handlePersonalInfoChange('bvn', value as string)}
        />
      </SettingsSection>

      <SettingsSection
        title="Business Information"
        description="Update your business profile and contact details"
      >
        <FormField
          id="businessName"
          label="Business Name"
          type="text"
          value={businessInfo.businessName}
          onChange={(value) => handleBusinessInfoChange('businessName', value as string)}
          required
        />
        <FormField
          id="businessAddress"
          label="Business Address"
          type="text"
          value={businessInfo.businessAddress}
          onChange={(value) => handleBusinessInfoChange('businessAddress', value as string)}
        />
        <FormField
          id="businessEmail"
          label="Business Email"
          type="email"
          value={businessInfo.businessEmail}
          onChange={(value) => handleBusinessInfoChange('businessEmail', value as string)}
        />
        <FormField
          id="businessPhone"
          label="Business Phone"
          type="tel"
          value={businessInfo.businessPhone}
          onChange={(value) => handleBusinessInfoChange('businessPhone', value as string)}
        />
      </SettingsSection>
    </div>
  );
};