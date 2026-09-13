import React from 'react';
import { LanguageProvider } from '@/lib/LanguageContext';
import Home from '@/pages/Home';

export default function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}
