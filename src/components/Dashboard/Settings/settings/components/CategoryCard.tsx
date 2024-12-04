import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SettingsCategory } from '../types';
import { clsx } from 'clsx';

interface CategoryCardProps {
  category: SettingsCategory;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const IconComponent = (Icons as any)[category.icon.charAt(0).toUpperCase() + category.icon.slice(1)];

  return (
    <Link
      to={category.path}
      className={clsx(
        'block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow',
        'border border-gray-100 hover:border-gray-200',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {IconComponent && (
            <div className="p-2 bg-blue-50 rounded-lg">
              <IconComponent className="w-6 h-6 text-blue-600" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{category.description}</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </Link>
  );
};