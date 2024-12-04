import React, { useState } from 'react';
import { SettingsHeader } from '../components/SettingsHeader.tsx';
import { SettingsSection } from '../components/SettingsSection.tsx';
import { FormField } from '../components/FormField.tsx';

export const AccessibilitySettings: React.FC = () => {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    language: 'en',
    fontSize: 'medium',
    highContrast: false,
    reducedMotion: false,
  });

  const handleSettingChange = (field: string, value: string | boolean) => {
    setAccessibilitySettings((prev) => ({ ...prev, [field]: value }));
  };

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'Spanish', value: 'es' },
  ];

  const fontSizes = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  return (
    <div>
      <SettingsHeader
        title="Accessibility"
        description="Customize your accessibility preferences"
      />

      <SettingsSection
        title="Language & Text"
        description="Adjust language and text settings"
      >
        <FormField
          id="language"
          label="Preferred Language"
          type="select"
          value={accessibilitySettings.language}
          options={languages}
          onChange={(value) => handleSettingChange('language', value as string)}
        />
        <FormField
          id="fontSize"
          label="Font Size"
          type="select"
          value={accessibilitySettings.fontSize}
          options={fontSizes}
          onChange={(value) => handleSettingChange('fontSize', value as string)}
        />
      </SettingsSection>

      <SettingsSection
        title="Visual Preferences"
        description="Adjust visual settings for better accessibility"
      >
        <FormField
          id="highContrast"
          label="High Contrast Mode"
          type="toggle"
          value={accessibilitySettings.highContrast}
          onChange={(value) => handleSettingChange('highContrast', value as boolean)}
        />
        <FormField
          id="reducedMotion"
          label="Reduced Motion"
          type="toggle"
          value={accessibilitySettings.reducedMotion}
          onChange={(value) => handleSettingChange('reducedMotion', value as boolean)}
        />
      </SettingsSection>
    </div>
  );
};