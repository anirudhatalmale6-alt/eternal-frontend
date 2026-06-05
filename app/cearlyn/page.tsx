import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Cearlyn | Eternal',
  description: 'Princess Cearlyn - A journey through the realm of Sephiri',
};

export default function CearlynPage() {
  return (
    <PageLayout>
      <div className="text-center">
        <div className="relative w-full aspect-[16/9] mb-6 rounded overflow-hidden">
          <Image
            src="https://bunny.eternalorganizer.com/wp-content/uploads/2024/06/covercearlynweb.jpg"
            alt="Cearlyn - Princess into an Eternal World"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
            priority
          />
        </div>

        <Image
          src="https://bunny.eternalorganizer.com/wp-content/uploads/2024/06/story.png"
          alt="Story"
          width={324}
          height={103}
          className="mx-auto mb-6"
        />

        <div className="max-w-lg mx-auto text-gray-300 text-sm leading-relaxed space-y-4">
          <p>In the realm of Sephiri, Princess Cearlyn discovers a forbidden portal in the journey.</p>
          <p>Princess Cearlyn must navigate this unfamiliar realm, filled with shadow creatures and treacherous landscapes. As she ventures deeper into the darkness, she uncovers fragments of memories forgotten history, revealing secrets that have long been buried.</p>
          <p>Guided by Love of Prince Yonzero and Princess Cearlyn embarks on their adventure to find a way back to her beloved dragon Leapy.</p>
          <p>Let&apos;s join with Cearlyn, Yonzero and Leapy on their extraordinary journey through an epic tale of courage, mystery, and the power of friendship.</p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="bg-[#111] border border-purple-900/30 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">👸</div>
            <h3 className="font-dodger text-xs text-white tracking-wider">CEARLYN</h3>
            <p className="text-[10px] text-gray-500 mt-1">Princess of Sephiri</p>
          </div>
          <div className="bg-[#111] border border-red-900/30 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">⚔️</div>
            <h3 className="font-dodger text-xs text-white tracking-wider">YONZERO</h3>
            <p className="text-[10px] text-gray-500 mt-1">The Prince</p>
          </div>
          <div className="bg-[#111] border border-green-900/30 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🐉</div>
            <h3 className="font-dodger text-xs text-white tracking-wider">LEAPY</h3>
            <p className="text-[10px] text-gray-500 mt-1">The Dragon</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
