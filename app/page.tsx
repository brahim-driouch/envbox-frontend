import { Check, X, Shield, Users, Terminal, Mail, Lock, Zap, Code, Server, Key } from 'lucide-react';
import Scope from './components/landing/scope';
import CallToAction from './components/landing/CallToAction';
import Features from './components/landing/Features';
import HeroSection from './components/landing/HeroSection';
import PainPoints from './components/landing/PainPoints';
import HowItWorks from './components/landing/HowItWorks';
import PricingSection from './components/landing/PricingSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
    

      {/* Hero Section */}
      <HeroSection />

      {/* Pain Points Section */}
     <PainPoints />

      {/* How It Works Section */}
     <HowItWorks />
      {/* Pricing Section */}
<PricingSection />


      {/* Features Section */}
      <Features />

      {/* What We Don't Do Section */}
     <Scope />

      {/* CTA Section */}
     <CallToAction />

     
    </div>
  );
}