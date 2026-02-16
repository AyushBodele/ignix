import { Building2, Heart, Landmark, Server } from 'lucide-react';

export function IndustrySection({ financeImage, healthcareImage }) {
  const industries = [
    {
      icon: Landmark,
      title: 'Financial Services',
      description: 'Protect critical financial data with bank-grade security and compliance.',
      image: financeImage,
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'HIPAA-compliant security for patient data and medical systems.',
      image: healthcareImage,
    },
    {
      icon: Building2,
      title: 'Government',
      description: 'Mission-critical security meeting federal and state requirements.',
      image: null,
    },
    {
      icon: Server,
      title: 'Enterprise IT',
      description: 'Scalable security for complex, distributed IT environments.',
      image: null,
    },
  ];

  return (
    <section id="why" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Built for Your Industry
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-specific security solutions that meet your unique compliance and operational requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
