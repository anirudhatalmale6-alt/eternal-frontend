import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black border-b border-[#111111] w-full">
      <div className="max-w-[1170px] mx-auto px-[15px] h-[85px] flex justify-between items-center w-full">
        
        {/* ================= Bagian Logo Kiri ================= */}
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

        {/* ================= Bagian Navigasi Kanan ================= */}
        <nav>
          {/* Class font-dodger dipasang. Bentuk 'n' adalah wujud asli huruf kapital 'N' dari font ini */}
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
              <Link 
                href="/feeds" 
                className="text-[#878787] hover:text-white transition-colors duration-300"
              >
                FEEDS
              </Link>
            </li>

          </ul>
        </nav>
        
      </div>
    </header>
  );
}