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
    <video autoPlay loop  playsInline muted className="w-74 m-auto h-auto">
  <source src="/Digital_Guardians_Transparent.webm" type="video/webm" />
</video>
  );
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary
}) => {
  return (
    <section className="w-full h-screen px-6 pt-20 pb-0 bg-[#eef6fb] text-center md:text-left">

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
              className="px-6 py-3 gap-4 text-white bg-[#2084C7]  justify-center flex justify-items-center self-center m-auto  text-center  hover:bg-red-900 delay-200  transition-all duration-400 ease-in-out rounded-md text-lg font-medium"
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
           <Image
        src="/paper-texture-one.svg"
        alt="Foreground texture"
        fill
        className="pointer-events-none z-50 object-center h-full object-cover opacity-20"
      />
    </section>
  );
};

export default Hero;


