'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAuthStore } from '@/stores/auth-store';

export default function Header() {
  const { isLoggedIn, displayName, logout } = useAuthStore();

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

        <nav className="flex items-center gap-6">
          <ul className="font-dodger flex items-center list-none m-0 p-0 space-x-[35px] lg:space-x-[50px] text-[11px] tracking-[0.2em]">
            <li>
              <Link href="/about" className="text-[#878787] hover:text-white transition-colors duration-300 flex items-center space-x-1.5">
                ABOUT <span className="text-[8px] mt-[1px] font-sans">▼</span>
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-[#878787] hover:text-white transition-colors duration-300">
                EVENTS
              </Link>
            </li>
            <li>
              <Link href="/store" className="text-[#878787] hover:text-white transition-colors duration-300">
                STORE
              </Link>
            </li>
            <li>
              <Link href="/registration" className="text-[#878787] hover:text-white transition-colors duration-300">
                REGISTRATION
              </Link>
            </li>
            <li>
              <Link href="/feeds" className="text-[#878787] hover:text-white transition-colors duration-300">
                FEEDS
              </Link>
            </li>
            <li>
              {isLoggedIn ? (
                <span className="flex items-center gap-3">
                  <Link href="/profile" className="text-[#669933] hover:text-white transition-colors duration-300">
                    {displayName || 'Profile'}
                  </Link>
                  <button
                    onClick={logout}
                    className="text-[#878787] hover:text-white transition-colors duration-300"
                  >
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

      </div>
    </header>
  );
}
