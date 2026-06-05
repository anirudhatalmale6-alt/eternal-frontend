import Image from 'next/image';
import Link from 'next/link';
import { Gamepad2, MoreHorizontal, Cpu, Car } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import PostCard from '@/components/PostCard';
import { getPosts } from '@/lib/wordpress';

export default async function Home() {
  let posts: Awaited<ReturnType<typeof getPosts>> = [];
  try {
    posts = await getPosts(1, 5);
  } catch {
    // WP API not reachable yet
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans">

      {/* Categories */}
      <div className="max-w-[1200px] mx-auto mt-8 mb-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: '/category/esports', icon: Gamepad2, label: 'eSports' },
            { href: '/category/automotive', icon: Car, label: 'Automotive' },
            { href: '/category/technology', icon: Cpu, label: 'Technology' },
            { href: '/categories', icon: MoreHorizontal, label: 'More' },
          ].map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              className="group flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-[#990000]/60 shadow-[0_2px_10px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_20px_rgba(153,0,0,0.15)]"
            >
              <Icon className="w-7 h-7 text-[#666] mb-1.5 group-hover:text-[#ff3333] transition-colors" />
              <span className="text-[10px] font-semibold tracking-wider text-[#666] uppercase group-hover:text-white transition-colors">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-[1200px] mx-auto px-4 pb-12 flex flex-col lg:flex-row gap-5">

        {/* Main Content */}
        <div className="w-full lg:w-[73%] flex flex-col gap-5">

          {/* VIP Banner */}
          <Link href="/membership" className="block w-full group">
            <div className="relative w-full h-[80px] bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 rounded overflow-hidden flex items-center justify-center shadow-lg border border-yellow-600/50 group-hover:brightness-110 transition">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGwyMCAyME0yMCAwTDAgMjAiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2EpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-30" />
              <span className="font-dodger text-black text-xl tracking-[0.3em] drop-shadow-sm relative z-10">JOIN ETERNAL VIP</span>
            </div>
          </Link>

          {/* Eternal Entertainment */}
          <div className="bg-[#080808] border border-[#1a1a1a] rounded overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-[#4a0000] via-[#8b0000] to-[#4a0000] py-2.5 border-b border-red-950/50">
              <h2 className="text-center text-white font-serif tracking-[0.15em] text-sm">Eternal Entertainment</h2>
            </div>

            <div className="p-5">
              {/* Play Access Section */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6 mb-5 border-b border-gray-800/50">
                <div className="relative w-[130px] h-[170px] rounded-lg overflow-hidden border border-gray-700/50 shadow-[0_0_20px_rgba(153,0,0,0.2)]">
                  <Image
                    src="https://bunny.eternalorganizer.com/wp-content/uploads/2024/10/syncmeta-300x118.png"
                    alt="Character Card"
                    fill
                    className="object-cover"
                    sizes="130px"
                  />
                </div>
                <div className="text-center">
                  <h1 className="font-dodger text-5xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 mb-3 tracking-[0.15em]">PLAY</h1>
                  <p className="text-xs text-gray-300 font-bold uppercase tracking-widest mb-1">Get The Access Now</p>
                  <Link href="/license" className="text-[10px] text-blue-400/80 hover:text-blue-300 transition-colors">
                    https://www.eternalorganizer.com/license
                  </Link>
                </div>
              </div>

              {/* Games Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Cearlyn Banner */}
                <Link href="/cearlyn" className="relative aspect-video rounded overflow-hidden group border border-purple-900/30 shadow-lg">
                  <Image
                    src="https://bunny.eternalorganizer.com/wp-content/uploads/2021/04/vipmedia.jpg.webp"
                    alt="Cearlyn Banner"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 font-dodger text-sm text-white/90 tracking-wider">CEARLYN</span>
                </Link>

                {/* Game Cards */}
                <div className="grid grid-rows-2 gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/jumpgame" className="relative rounded overflow-hidden group border border-orange-900/30">
                      <Image
                        src="https://bunny.eternalorganizer.com/wp-content/uploads/2020/05/playoptimize.jpg"
                        alt="Eternal Jump"
                        width={200}
                        height={100}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="font-dodger text-[10px] text-white/90 tracking-wider uppercase">Eternal Jump</span>
                      </div>
                    </Link>
                    <Link href="/leapgame" className="relative rounded overflow-hidden group border border-red-900/30">
                      <Image
                        src="https://bunny.eternalorganizer.com/wp-content/uploads/2020/05/vipoptimize.jpg"
                        alt="Eternal Leap"
                        width={200}
                        height={100}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="font-dodger text-[10px] text-white/90 tracking-wider uppercase">Eternal Leap</span>
                      </div>
                    </Link>
                  </div>
                  <Link href="/flygame" className="relative rounded overflow-hidden group border border-gray-800">
                    <Image
                      src="https://bunny.eternalorganizer.com/wp-content/uploads/2020/05/cartoptimize.jpg"
                      alt="Eternal Fly"
                      width={400}
                      height={100}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="font-dodger text-sm text-white/90 tracking-[0.2em] uppercase">Eternal Fly</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div className="mt-2">
            <h3 className="font-dodger text-sm tracking-[0.15em] text-white mb-4 border-b border-[#570000] pb-2 uppercase">Latest News</h3>
            {posts.length > 0 ? (
              <div className="flex flex-col gap-5">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <>
                {[1, 2, 3].map((i) => (
                  <article key={i} className="bg-[#0a0a0a] border border-gray-800/50 rounded overflow-hidden mb-4 hover:border-[#570000]/50 transition-colors group">
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-base font-bold text-white group-hover:text-red-500 transition-colors">Sample Article Title {i}</h4>
                        <span className="text-[10px] text-gray-500 flex-shrink-0 ml-3">June 5, 2026</span>
                      </div>
                      <p className="text-[10px] text-gray-500 mb-2">Author: Admin</p>
                      <p className="text-xs text-gray-400 leading-relaxed">Article excerpt will appear here once the WordPress API connection is established...</p>
                      <div className="mt-3 text-right">
                        <span className="text-[10px] text-gray-500 border border-gray-700 px-3 py-1 inline-block hover:border-[#570000] hover:text-white transition-colors cursor-pointer">Read More</span>
                      </div>
                    </div>
                  </article>
                ))}
              </>
            )}
          </div>

        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[27%]">
          <Sidebar />
        </aside>

      </div>
    </div>
  );
}
