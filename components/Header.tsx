'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useAuthStore } from '@/stores/auth-store';

const ABOUT_SUBMENU = [
  { href: '/about-company', label: 'Company' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/clients', label: 'Clients' },
  { href: '/verify', label: 'Verify' },
];

const NAV_LINKS = [
  { href: '/events', label: 'EVENTS' },
  { href: '/store/category', label: 'STORE' },
  { href: '/register', label: 'REGISTRATION' },
  { href: '/feeds', label: 'FEEDS' },
];

export default function Header() {
  const { isLoggedIn, displayName, logout } = useAuthStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="bg-black border-b border-[#111111] w-full fixed top-0 z-50">
      <div className="max-w-[960px] mx-auto px-[15px] h-[70px] flex justify-between items-center w-full">

        <div className="flex-shrink-0 cursor-pointer">
          <Link href="/">
            <Image
              src="https://bunny.eternalorganizer.com/wp-content/uploads/2019/11/logo2.png"
              alt="Eternal Logo"
              width={140}
              height={35}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          <ul className="font-dodger flex items-center list-none m-0 p-0 space-x-[30px] lg:space-x-[40px] text-[10px] tracking-[0.2em]">
            {/* About with dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="text-[#878787] hover:text-white transition-colors duration-300 flex items-center space-x-1.5">
                ABOUT <span className="text-[7px] mt-[1px] font-sans">▼</span>
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-1 bg-black border border-[#222] rounded shadow-xl min-w-[140px] py-1 z-50">
                  {ABOUT_SUBMENU.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2 text-[10px] text-[#878787] hover:text-white hover:bg-[#1a1a1a] transition-colors tracking-[0.15em]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-[#878787] hover:text-white transition-colors duration-300">
                  {label}
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
        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-black border-t border-[#111] px-4 pb-4">
          <ul className="font-dodger flex flex-col gap-3 text-[11px] tracking-[0.2em] pt-3">
            <li>
              <span className="text-[#878787] block py-1 mb-1">ABOUT</span>
              <div className="pl-4 flex flex-col gap-2">
                {ABOUT_SUBMENU.map(({ href, label }) => (
                  <Link key={href} href={href} className="text-[#666] hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
                    {label}
                  </Link>
                ))}
              </div>
            </li>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-[#878787] hover:text-white transition-colors block py-1" onClick={() => setMobileOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
            <li className="border-t border-[#222] pt-3">
              {isLoggedIn ? (
                <div className="flex flex-col gap-2">
                  <Link href="/profile" className="text-[#669933]" onClick={() => setMobileOpen(false)}>{displayName || 'Profile'}</Link>
                  <button onClick={() => { logout(); setMobileOpen(false); }} className="text-[#878787] text-left">LOG OUT</button>
                </div>
              ) : (
                <Link href="/login" className="text-[#878787] hover:text-white" onClick={() => setMobileOpen(false)}>LOG IN</Link>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
