import { Check } from 'lucide-react';

export function PlatformSection({ dashboardImage }) {
  const features = [
    'AI Threat Hunter—Detects dangers in real-time, auto-responds to slash effort and lag',
    'Unified Dashboard Dominion—Oversees web apps, cloud, and beyond from one intuitive view',
    'Impact-Driven Risk Engine—Assesses and ranks threats by true business stakes',
    'Compliance Command Center—Tracks standards live, spits out actionable reports',
    'Seamless Stack Fusion—Integrates with your tools and workflows, zero disruption',
    'Predictive Strike Force—Forecasts attacks via behavior patterns and intel',
  ];

  return (
    <section id="platform" className="py-20 bg-[#f6f9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
              Platform Overview
            </div>
            
            <h2 className="text-4xl font-bold text-slate-900">
              One Fortress. Absolute Control.
            </h2>
            
            <p className="text-lg text-gray-600">
              Ignix Social's unified platform merges cybersecurity, cloud shields, and digital risk mastery into a single AI-orchestrated system—eliminating tool sprawl with centralized visibility, automated defenses, and real-time insights that protect your explosive growth without complexity.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700 transition-colors"
              >
                Explore the Platform
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Right - Dashboard Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl opacity-50 blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc3MDI2MTY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Security Platform Dashboard"
              className="relative rounded-xl shadow-2xl border border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
