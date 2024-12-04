import React from 'react';
import { BackButton } from './BackButton.tsx';

interface SettingsHeaderProps {
  title: string;
  description?: string;
}

export const SettingsHeader: React.FC<SettingsHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="mb-8">
      <BackButton />
      <h1 className="mt-4 text-3xl font-bold text-gray-900">{title}</h1>
      {description && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};