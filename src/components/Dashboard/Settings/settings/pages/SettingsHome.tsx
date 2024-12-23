import React from 'react';
import { CategoryCard } from '../components/CategoryCard.tsx';
import { settingsCategories } from '../data/categories.ts';

export const SettingsHome: React.FC = () => {
	return (
		<div>
			<h1 className="text-4xl font-bold text-gray-900 mb-8">Settings</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{settingsCategories.map((category) => (
					<CategoryCard key={category.id} category={category} />
				))}
			</div>
		</div>
	);
};