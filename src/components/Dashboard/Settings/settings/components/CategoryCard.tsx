import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { clsx } from 'clsx';

export const CategoryCard = ({ category }) => {
	const IconComponent = Icons[category.icon.charAt(0).toUpperCase() + category.icon.slice(1)];

	return (
		<Link
			to={category.path}
			className={clsx(
				'block p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200',
				'border border-gray-100 hover:border-gray-200',
				'transform hover:-translate-y-1',
				'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
			)}
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-5">
					{IconComponent && (
						<div className="p-3 bg-blue-50 rounded-xl">
							<IconComponent className="w-8 h-8 text-blue-600" />
						</div>
					)}
					<div>
						<h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
						<p className="mt-2 text-base text-gray-600">{category.description}</p>
					</div>
				</div>
				<ChevronRight className="w-6 h-6 text-gray-400" />
			</div>
		</Link>
	);
};