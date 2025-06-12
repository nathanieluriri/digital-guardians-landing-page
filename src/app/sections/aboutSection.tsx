"use client";

import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-black px-2 py-20 relative">
      <div className="max-w-[1428px] mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-row lg:flex-col justify-between lg:items-start items-center lg:w-fit w-full lg:p-0 p-0.5">
          <div className="flex items-center space-x-2 border border-gray-300 rounded-[11px] px-4 py-2 w-fit h-fit">
            <span className="h-2 w-2 bg-black rounded-full"></span>
            <p className="text-sm font-medium">About</p>
          </div>
          <div className="w-fit">
            <Image
              src="/digital-guardian-logo.png" // Replace with actual image
              alt="Digital Guardians Logo"
              width={688}
              height={688}
              className="object-contain hidden lg:block"
            />
            <Image
              src="/digital-guardian-logo.png" // Replace with actual image
              alt="Digital Guardians Logo"
              width={132}
              height={132}
              className="object-contain block lg:hidden"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col p-3.5 lg:p-0 max-w-xl">
          <h2 className="text-3xl md:text-5xl font-light mb-6">
            Digital Guardian Mission, Vision and Core Values
          </h2>
          <div className="p-1"></div> 

          {/* Vision Statement */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 border rounded-[11px] text-sm mb-2 text-black border-gray-300">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Vision Statement
            </span>
            <div className="p-1"></div>
            <p className="text-gray-700">
              To be the world&rsquo;s most trusted guardian of digital assets,
              empowering a safer, smarter, and more secure digital future for
              everyone.
            </p>
            <div className="p-1"></div>
          </div>

          {/* Mission Statement */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 border rounded-[11px] text-sm mb-2 text-black border-gray-300">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Mission Statement
            </span>
            <div className="p-1"></div>
            <p className="text-gray-700">
              To protect businesses and individuals from evolving cyber threats
              by delivering cutting-edge security solutions, relentless
              innovation, and expert guidance&nbsp;&ndash;&nbsp;24/7, globally.
            </p>
            <div className="p-1"></div>
          </div>

          {/* Core Values */}
          <div>
            <span className="inline-block px-3 py-1 border rounded-[11px] text-sm mb-2 text-black border-gray-300">
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Core Values
            </span>
            <ul className="list-disc pl-5  text-gray-900 space-y-2 mt-2">
              <li>
                <strong>Integrity First:</strong> uphold the highest standards
                of honesty and transparency in all we do.
              </li>
              <div className="p-1"></div>
              <li>
                <strong>Relentless Protection:</strong> never rest in our
                pursuit to safeguard digital environments.
              </li>
              <div className="p-1"></div>
              <li>
                <strong>Innovation-Driven:</strong> embrace technology and
                creativity to stay ahead of threats.
              </li>
              <div className="p-1"></div>
              <li>
                <strong>Client-Centric:</strong> solution starts with a deep
                understanding of our clients’ unique needs.
              </li>
              <div className="p-1"></div>
              <li>
                <strong>Global Responsibility:</strong> recognize our role in
                protecting the digital infrastructure of a connected world.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Image
              src="/paper-texture-one.svg"
              alt="Foreground texture"
              fill
              className="pointer-events-none z-50 object-center h-full object-cover opacity-12"
            />
    </section>
  );
};

export default AboutSection;
