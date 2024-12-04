import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SettingsLayout } from './settings/components/SettingsLayout.tsx';
import { SettingsHome } from './settings/pages/SettingsHome.tsx';
import { AccountSettings } from './settings/pages/AccountSettings.tsx';
import { SecuritySettings } from './settings/pages/SecuritySettings.tsx';
import { NotificationSettings } from './settings/pages/NotificationSettings.tsx';
import { PaymentSettings } from './settings/pages/PaymentSettings.tsx';
import { AccessibilitySettings } from './settings/pages/AccessibilitySettings.tsx';
import { HelpSupport } from './settings/pages/HelpSupport.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/settings" replace />} />
        <Route path="/settings" element={<SettingsLayout />}>
          <Route index element={<SettingsHome />} />
          <Route path="account" element={<AccountSettings />} />
          <Route path="security" element={<SecuritySettings />} />
          <Route path="notifications" element={<NotificationSettings />} />
          <Route path="payment" element={<PaymentSettings />} />
          <Route path="accessibility" element={<AccessibilitySettings />} />
          <Route path="help" element={<HelpSupport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;