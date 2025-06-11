'use client';

import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-black px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side: Logo or Illustration */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/digital-guardian-logo.png" // Replace with actual image
            alt="Digital Guardians Logo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2">● About</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Digital Guardian Mission, Vision and Core Values
          </h2>

          {/* Vision Statement */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 border rounded-full text-sm mb-2 text-black border-gray-300">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Vision Statement
            </span>
            <p className="text-gray-700">
              To be the world’s most trusted guardian of digital assets, empowering a safer, smarter, and more secure digital future for everyone.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 border rounded-full text-sm mb-2 text-black border-gray-300">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Mission Statement
            </span>
            <p className="text-gray-700">
              To protect businesses and individuals from evolving cyber threats by delivering cutting-edge security solutions, relentless innovation, and expert guidance—24/7, globally.
            </p>
          </div>

          {/* Core Values */}
          <div>
            <span className="inline-block px-3 py-1 border rounded-full text-sm mb-2 text-black border-gray-300">
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Core Values
            </span>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-2">
              <li><strong>Integrity First:</strong> uphold the highest standards of honesty and transparency in all we do.</li>
              <li><strong>Relentless Protection:</strong> never rest in our pursuit to safeguard digital environments.</li>
              <li><strong>Innovation-Driven:</strong> embrace technology and creativity to stay ahead of threats.</li>
              <li><strong>Client-Centric:</strong> solution starts with a deep understanding of our clients’ unique needs.</li>
              <li><strong>Global Responsibility:</strong> recognize our role in protecting the digital infrastructure of a connected world.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
