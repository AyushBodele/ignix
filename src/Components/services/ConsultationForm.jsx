import React, { useState } from 'react';
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { Label } from "../../ui/Label";
import { Textarea } from "../../ui/Textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/Select";
import { CheckCircle2 } from 'lucide-react';

export default function ConsultationForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form and close after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setIsSuccess(false);
      onSuccess();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-10 px-6 bg-white rounded-3xl shadow-xl border border-slate-100">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-slate-900" style={{ fontFamily: 'var(--font-bebas)' }}>
          Thank You!
        </h3>
        <p className="text-slate-600 text-sm">
          We've received your consultation request. Our team will reach out within 24 hours to understand your goals and next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white rounded-3xl shadow-xl border border-slate-100 px-6 py-7 sm:px-8 sm:py-8"
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@company.com"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 000-0000"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Your Company"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="service">Service Interest *</Label>
          <Select
            required
            value={formData.service}
            onValueChange={(value) => setFormData({ ...formData, service: value })}
          >
            <SelectTrigger className="mt-1.5 cursor-pointer">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-white text-slate-900 border border-slate-200 shadow-lg cursor-pointer [&_[data-slot=select-scroll-up-button]]:bg-white [&_[data-slot=select-scroll-down-button]]:bg-white [&_[data-slot=select-item]]:cursor-pointer">
              <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
              <SelectItem value="digital-marketing">Digital Marketing & SEO</SelectItem>
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="multiple">Multiple Services</SelectItem>
              <SelectItem value="not-sure">Not Sure / General Inquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message">Tell Us About Your Project</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share details about your needs, goals, or any specific challenges you're facing..."
            rows={4}
            className="mt-1.5"
          />
        </div>
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Book My Free Consultation'}
        </Button>
        <p className="text-xs text-muted-foreground text-center mt-3">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </div>
    </form>
  );
}