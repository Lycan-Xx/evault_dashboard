import React from 'react';
import { FormField as FormFieldType } from '../types';
import { clsx } from 'clsx';

interface FormFieldProps extends FormFieldType {
  onChange: (value: string | boolean) => void;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  value,
  options,
  required,
  onChange,
}) => {
  const inputClasses = clsx(
    'mt-1 block w-full rounded-md border-gray-300 shadow-sm',
    'focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
  );

  const renderField = () => {
    switch (type) {
      case 'toggle':
        return (
          <div className="flex items-center">
            <button
              type="button"
              className={clsx(
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                value ? 'bg-blue-600' : 'bg-gray-200'
              )}
              role="switch"
              aria-checked={value}
              onClick={() => onChange(!value)}
            >
              <span
                className={clsx(
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                  value ? 'translate-x-5' : 'translate-x-0'
                )}
              />
            </button>
            <span className="ml-3 text-sm text-gray-900">{label}</span>
          </div>
        );
      case 'select':
        return (
          <select
            id={id}
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            className={inputClasses}
            required={required}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type={type}
            id={id}
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            className={inputClasses}
            required={required}
          />
        );
    }
  };

  return (
    <div className="p-4 border-b border-gray-200 last:border-b-0">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {renderField()}
    </div>
  );
};