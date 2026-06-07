'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ABOUT_SUBMENU = [
  { href: '/about-company/', label: 'Company' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/clients/', label: 'Clients' },
  { href: '/verify/', label: 'Verify' },
];

const NAV_LINKS = [
  { href: '/events/', label: 'EVENTS' },
  { href: '/store/category/', label: 'STORE' },
  { href: '/register/', label: 'REGISTRATION' },
  { href: '/feeds/', label: 'FEEDS' },
];

function getWPLoggedInUser(): string | null {
  if (typeof document === 'undefined') return null;
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const trimmed = cookie.trim();
    if (trimmed.startsWith('wordpress_logged_in_')) {
      const value = trimmed.split('=')[1];
      if (value) {
        return decodeURIComponent(value.split('%7C')[0] || value.split('|')[0]);
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

  const isActive = (href: string) => pathname.startsWith(href.replace(/\/$/, ''));

  return (
    <>
      {/* Desktop Header - matches .eo-header-desktop exactly */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-[10000] bg-[#0D0D0D] shadow-[0_2px_5px_rgba(0,0,0,0.5)] h-[85px] overflow-visible">
        <div className="max-w-[1170px] mx-auto px-[15px] grid grid-cols-[180px_1fr] items-center min-h-[85px] overflow-visible">

          {/* Logo */}
          <div className="w-[180px] min-w-[180px] h-[40px] flex items-center leading-none">
            <Link href="/" className="block w-full h-full">
              <Image
                src="https://bunny.eternalorganizer.com/wp-content/uploads/2019/11/logo2.png"
                alt="Eternal Logo"
                width={180}
                height={40}
                priority
                className="block w-full h-full object-contain"
              />
            </Link>
          </div>

          {/* Nav */}
          <nav className="ml-auto relative z-[10002] overflow-visible">
            <ul className="list-none m-0 p-0 flex items-center">
              {/* About with dropdown - same style as other nav items */}
              <li
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <a
                  href="/about-company/"
                  className={`font-dodger text-[11px] uppercase tracking-[0.12em] whitespace-nowrap flex items-center px-[15px] py-[5px] transition-colors border border-transparent rounded-[15px] ${
                    isActive('/about') ? 'text-white border-white/40' : 'text-[#878787] hover:text-white hover:border-white/40'
                  }`}
                >
                  ABOUT <span className="text-[8px] ml-1.5 font-sans">&#9660;</span>
                </a>
                {aboutOpen && (
                  <div className="absolute top-full left-0 min-w-[180px] bg-[#111] border border-[#2a2a2a] rounded-md py-2 z-[10003]">
                    {ABOUT_SUBMENU.map(({ href, label }) => (
                      <a
                        key={href}
                        href={href}
                        className="block px-3 py-2 font-dodger text-[11px] text-[#c9c9c9] hover:text-white hover:bg-white/[0.06] tracking-[0.12em] uppercase border-b border-[#8b0000] last:border-b-0"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </li>

              {NAV_LINKS.map(({ href, label }) => (
                <li key={href} className="relative">
                  <a
                    href={href}
                    className={`font-dodger text-[11px] uppercase tracking-[0.12em] whitespace-nowrap px-[15px] py-[5px] transition-all duration-400 border border-transparent rounded-[15px] inline-block ${
                      isActive(href) ? 'text-white border-white/40' : 'text-[#878787] hover:text-white hover:border-white/40'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}

              <li>
                {wpUser ? (
                  <span className="flex items-center">
                    <a href="/user/" className="font-dodger text-[11px] uppercase tracking-[0.12em] text-[#669933] hover:text-white px-[15px] py-[5px] whitespace-nowrap">
                      {wpUser}
                    </a>
                    <a href="/logout/" className="font-dodger text-[11px] uppercase tracking-[0.12em] text-[#878787] hover:text-white px-[10px] py-[5px] whitespace-nowrap">
                      LOG OUT
                    </a>
                  </span>
                ) : (
                  <a href="/login" className="font-dodger text-[11px] uppercase tracking-[0.12em] text-[#878787] hover:text-white px-[15px] py-[5px] whitespace-nowrap">
                    LOG IN
                  </a>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Header line */}
      <div className="hidden md:block fixed top-[85px] left-0 right-0 h-[2px] bg-[#383737] shadow-[0_1px_0_#2a2a2a] pointer-events-none z-[9990]" />

      {/* Mobile Header - matches WP .header .hdr1 */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-[2147483600] bg-[#0D0D0D]">
        <div className="flex justify-between items-center px-3 py-2">
          <Link href="/">
            <Image
              src="https://bunny.eternalorganizer.com/wp-content/uploads/2019/11/logo2.png"
              alt="Eternal Logo"
              width={110}
              height={28}
              priority
              className="object-contain"
            />
          </Link>
          <div
            className="text-white text-[16px] cursor-pointer px-[8px] py-[4px] relative z-[2147483601] leading-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? '✕' : '☰'}
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/[0.62] z-[2147483400]"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile side panel - matches WP #myTopnav exactly */}
      <nav className={`md:hidden fixed top-0 right-0 w-[260px] h-screen pt-[48px] overflow-y-auto z-[2147483500] shadow-[-18px_0_40px_rgba(0,0,0,0.55)] bg-[#211f21] transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a href="/about-company/" onClick={() => setMobileOpen(false)} className="block text-white text-left px-[16px] py-[14px] text-[11px] font-dodger uppercase tracking-[0.12em] bg-[#211f21] hover:bg-[#ddd] hover:text-black">ABOUT</a>
        <a href="/store/category/" onClick={() => setMobileOpen(false)} className="block text-white text-left px-[16px] py-[14px] text-[11px] font-dodger uppercase tracking-[0.12em] bg-[#211f21] hover:bg-[#ddd] hover:text-black">STORE</a>
        <a href="/user/" onClick={() => setMobileOpen(false)} className="block text-white text-left px-[16px] py-[14px] text-[11px] font-dodger uppercase tracking-[0.12em] bg-[#211f21] hover:bg-[#ddd] hover:text-black">PROFILE</a>
        <a href="/verify/" onClick={() => setMobileOpen(false)} className="block text-white text-left px-[16px] py-[14px] text-[11px] font-dodger uppercase tracking-[0.12em] bg-[#211f21] hover:bg-[#ddd] hover:text-black">VERIFY</a>
        <a href="/top-up/" onClick={() => setMobileOpen(false)} className="block text-white text-left px-[16px] py-[14px] text-[11px] font-dodger uppercase tracking-[0.12em] bg-[#211f21] hover:bg-[#ddd] hover:text-black">TOP-UP</a>
        {wpUser ? (
          <a href="/logout/" onClick={() => setMobileOpen(false)} className="block text-white text-left px-[16px] py-[14px] text-[11px] font-dodger uppercase tracking-[0.12em] bg-[#211f21] hover:bg-[#ddd] hover:text-black">LOG OUT</a>
        ) : (
          <a href="/login" onClick={() => setMobileOpen(false)} className="block text-white text-left px-[16px] py-[14px] text-[11px] font-dodger uppercase tracking-[0.12em] bg-[#211f21] hover:bg-[#ddd] hover:text-black">ACCOUNT</a>
        )}
      </nav>
    </>
  );
}
