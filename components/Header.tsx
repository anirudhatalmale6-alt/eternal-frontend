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
      {/* Desktop Header - matches .eo-header-desktop */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-[10000] bg-[#0D0D0D] shadow-[0_2px_5px_rgba(0,0,0,0.5)] h-[85px] overflow-visible">
        <div className="max-w-[1170px] mx-auto px-[15px] grid grid-cols-[180px_1fr] items-center min-h-[85px] overflow-visible">

          {/* Logo - matches .eo-header-desktop .head */}
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

          {/* Nav - matches .eo-header-desktop .head-menu */}
          <nav className="ml-auto relative z-[10002] overflow-visible">
            <ul className="list-none m-0 p-0 flex items-center">
              {/* About with dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="font-dodger text-[11px] tracking-[0.12em] text-[#878787] hover:text-white transition-colors whitespace-nowrap flex items-center px-[10px] py-[10px]">
                  ABOUT <span className="text-[8px] ml-1 font-sans">&#9660;</span>
                </button>
                {aboutOpen && (
                  <div className="absolute top-full left-0 min-w-[180px] bg-[#111] border border-[#2a2a2a] rounded-md py-2 z-[10003]">
                    {ABOUT_SUBMENU.map(({ href, label }) => (
                      <a
                        key={href}
                        href={href}
                        className="block px-3 py-2 text-[11px] text-[#c9c9c9] hover:text-white hover:bg-white/[0.06] tracking-normal"
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
                    className={`font-dodger text-[11px] tracking-[0.12em] whitespace-nowrap px-[10px] py-[10px] transition-colors ${
                      isActive(href) ? 'text-white' : 'text-[#878787] hover:text-white'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}

              <li>
                {wpUser ? (
                  <span className="flex items-center">
                    <a href="/user/" className="font-dodger text-[11px] tracking-[0.12em] text-[#669933] hover:text-white px-[10px] py-[10px] whitespace-nowrap">
                      {wpUser}
                    </a>
                    <a href="/logout/" className="font-dodger text-[11px] tracking-[0.12em] text-[#878787] hover:text-white px-[10px] py-[10px] whitespace-nowrap">
                      LOG OUT
                    </a>
                  </span>
                ) : (
                  <a href="/login" className="font-dodger text-[11px] tracking-[0.12em] text-[#878787] hover:text-white px-[10px] py-[10px] whitespace-nowrap">
                    LOG IN
                  </a>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Header line - matches .eo-header-line */}
      <div className="hidden md:block fixed top-[85px] left-0 right-0 h-[2px] bg-[#383737] shadow-[0_1px_0_#2a2a2a] pointer-events-none z-[9990]" />

      {/* Mobile Header - matches .header .hdr1 */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-[2147483600] bg-[#0D0D0D]">
        <div className="flex justify-between items-center px-4 py-3">
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
          <div
            className="text-white text-2xl cursor-pointer px-2 relative z-[2147483601]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? '✕' : '☰'}
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-[2147483400]"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile side panel - matches #myTopnav.topnav */}
      <nav className={`md:hidden fixed top-0 right-0 w-[260px] h-screen pt-[70px] overflow-y-auto z-[2147483500] shadow-[-18px_0_40px_rgba(0,0,0,0.55)] bg-[#211f21] transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a href="/about-company/" onClick={() => setMobileOpen(false)} className="block text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333]">About</a>
        <a href="/store/category/" onClick={() => setMobileOpen(false)} className="block text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333]">Store</a>
        <a href="/user/" onClick={() => setMobileOpen(false)} className="block text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333]">Profile</a>
        <a href="/verify/" onClick={() => setMobileOpen(false)} className="block text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333]">Verify</a>
        <a href="/top-up/" onClick={() => setMobileOpen(false)} className="block text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333]">Top-Up</a>
        {wpUser ? (
          <a href="/logout/" onClick={() => setMobileOpen(false)} className="block text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333]">Log Out</a>
        ) : (
          <a href="/login" onClick={() => setMobileOpen(false)} className="block text-white text-center px-4 py-[14px] text-[11px] font-dodger tracking-[0.12em] bg-[#211f21] hover:bg-[#333]">Account</a>
        )}
      </nav>
    </>
  );
}
