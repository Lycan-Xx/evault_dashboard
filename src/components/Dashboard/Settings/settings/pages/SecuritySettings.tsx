import React, { useState } from 'react';
import { SettingsHeader } from '../components/SettingsHeader.tsx';
import { SettingsSection } from '../components/SettingsSection.tsx';
import { FormField } from '../components/FormField.tsx';

export const SecuritySettings: React.FC = () => {
	const [passwords, setPasswords] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});

	const [securitySettings, setSecuritySettings] = useState({
		twoFactorEnabled: false,
		marketingEmails: false,
		promotionalNotifications: false,
	});

	const handlePasswordChange = (field: string, value: string) => {
		setPasswords((prev) => ({ ...prev, [field]: value }));
	};

	const handleSecuritySettingChange = (field: string, value: boolean) => {
		setSecuritySettings((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<div>
			<SettingsHeader
				title="Security & Privacy"
				description="Manage your account security and privacy preferences"
			/>

			<SettingsSection
				title="Change Password"
				description="Update your account password"
			>
				<FormField
					id="currentPassword"
					label="Current Password"
					type="password"
					value={passwords.currentPassword}
					onChange={(value) => handlePasswordChange('currentPassword', value as string)}
					required
				/>
				<FormField
					id="newPassword"
					label="New Password"
					type="password"
					value={passwords.newPassword}
					onChange={(value) => handlePasswordChange('newPassword', value as string)}
					required
				/>
				<FormField
					id="confirmPassword"
					label="Confirm New Password"
					type="password"
					value={passwords.confirmPassword}
					onChange={(value) => handlePasswordChange('confirmPassword', value as string)}
					required
				/>
			</SettingsSection>

			<SettingsSection
				title="Two-Factor Authentication"
				description="Add an extra layer of security to your account"
			>
				<FormField
					id="twoFactorEnabled"
					label="Enable Two-Factor Authentication"
					type="toggle"
					value={securitySettings.twoFactorEnabled}
					onChange={(value) => handleSecuritySettingChange('twoFactorEnabled', value as boolean)}
				/>
			</SettingsSection>

			<SettingsSection
				title="Privacy Preferences"
				description="Control how we communicate with you"
			>
				<FormField
					id="marketingEmails"
					label="Receive Marketing Emails"
					type="toggle"
					value={securitySettings.marketingEmails}
					onChange={(value) => handleSecuritySettingChange('marketingEmails', value as boolean)}
				/>
				<FormField
					id="promotionalNotifications"
					label="Receive Promotional Notifications"
					type="toggle"
					value={securitySettings.promotionalNotifications}
					onChange={(value) => handleSecuritySettingChange('promotionalNotifications', value as boolean)}
				/>
			</SettingsSection>
		</div>
	);
};