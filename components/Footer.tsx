import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  // Mengikuti styling .afooter2: width 100%, background #0D0D0D, padding-top/bottom 30px
  return (
    <footer className="w-full bg-[#0D0D0D] pt-[30px] pb-[30px]">
      
      {/* Mengikuti styling .footer: max-width 1200px, margin auto, padding 20px */}
      <div className="max-w-[1200px] mx-auto p-[20px] text-center flex flex-col items-center">
        
        {/* ================= Logo ================= */}
        <a href="https://www.eternalorganizer.com" target="_blank" rel="noopener noreferrer" className="mb-2 hover:opacity-80 transition-opacity">
          <Image 
            src="https://bunny.eternalorganizer.com/wp-content/uploads/2025/06/ecreative-7.png" 
            alt="Eternal Logo" 
            width={44} 
            height={44} 
          />
        </a>
        
        {/* ================= Teks Copyright & Trademark ================= */}
        <div className="text-[#878787] text-[18px] leading-relaxed mb-1 font-sans">
          Eternal Creative Networks © {new Date().getFullYear()} All right Reserved.<br />
          All trademarks are property of their respective owners in the US and other countries.
        </div>

        {/* ================= Menu Links ================= */}
        <div className="text-[#878787] text-[18px] font-sans flex flex-wrap justify-center items-center gap-x-1.5 mt-2">
          <Link href="https://status.eternalorganizer.com/" className="hover:text-white transition-colors">Status</Link>
          <span>|</span>
          <Link href="https://www.eternalorganizer.com/redeem/" className="hover:text-white transition-colors">Redeem</Link>
          <span>|</span>
          <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
          <span>|</span>
          <Link href="https://www.eternalorganizer.com/term-conditions/" className="hover:text-white transition-colors">Term & Conditions</Link>
          <span>|</span>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link href="/advertise" className="hover:text-white transition-colors">Advertise</Link>
          <span>|</span>
          <Link href="https://docs.eternalorganizer.com/" className="hover:text-white transition-colors">Whitepaper</Link>
          <span>|</span>
          <Link href="https://www.eternalorganizer.com/contact/" className="hover:text-white transition-colors">Contact Us</Link>
          <span>|</span>
          <Link href="https://www.eternalorganizer.com/memberships/" className="hover:text-white transition-colors">Partnership</Link>
        </div>
        
      </div>
    </footer>
  );
}