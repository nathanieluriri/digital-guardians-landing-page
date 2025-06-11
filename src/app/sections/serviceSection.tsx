"use client";

import React from "react";
import Image from "next/image";

const services = [
  "Threat Detection & Prevention",
  "Digital Risk Rating",
  "Brand Protection",
  "Cloud Security",
  "Security Awareness Training",
  "Network Security Architecture",
  "Security Audits & Compliance",
  "Incident Response & Recovery",
  "Penetration Testing & Vulnerability Assessment",
  "Identity and Access Management",
  "Data Loss Prevention",
  "Security Software Development",
  "Risk Assessment & Management",
];

const ServiceSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-black px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Text Content */}
        <div className="flex-1">
          <div className="flex items-center space-x-2 border border-gray-300 rounded-[11px] px-4 py-2 w-fit">
            <span className="h-2 w-2 bg-black rounded-full"></span>
            <p className="text-sm font-medium">Services</p>
          </div>
          <p>What Digital Guardian Offers</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Protect What Matters Most — Digital Guardian Secures Your Data,
            Defends Your Business.
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            From insider threats to advanced external attacks, Digital Guardian
            delivers enterprise-grade cybersecurity solutions that safeguard
            your sensitive data across endpoints, networks, and the cloud. With
            real-time threat detection, data loss prevention, and compliance
            support, we empower your business to operate securely in an
            increasingly complex digital world.
          </p>

          <div className="flex flex-wrap gap-3">
            {services.map((service, index) => (
              <p
                key={index}
                className="px-4 py-2 border rounded-[11px] text-sm border-gray-700 text-[#474747] flex items-center gap-2"
              >
                <span className="text-[#FF7474] text-xl  ">●</span> {service}
              </p>
            ))}
          </div>
        </div>

        {/* Placeholder Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/service-image.png" // Replace with your actual image path
            alt="Service Illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
