'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

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

function getWPLoggedInUser(): string | null {
  if (typeof document === 'undefined') return null;
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const trimmed = cookie.trim();
    if (trimmed.startsWith('wordpress_logged_in_')) {
      const value = trimmed.split('=')[1];
      if (value) {
        const username = decodeURIComponent(value.split('%7C')[0] || value.split('|')[0]);
        return username;
      }
    }
  }
  return null;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [wpUser, setWpUser] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setWpUser(getWPLoggedInUser());
  }, []);

  const isActive = (href: string) => pathname.startsWith(href);

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
            <li
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="text-[#878787] hover:text-white transition-colors duration-300 flex items-center space-x-1.5">
                ABOUT <span className="text-[7px] mt-[1px] font-sans">&#9660;</span>
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-1 bg-[#111] border border-[#2a2a2a] rounded-md shadow-xl min-w-[140px] py-1 z-50">
                  {ABOUT_SUBMENU.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-3 py-2 text-[10px] text-[#c9c9c9] hover:text-white hover:bg-white/5 transition-colors tracking-[0.1em]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition-colors duration-300 px-2 py-1 ${
                    isActive(href)
                      ? 'text-white border border-white/30 rounded-sm'
                      : 'text-[#878787] hover:text-white border border-transparent'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              {wpUser ? (
                <span className="flex items-center gap-3">
                  <a href="/user/" className="text-[#669933] hover:text-white transition-colors duration-300">
                    {wpUser}
                  </a>
                  <a href="/logout/" className="text-[#878787] hover:text-white transition-colors duration-300">
                    LOG OUT
                  </a>
                </span>
              ) : (
                <a href="/login" className="text-[#878787] hover:text-white transition-colors duration-300">
                  LOG IN
                </a>
              )}
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-black/60 z-[9998]" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile Nav - matches WordPress side panel menu */}
      <nav className={`md:hidden fixed top-0 right-0 w-[260px] h-full bg-[#211f21] z-[9999] pt-[70px] overflow-y-auto shadow-[-18px_0_40px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a href="/about-company" className="block text-left text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333] transition-colors" onClick={() => setMobileOpen(false)}>
          About
        </a>
        <a href="/store/category" className="block text-left text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333] transition-colors" onClick={() => setMobileOpen(false)}>
          Store
        </a>
        <a href="/user/" className="block text-left text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333] transition-colors" onClick={() => setMobileOpen(false)}>
          Profile
        </a>
        <a href="/verify/" className="block text-left text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333] transition-colors" onClick={() => setMobileOpen(false)}>
          Verify
        </a>
        <a href="/top-up/" className="block text-left text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333] transition-colors" onClick={() => setMobileOpen(false)}>
          Top-Up
        </a>
        {wpUser ? (
          <a href="/logout/" className="block text-left text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333] transition-colors" onClick={() => setMobileOpen(false)}>
            Log Out
          </a>
        ) : (
          <a href="/login" className="block text-left text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333] transition-colors" onClick={() => setMobileOpen(false)}>
            Account
          </a>
        )}
      </nav>
    </header>
  );
}
