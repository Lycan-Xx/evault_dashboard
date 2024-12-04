export interface SettingsCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'password' | 'toggle' | 'select' | 'radio' | 'checkbox';
  value?: string | boolean;
  options?: { label: string; value: string }[];
  required?: boolean;
}