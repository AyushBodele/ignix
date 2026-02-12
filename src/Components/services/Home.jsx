import React, { useEffect } from 'react';
import { Shield, TrendingUp, Code, CheckCircle2, Clock, Users, Target, Zap, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Outcomes } from './Outcomes.jsx';
import { Button } from "../../ui/Button";
import { Card } from "../../ui/Card";
import { useConsultation } from "../ConsultationContext";
import {ServicesHero} from "./ServicesHero"

export default function Home() {
  const { openConsultation } = useConsultation();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#consultation') {
      openConsultation();
    }
  }, [location, openConsultation]);

  return (
    <div className="min-h-screen bg-background">
      <ServicesHero />
      {/* Hero Section */}
     <Outcomes />

      {/* Core Services */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Our Core Services</h2>
          
          <div className="grid gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Cybersecurity */}
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">Cybersecurity</h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Protect your business from evolving cyber threats with our comprehensive security solutions. We safeguard your data, maintain compliance, and ensure business continuity with 24/7 vigilance.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Network & Application Security',
                      'Threat Detection & Prevention',
                      'Data Protection & Compliance',
                      'Security Audits & Risk Assessments',
                      '24/7 Monitoring & Incident Response'
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Digital Marketing & SEO */}
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">Digital Marketing & SEO</h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Amplify your online presence and drive measurable growth with data-driven marketing strategies. We increase your visibility, attract qualified leads, and optimize every conversion point.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Technical, On-Page & Off-Page SEO',
                      'Content & Keyword Strategy',
                      'Paid Advertising (Google Ads & Social)',
                      'Social Media Marketing & Management',
                      'Analytics, Reporting & Conversion Optimization'
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Web Development */}
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">Web Development</h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Build fast, scalable, and beautiful websites that deliver exceptional user experiences. From custom design to ongoing support, we create digital platforms that grow with your business.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Custom Website Design & Development',
                      'Responsive & Mobile-First Builds',
                      'E-commerce Development',
                      'Website Speed & Performance Optimization',
                      'Ongoing Maintenance & Support'
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Ignix Social */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Why Choose Ignix Social</h2>
            <p className="text-lg text-muted-foreground">
              We're more than a service provider—we're your strategic partner in digital transformation.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Security-First Mindset',
                description: 'Every solution we build prioritizes security from the ground up, protecting your business and customer data.'
              },
              {
                icon: Users,
                title: 'Experienced Specialists',
                description: 'Our team combines deep expertise in cybersecurity, digital marketing, and web development.'
              },
              {
                icon: Target,
                title: 'Data-Driven Strategies',
                description: 'We use analytics and insights to make informed decisions that deliver measurable business results.'
              },
              {
                icon: Zap,
                title: 'Scalable Solutions',
                description: 'Future-ready technology and strategies that grow with your business, from startup to enterprise.'
              },
              {
                icon: Clock,
                title: 'Dedicated Support',
                description: '24/7 monitoring and responsive client support ensure your business stays protected and performing.'
              },
              {
                icon: CheckCircle2,
                title: 'Proven Track Record',
                description: 'Trusted by businesses across industries to deliver secure, high-performance digital solutions.'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-10 opacity-90">
              Let's discuss how Ignix Social can help you secure your business, scale your reach, and succeed in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                onClick={openConsultation}
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground"
                onClick={openConsultation}
              >
                Request a Custom Quote
              </Button>
            </div>
            <div className="mt-10 pt-10 border-t border-primary-foreground/20">
              <p className="text-sm opacity-75 mb-4">Have questions? We're here to help.</p>
              <a href="mailto:hello@ignixsocial.com" className="text-lg font-medium hover:underline">
                Contact Ignix Social
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}