'use client';

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
interface HeroProps {
  title: string;
  subtitle?: string;
  ctaPrimary?: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
}



function ResponsiveHeroImage() {
  return (
    <div>
      {/* Image for large screens */}
      <div className="hidden lg:flex text-center self-center bg-center  justify-center">
           <Image
        src="/paper-texture-one.svg"
        alt="Foreground texture"
        fill
        className="pointer-events-none z-50 object-center object-cover opacity-25"
      />
      </div>

      {/* Image for small screens */}
      <div className="flex text-center self-center bg-center  justify-center lg:hidden">
        <Image
          src="/phone-hero-section-image.png"
          alt="Small screen image"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary
}) => {
  return (
    <section className="w-full px-6 py-20 bg-white text-center md:text-left">

      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-center text-gray-900 mb-8">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center justify-items-center self-center text-center md:justify-start">
          {ctaPrimary && (
            <Link
              href={ctaPrimary.href}
              className="px-6 py-3 gap-4 text-white bg-red-600 justify-center flex justify-items-center self-center m-auto  text-center  hover:bg-blue-700 rounded-md text-lg font-medium"
            >
              {ctaPrimary.label} 
              <Image src={'/white-arrow.svg'} height={8.5} width={20.5} alt="Arrow" />
            </Link>
          )}
          {ctaSecondary && (
            <Link
              href={ctaSecondary.href}
              className="px-6 py-3 text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-md text-lg font-medium"
            >
              {ctaSecondary.label}
            </Link>
          )}
        </div>
        <div className='p-10'></div>
      </div>
          <ResponsiveHeroImage/>
    </section>
  );
};

export default Hero;


