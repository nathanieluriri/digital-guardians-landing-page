'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-white text-black border-t border-gray-200 mt-10 flex flex-col w-full m-auto  justify-center items-center ">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Newsletter Section */}
        <div>
          <div className="flex items-center space-x-2">
            <Image src="/globe.svg" alt="Digital Guardian" width={44} height={44} />
            <span className="text-sm font-semibold text-red-600">Digital Guardian</span>
          </div>
          <p className="text-sm mt-4">Subscribe to our newsletter for the latest updates on features and releases.</p>
          <div className="flex mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email here"
              className="border border-gray-300 rounded-l px-4 py-2 w-full"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800">Join</button>
          </div>
          <p className="text-xs text-gray-500 mt-2 w-fit">
            By subscribing, you agree to our <Link href="/privacy-policy" className="underline">Privacy Policy</Link> and consent to receive updates.
          </p>
        </div>

        {/* Quick Links */}
        <div className='lg:w-fit lg:m-auto'>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/service">Service</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className='lg:w-fit lg:m-auto'>
          <h4 className="font-semibold mb-4">Contact us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <Image src="/facebook.svg" alt="Facebook" width={16} height={16} />
              <span>Facebook</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image src="/instagram.svg" alt="Instagram" width={16} height={16} />
              <span>Instagram</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image src="/twitter.svg" alt="Twitter" width={16} height={16} />
              <span>Twitter</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image src="/linkedin.svg" alt="LinkedIn" width={16} height={16} />
              <span>LinkedIn</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image src="/youtube.svg" alt="YouTube" width={16} height={16} />
              <span>YouTube</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="sm:bg-red-50 text-[14px] py-4 w-fit m-auto px-[40px] lg:px-[300px] rounded-[11px] lg:gap-[100px] flex flex-col md:flex-row justify-between items-center ">
        <p className='font-medium text-black leading-relaxed tracking-wider' >© 2025 Digital Guardians. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="text-red-500 hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="text-red-500 hover:underline">Terms of Use</Link>
          <Link href="/cookies" className="text-red-500 hover:underline">Cookie Policy</Link>
        </div>
      </div>
      <div className='p-10' ></div>
    </footer>
  )
}
