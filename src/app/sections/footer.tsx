import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-sm text-black px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Logo + Newsletter */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/globe.png" alt="Digital Guardian Logo" width={24} height={24} />
            <span className="text-[#d12323] font-semibold">Digital Guardian</span>
          </div>
          <p className="mb-2 text-gray-700">Subscribe to our newsletter for the latest updates on features and releases.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email here"
              className="p-2 border border-gray-300 rounded w-full sm:w-auto"
            />
            <button type="submit" className="px-4 py-2 border border-gray-300 rounded">
              Join
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2">
            By subscribing, you agree to our{' '}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>{' '}
            and consent to receive updates.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/service">Service</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
          </ul>
        </div>

        {/* Right: Contact Us */}
        <div>
          <h4 className="font-semibold mb-4">Contact us</h4>
          <ul className="space-y-2 text-gray-700">
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
              <Image src="/linkedIn.svg" alt="LinkedIn" width={16} height={16} />
              <span>LinkedIn</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image src="/youtube.svg" alt="YouTube" width={16} height={16} />
              <span>YouTube</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-200 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600">
        <p>© 2025 Digital Guardians. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
