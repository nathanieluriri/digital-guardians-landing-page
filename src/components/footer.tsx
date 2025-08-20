'use client'

import Image from 'next/image'
import Link from 'next/link'
// import { useState } from 'react'

export default function Footer() {
  // const [email, setEmail] = useState('')

  return (
    <footer className="bg-gray-900 text-gray-300 mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info & Newsletter */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/digital-guardians-logo-without-wordmark.png" alt="Digital Guardian" width={48} height={48} />
            <span className="text-xl font-bold text-blue-500">Digital Guardians</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">Delivering Secure and Innovative Solutions across Information Technology.</p>
          
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-red-500 transition-colors">About</Link></li>
            <li><Link href="/service" className="hover:text-red-500 transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
            <li><Link href="/product" className="hover:text-red-500 transition-colors">Products</Link></li>
            <li><Link href="/faqs" className="hover:text-red-500 transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services/cyber-security" className="hover:text-red-500 transition-colors">Cyber Security</Link></li>
            <li><Link href="/services/media" className="hover:text-red-500 transition-colors">Media </Link></li>
            <li><Link href="/services/digital-transformation" className="hover:text-red-500 transition-colors">Digital Transformation </Link></li>
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact & Socials</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-3">
             
              <span>First Floor, Suite B9, Othni Plaza, Wuse Zone 1, Abuja-Nigeria.</span>
            </li>
            <li className="flex items-center space-x-3">
              
              <span>digitalguardians@gmail.com.</span>
            </li>
            <li className="flex items-center space-x-3">
              
              <span>+234 801 234 5678, +234 902 345 6789.</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-6">
            {/* <Link href="#" aria-label="Facebook" className="hover:text-red-500 transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-red-500 transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.723.01 3.694.067a5.522 5.522 0 013.693.855 5.52 5.52 0 01.854 3.693c.057.97.067 1.263.067 3.694s-.01 2.723-.067 3.694a5.522 5.522 0 01-.855 3.693 5.52 5.52 0 01-3.693.854c-.97.057-1.263.067-3.694.067s-2.723-.01-3.694-.067a5.522 5.522 0 01-3.693-.855 5.52 5.52 0 01-.854-3.693c-.057-.97-.067-1.263-.067-3.694s.01-2.723.067-3.694a5.522 5.522 0 01.855-3.693A5.52 5.52 0 015.626 2.068c.97-.057 1.263-.067 3.694-.067s2.723.01 3.694.067zM12 4a8 8 0 100 16 8 8 0 000-16zm.5-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-6.5 6.5a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-red-500 transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.293 11.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 13.414l-2.293 2.293a1 1 0 01-1.414-1.414l4-4z" clipRule="evenodd" fillRule="evenodd" />
                <path d="M12 2a10 10 0 00-7.071 2.929 10 10 0 000 14.142 10 10 0 0014.142 0A10 10 0 0012 2zm4 8a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6z" />
              </svg>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="font-medium">© 2025 Digital Guardians. All rights reserved.</p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:underline hover:text-red-500">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline hover:text-red-500">Terms of Use</Link>
            <Link href="/cookies" className="hover:underline hover:text-red-500">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}