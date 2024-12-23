import React, { useState } from 'react';
import { SettingsHeader } from '../components/SettingsHeader.tsx';
import { SettingsSection } from '../components/SettingsSection.tsx';
import { FormField } from '../components/FormField.tsx';

interface PersonalInfo {
	name: string;
	email: string;
	phone: string;
	address: string;
	nin: string;
	bvn: string;
}

interface BusinessInfo {
	businessName: string;
	businessAddress: string;
	businessEmail: string;
	businessPhone: string;
}

export const AccountSettings: React.FC = () => {
	const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
		name: '',
		email: '',
		phone: '',
		address: '',
		nin: '',
		bvn: '',
	});

	const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
		businessName: '',
		businessAddress: '',
		businessEmail: '',
		businessPhone: '',
	});

	return (
		<div className="space-y-6">
			<SettingsHeader title="Account Settings" />
			<SettingsSection title="Personal Information" description="Please fill in your personal details.">
				<FormField
					id="name" // Add an id
					label="Name"
					type="text"
					value={personalInfo.name}
					required={true} // Add required if necessary
					onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
				/>
				<FormField
					id="email" // Add an id
					label="Email"
					type="email"
					value={personalInfo.email}
					required={true} // Add required if necessary
					onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
				/>
				<FormField
					id="phone" // Add an id
					label="Phone"
					type="tel"
					value={personalInfo.phone}
					required={true} // Add required if necessary
					onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
				/>
				<FormField
					id="address" // Add an id
					label="Address"
					type="text"
					value={personalInfo.address}
					required={true} // Add required if necessary
					onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })}
				/>
				<FormField
					id="nin" // Add an id
					label="NIN"
					type="text"
					value={personalInfo.nin}
					required={true} // Add required if necessary
					onChange={(e) => setPersonalInfo({ ...personalInfo, nin: e.target.value })}
				/>
				<FormField
					id="bvn" // Add an id
					label="BVN"
					type="text"
					value={personalInfo.bvn}
					required={true} // Add required if necessary
					onChange={(e) => setPersonalInfo({ ...personalInfo, bvn: e.target.value })}
				/>
			</SettingsSection>

			<SettingsSection title="Business Information" description="Please fill in your business details.">
				<FormField
					id="businessName" // Add an id
					label="Business Name"
					type="text"
					value={businessInfo.businessName}
					required={true} // Add required if necessary
					onChange={(e) => setBusinessInfo({ ...businessInfo, businessName: e.target.value })}
				/>
				<FormField
					id="businessAddress" // Add an id
					label="Business Address"
					type="text"
					value={businessInfo.businessAddress}
					required={true} // Add required if necessary
					onChange={(e) => setBusinessInfo({ ...businessInfo, businessAddress: e.target.value })}
				/>
				<FormField
					id="businessEmail" // Add an id
					label="Business Email"
					type="email"
					value={businessInfo.businessEmail}
					required={true} // Add required if necessary
					onChange={(e) => setBusinessInfo({ ...businessInfo, businessEmail: e.target.value })}
				/>
				<FormField
					id="businessPhone" // Add an id
					label="Business Phone"
					type="tel"
					value={businessInfo.businessPhone}
					required={true} // Add required if necessary
					onChange={(e) => setBusinessInfo({ ...businessInfo, businessPhone: e.target.value })}
				/>
			</SettingsSection>
		</div>
	);
};

export default AccountSettings;
