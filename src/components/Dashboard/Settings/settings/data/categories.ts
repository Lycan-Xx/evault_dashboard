import { SettingsCategory } from '../types';

export const settingsCategories: SettingsCategory[] = [
  {
    id: 'account',
    title: 'Account Management',
    description: 'Manage your personal and business information',
    icon: 'user',
    path: '/settings/account'
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    description: 'Control your account security and privacy settings',
    icon: 'shield',
    path: '/settings/security'
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Customize your notification preferences',
    icon: 'bell',
    path: '/settings/notifications'
  },
  {
    id: 'payment',
    title: 'Payment Information',
    description: 'Manage your payment methods and settings',
    icon: 'credit-card',
    path: '/settings/payment'
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    description: 'Customize your accessibility preferences',
    icon: 'accessibility',
    path: '/settings/accessibility'
  },
  {
    id: 'help',
    title: 'Help & Support',
    description: 'Get help and contact support',
    icon: 'help-circle',
    path: '/settings/help'
  }
];