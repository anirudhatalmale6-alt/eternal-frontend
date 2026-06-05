import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808] pt-[25px] pb-[25px] border-t border-[#111]">
      <div className="max-w-[960px] mx-auto p-[15px] text-center flex flex-col items-center">

        <a href="https://www.eternalorganizer.com" target="_blank" rel="noopener noreferrer" className="mb-2 hover:opacity-80 transition-opacity">
          <Image
            src="https://bunny.eternalorganizer.com/wp-content/uploads/2025/06/ecreative-7.png"
            alt="Eternal Logo"
            width={36}
            height={36}
          />
        </a>

        <div className="text-[#666] text-[10px] leading-relaxed mb-1 font-sans">
          Eternal Creative Networks &copy; {new Date().getFullYear()} All right Reserved.<br />
          All trademarks are property of their respective owners in the US and other countries.
        </div>

        <div className="text-[#666] text-[10px] font-sans flex flex-wrap justify-center items-center gap-x-1 mt-1.5">
          <Link href="https://status.eternalorganizer.com/" className="hover:text-white transition-colors">Status</Link>
          <span className="text-[#333]">|</span>
          <Link href="/redeem" className="hover:text-white transition-colors">Redeem</Link>
          <span className="text-[#333]">|</span>
          <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
          <span className="text-[#333]">|</span>
          <Link href="/term-conditions" className="hover:text-white transition-colors">Term &amp; Conditions</Link>
          <span className="text-[#333]">|</span>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span className="text-[#333]">|</span>
          <Link href="/advertise" className="hover:text-white transition-colors">Advertise</Link>
          <span className="text-[#333]">|</span>
          <Link href="https://docs.eternalorganizer.com/" className="hover:text-white transition-colors">Whitepaper</Link>
          <span className="text-[#333]">|</span>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          <span className="text-[#333]">|</span>
          <Link href="/memberships" className="hover:text-white transition-colors">Partnership</Link>
        </div>

      </div>
    </footer>
  );
}
