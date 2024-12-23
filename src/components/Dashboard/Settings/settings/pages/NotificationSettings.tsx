import React, { useState } from 'react';
import { SettingsHeader } from '../components/SettingsHeader.tsx';
import { SettingsSection } from '../components/SettingsSection.tsx';
import { FormField } from '../components/FormField.tsx';

export const NotificationSettings: React.FC = () => {
	const [notifications, setNotifications] = useState({
		emailNotifications: true,
		smsNotifications: false,
		pushNotifications: true,
		accountAlerts: true,
		securityAlerts: true,
		marketingUpdates: false,
	});

	const handleNotificationChange = (field: string, value: boolean) => {
		setNotifications((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<div>
			<SettingsHeader
				title="Notification Settings"
				description="Customize how you receive notifications"
			/>

			<SettingsSection
				title="Notification Channels"
				description="Choose how you want to receive notifications"
			>
				<FormField
					id="emailNotifications"
					label="Email Notifications"
					type="toggle"
					value={notifications.emailNotifications}
					onChange={(value) => handleNotificationChange('emailNotifications', value as boolean)}
				/>
				<FormField
					id="smsNotifications"
					label="SMS Notifications"
					type="toggle"
					value={notifications.smsNotifications}
					onChange={(value) => handleNotificationChange('smsNotifications', value as boolean)}
				/>
				<FormField
					id="pushNotifications"
					label="Push Notifications"
					type="toggle"
					value={notifications.pushNotifications}
					onChange={(value) => handleNotificationChange('pushNotifications', value as boolean)}
				/>
			</SettingsSection>

			<SettingsSection
				title="Notification Types"
				description="Select the types of notifications you want to receive"
			>
				<FormField
					id="accountAlerts"
					label="Account Alerts"
					type="toggle"
					value={notifications.accountAlerts}
					onChange={(value) => handleNotificationChange('accountAlerts', value as boolean)}
				/>
				<FormField
					id="securityAlerts"
					label="Security Alerts"
					type="toggle"
					value={notifications.securityAlerts}
					onChange={(value) => handleNotificationChange('securityAlerts', value as boolean)}
				/>
				<FormField
					id="marketingUpdates"
					label="Marketing Updates"
					type="toggle"
					value={notifications.marketingUpdates}
					onChange={(value) => handleNotificationChange('marketingUpdates', value as boolean)}
				/>
			</SettingsSection>
		</div>
	);
};