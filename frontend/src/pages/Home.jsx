import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import QuickServices from '@/components/QuickServices';
import FindHealthcare from '@/components/FindHealthcare';
import GovernmentSchemes from '@/components/GovernmentSchemes';
import InsuranceSupport from '@/components/InsuranceSupport';
import EmergencySection from '@/components/EmergencySection';
import HealthcareAccessScore from '@/components/HealthcareAccessScore';
import SmartComparison from '@/components/SmartComparison';
import TrustVerification from '@/components/TrustVerification';
import RuralMode from '@/components/RuralMode';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <QuickServices />
        <FindHealthcare />
        <GovernmentSchemes />
        <InsuranceSupport />
        <HealthcareAccessScore />
        <SmartComparison />
        <EmergencySection />
        <RuralMode />
        <TrustVerification />
      </main>
      <Footer />
    </div>
  );
}
