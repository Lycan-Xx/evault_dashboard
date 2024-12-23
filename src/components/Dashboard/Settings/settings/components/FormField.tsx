import React from 'react';
import { clsx } from 'clsx';

export const FormField = ({
	id,
	label,
	type,
	value,
	options,
	required,
	onChange,
}) => {
	const inputClasses = clsx(
		'mt-2 block w-full px-4 py-3 text-base rounded-lg border-gray-300 shadow-sm',
		'focus:border-blue-500 focus:ring-blue-500',
		'transition-colors duration-200'
	);

	const renderField = () => {
		switch (type) {
			case 'toggle':
				return (
					<div className="flex items-center h-14">
						<button
							type="button"
							className={clsx(
								'relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent',
								'transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
								value ? 'bg-blue-600' : 'bg-gray-200'
							)}
							role="switch"
							aria-checked={value}
							onClick={() => onChange(!value)}
						>
							<span
								className={clsx(
									'pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0',
									'transition duration-200 ease-in-out',
									value ? 'translate-x-7' : 'translate-x-0'
								)}
							/>
						</button>
						<span className="ml-4 text-base text-gray-900">{label}</span>
					</div>
				);
			case 'select':
				return (
					<select
						id={id}
						value={value}
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
						value={value}
						onChange={(e) => onChange(e.target.value)}
						className={inputClasses}
						required={required}
						placeholder={`Enter your ${label.toLowerCase()}`}
					/>
				);
		}
	};

	return (
		<div className="p-6 border-b border-gray-200 last:border-b-0">
			<label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
				{label}
				{required && <span className="text-red-500 ml-1">*</span>}
			</label>
			{renderField()}
		</div>
	);
};