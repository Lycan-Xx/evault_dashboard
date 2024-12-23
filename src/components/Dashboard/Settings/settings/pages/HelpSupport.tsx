import React from 'react';
import { SettingsHeader } from '../components/SettingsHeader.tsx';
import { SettingsSection } from '../components/SettingsSection.tsx';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export const HelpSupport: React.FC = () => {
	return (
		<div>
			<SettingsHeader
				title="Help & Support"
				description="Get help and contact our support team"
			/>

			<SettingsSection
				title="Contact Support"
				description="Choose your preferred way to reach us"
			>
				<div className="p-4 space-y-4">
					<button
						className="w-full flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
						onClick={() => window.open('#', '_blank')}
					>
						<MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
						<div className="text-left">
							<h3 className="font-medium text-gray-900">Live Chat</h3>
							<p className="text-sm text-gray-500">Chat with our support team</p>
						</div>
					</button>

					<button
						className="w-full flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
						onClick={() => window.location.href = 'mailto:support@example.com'}
					>
						<Mail className="w-6 h-6 text-blue-600 mr-3" />
						<div className="text-left">
							<h3 className="font-medium text-gray-900">Email Support</h3>
							<p className="text-sm text-gray-500">support@example.com</p>
						</div>
					</button>

					<button
						className="w-full flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
						onClick={() => window.location.href = 'tel:+1234567890'}
					>
						<Phone className="w-6 h-6 text-blue-600 mr-3" />
						<div className="text-left">
							<h3 className="font-medium text-gray-900">Phone Support</h3>
							<p className="text-sm text-gray-500">+1 (234) 567-890</p>
						</div>
					</button>
				</div>
			</SettingsSection>

			<SettingsSection
				title="Frequently Asked Questions"
				description="Find quick answers to common questions"
			>
				<div className="divide-y divide-gray-200">
					{faqs.map((faq, index) => (
						<details key={index} className="p-4 group">
							<summary className="font-medium text-gray-900 cursor-pointer list-none">
								{faq.question}
							</summary>
							<p className="mt-2 text-gray-500 text-sm">{faq.answer}</p>
						</details>
					))}
				</div>
			</SettingsSection>
		</div>
	);
};

const faqs = [
	{
		question: "How do I reset my password?",
		answer: "Go to Security Settings, click on 'Change Password', and follow the instructions to reset your password."
	},
	{
		question: "How can I update my business information?",
		answer: "Navigate to Account Management, scroll to the Business Information section, and update your details."
	},
	{
		question: "What payment methods are accepted?",
		answer: "We accept credit/debit cards, bank transfers, and digital wallets. Visit Payment Settings to manage your payment methods."
	},
];