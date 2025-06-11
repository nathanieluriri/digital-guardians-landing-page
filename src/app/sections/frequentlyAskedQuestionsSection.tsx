'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQCategory = 'General' | 'Getting Started' | 'Billing' | 'The Product';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<FAQCategory, FAQItem[]> = {
  General: [
    { question: 'Setting up your scanners', answer: 'To set up your scanners, navigate to Settings > Scanners and follow the steps.' },
    { question: 'Reviewing Results', answer: 'Results can be found in your dashboard under Reports > Recent Scans.' },
    { question: 'Setting up your scanners', answer: 'To set up your scanners, navigate to Settings > Scanners and follow the steps.' },
    { question: 'Reviewing Results', answer: 'Results can be found in your dashboard under Reports > Recent Scans.' },
    { question: 'Setting up your scanners', answer: 'To set up your scanners, navigate to Settings > Scanners and follow the steps.' },
    { question: 'Reviewing Results', answer: 'Results can be found in your dashboard under Reports > Recent Scans.' },
  ],
  'Getting Started': [
    { question: 'Creating your first scan', answer: 'Go to Dashboard > Start New Scan and configure your scan target.' },
    { question: 'Onboarding Tips', answer: 'Check out our Getting Started guide to quickly ramp up.' },
    { question: 'Account Setup', answer: 'Visit your profile to complete your account setup.' },
  ],
  Billing: [
    { question: 'Payment Methods', answer: 'We accept credit card, PayPal, and bank transfers.' },
    { question: 'Invoices', answer: 'Invoices are generated monthly and accessible under Billing > Invoices.' },
    { question: 'Canceling Subscription', answer: 'You can cancel anytime from Billing Settings.' },
  ],
  'The Product': [
    { question: 'Integrating with Github', answer: 'Go to Integrations > GitHub and follow the OAuth flow.' },
    { question: 'Adding Team Members', answer: 'Team members can be added via Settings > Team Management.' },
    { question: 'Integrating with Slack', answer: 'Enable Slack notifications from Integrations > Slack.' },
  ],
};

const categories: { key: FAQCategory; count: number }[] = Object.entries(faqData).map(([key, value]) => ({
  key: key as FAQCategory,
  count: value.length,
}));

const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('General');
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left: FAQ Tabs and Accordion */}
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2">● Frequently Asked Questions</p>
          <p className="mb-6 text-gray-700">
            We offer a range of pricing plans to fit every budget and level of need. Whether you’re a solo professional
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(({ key, count }) => (
              <button
                key={key}
                className={`px-4 py-2 rounded-full text-sm border ${
                  selectedCategory === key ? 'bg-black text-white' : 'text-gray-700 bg-gray-100'
                }`}
                onClick={() => {
                  setSelectedCategory(key);
                  setOpenIndexes([]);
                }}
              >
                {key} ({count})
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqData[selectedCategory].map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  className="w-full flex justify-between items-center text-left text-lg font-medium"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  {openIndexes.includes(index) ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openIndexes.includes(index) && (
                  <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="flex-1 hidden md:flex text-center items-center m-auto justify-center">
          <img
            src="/faq.png" // Replace with actual image
            alt="FAQ illustration"
            className="max-w-sm object-contain"
          />
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-20">
        <h3 className="text-xl font-bold">Still have questions?</h3>
        <p className="text-gray-600 mb-4">We’re here to help you!</p>
        <button className="px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition">
          Contact
        </button>
      </div>
    </section>
  );
};

export default FaqSection;
