import React, { useState } from 'react';
import { SettingsHeader } from '../components/SettingsHeader.tsx';
import { SettingsSection } from '../components/SettingsSection.tsx';
import { FormField } from '../components/FormField.tsx';

export const PaymentSettings: React.FC = () => {
	const [paymentSettings, setPaymentSettings] = useState({
		defaultPaymentMethod: 'card',
		transactionLimit: '1000000',
	});

	const handlePaymentSettingChange = (field: string, value: string) => {
		setPaymentSettings((prev) => ({ ...prev, [field]: value }));
	};

	const paymentMethods = [
		{ label: 'Credit/Debit Card', value: 'card' },
		{ label: 'Bank Transfer', value: 'bank' },
		{ label: 'Digital Wallet', value: 'wallet' },
	];

	return (
		<div>
			<SettingsHeader
				title="Payment Information"
				description="Manage your payment methods and transaction settings"
			/>

			<SettingsSection
				title="Payment Methods"
				description="Choose your preferred payment method"
			>
				<FormField
					id="defaultPaymentMethod"
					label="Default Payment Method"
					type="select"
					value={paymentSettings.defaultPaymentMethod}
					options={paymentMethods}
					onChange={(value) => handlePaymentSettingChange('defaultPaymentMethod', value as string)}
				/>
			</SettingsSection>

			<SettingsSection
				title="Transaction Limits"
				description="Set your transaction limits"
			>
				<FormField
					id="transactionLimit"
					label="Daily Transaction Limit (₦)"
					type="text"
					value={paymentSettings.transactionLimit}
					onChange={(value) => handlePaymentSettingChange('transactionLimit', value as string)}
				/>
			</SettingsSection>
		</div>
	);
};