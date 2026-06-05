'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useAuthStore } from '@/stores/auth-store';

const NAV_LINKS = [
  { href: '/about', label: 'ABOUT', hasDropdown: true },
  { href: '/events', label: 'EVENTS' },
  { href: '/store', label: 'STORE' },
  { href: '/registration', label: 'REGISTRATION' },
  { href: '/feeds', label: 'FEEDS' },
];

export default function Header() {
  const { isLoggedIn, displayName, logout } = useAuthStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-black border-b border-[#111111] w-full fixed top-0 z-50">
      <div className="max-w-[1170px] mx-auto px-[15px] h-[85px] flex justify-between items-center w-full">

        <div className="flex-shrink-0 cursor-pointer">
          <Link href="/">
            <Image
              src="https://bunny.eternalorganizer.com/wp-content/uploads/2019/11/logo2.png"
              alt="Eternal Logo"
              width={160}
              height={40}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="font-dodger flex items-center list-none m-0 p-0 space-x-[35px] lg:space-x-[50px] text-[11px] tracking-[0.2em]">
            {NAV_LINKS.map(({ href, label, hasDropdown }) => (
              <li key={href}>
                <Link href={href} className="text-[#878787] hover:text-white transition-colors duration-300 flex items-center space-x-1.5">
                  {label} {hasDropdown && <span className="text-[8px] mt-[1px] font-sans">▼</span>}
                </Link>
              </li>
            ))}
            <li>
              {isLoggedIn ? (
                <span className="flex items-center gap-3">
                  <Link href="/profile" className="text-[#669933] hover:text-white transition-colors duration-300">
                    {displayName || 'Profile'}
                  </Link>
                  <button onClick={logout} className="text-[#878787] hover:text-white transition-colors duration-300">
                    LOG OUT
                  </button>
                </span>
              ) : (
                <Link href="/login" className="text-[#878787] hover:text-white transition-colors duration-300">
                  LOG IN
                </Link>
              )}
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-black border-t border-[#111] px-4 pb-4">
          <ul className="font-dodger flex flex-col gap-4 text-[12px] tracking-[0.2em] pt-4">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[#878787] hover:text-white transition-colors block py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="border-t border-[#222] pt-3">
              {isLoggedIn ? (
                <div className="flex flex-col gap-2">
                  <Link href="/profile" className="text-[#669933]" onClick={() => setMobileOpen(false)}>
                    {displayName || 'Profile'}
                  </Link>
                  <button onClick={() => { logout(); setMobileOpen(false); }} className="text-[#878787] text-left">
                    LOG OUT
                  </button>
                </div>
              ) : (
                <Link href="/login" className="text-[#878787] hover:text-white" onClick={() => setMobileOpen(false)}>
                  LOG IN
                </Link>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
