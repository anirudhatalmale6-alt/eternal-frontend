import Image from 'next/image';

export default function Footer() {
  return (
    <div className="w-full bg-[#0D0D0D] pt-[30px] pb-[30px]">
      <div className="max-w-[1200px] mx-auto p-[20px] text-center">
        <div>
          <a href="https://www.eternalorganizer.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://bunny.eternalorganizer.com/wp-content/uploads/2025/06/ecreative-7.png"
              alt="Eternal Logo"
              width={44}
              height={44}
              className="mx-auto mb-1"
            />
          </a>
          <br />
          <span className="text-[#878787] text-[13px]">
            Eternal Creative Networks &copy; {new Date().getFullYear()} All right Reserved.
          </span>
          <br />
          <span className="text-[#878787] text-[13px]">
            All trademarks are property of their respective owners in the US and other countries.
          </span>
          <br />
          <div className="py-[10px]">
            <a href="https://status.eternalorganizer.com/" className="text-white text-[13px] hover:text-[#fcfcfc] no-underline">Status</a>
            {' | '}
            <a href="/redeem/" className="text-white text-[13px] hover:text-[#fcfcfc] no-underline">Redeem</a>
            {' | '}
            <a href="/careers/" className="text-white text-[13px] hover:text-[#fcfcfc] no-underline">Careers</a>
            {' | '}
            <a href="/term-conditions/" className="text-white text-[13px] hover:text-[#fcfcfc] no-underline">Term &amp; Conditions</a>
            {' | '}
            <a href="/privacy-policy/" className="text-white text-[13px] hover:text-[#fcfcfc] no-underline">Privacy Policy</a>
            {' | '}
            <a href="/advertise/" className="text-white text-[13px] hover:text-[#fcfcfc] no-underline">Advertise</a>
            {' | '}
            <a href="https://docs.eternalorganizer.com/" className="text-white text-[13px] hover:text-[#fcfcfc] no-underline">Whitepaper</a>
            {' | '}
            <a href="/contact/" className="text-white text-[13px] hover:text-[#fcfcfc] no-underline">Contact Us</a>
            {' | '}
            <a href="/memberships/" className="text-white text-[13px] hover:text-[#fcfcfc] no-underline">Partnership</a>
          </div>
          <div className="h-[100px] md:h-0" />
        </div>
      </div>
    </div>
  );
}
