// components/ContactSection.tsx
import React from "react";
import Image from "next/image";

const ContactSection: React.FC = () => {
  return (
    <section className="min-h-screen flex md:items-center md:justify-center bg-white p-8 md:p-18">
      <div className="flex flex-col md:container md:mx-auto md:grid  md:grid-cols-2 gap-32 md:items-center">
        {/* Left Section */}
        <div className="flex flex-col md:justify-center md:p-35 p-0 space-y-8">
          <div className="flex items-center space-x-2 border border-gray-300 rounded-[11px] px-4 py-2 w-fit">
            <span className="h-2 w-2 bg-black rounded-full"></span>
            <p className="text-sm font-medium">Contact</p>
          </div>

          <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
          <p className="text-gray-600">
            We&#39;re here to assist you with any inquiries.
          </p>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              {/* Mail icon - using a simple SVG or font icon would be better for production */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Email</h2>
              <p className="text-gray-600">
                Reach us anytime for support or questions.
              </p>
              <a
                href="mailto:support@digitalguardians.com"
                className="text-red-600 hover:underline"
              >
                support@digitalguardians.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              {/* Phone icon - using a simple SVG or font icon would be better for production */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.293 1.05a1 1 0 00-.424 1.173l.684 1.943a1 1 0 001.122 1.122l1.943.684a1 1 0 001.173-.424l1.05-2.293a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
              <p className="text-gray-600">
                Call us for quick support or inquiries.
              </p>
              <a
                href="tel:+2348000000000"
                className="text-red-600 hover:underline"
              >
                +234 800 000 0000
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="relative flex md:justify-center md:items-center">
          {/* Placeholder for the lightbulb image */}
          <div className="absolute -top-25 -right-26 md:top-[-150px] md:right-[480px] z-0">
            <Image
              src="/lightbulb.png" // Use /placeholder.png in your public directory
              alt="Lightbulb"
              width={200} // Adjust size as needed
              height={200} // Adjust size as needed
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>

          <div className="relative z-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg w-full max-w-md">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name here"
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email here"
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your Company here"
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message here"
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-fit m-auto flex justify-center py-2 px-4 border border-gray-700  rounded-md shadow-sm text-sm font-medium text-black hover:bg-black hover:text-white transition-all 1s duration-700 ease-in-out bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Contact us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
