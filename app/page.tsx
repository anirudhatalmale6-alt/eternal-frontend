import Image from 'next/image';
import Link from 'next/link';
import { Gamepad2, MoreHorizontal, Cpu, Car, Play } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import { getPosts, type PostsResult } from '@/lib/wordpress';

interface HomeProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1', 10);
  let result: PostsResult = { posts: [], totalPages: 1, total: 0 };
  try {
    result = await getPosts(currentPage, 5);
  } catch {
    // WP API not reachable yet
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans">

      {/* Categories */}
      <div className="max-w-[960px] mx-auto mt-8 mb-8 px-4">
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
      <div className="max-w-[960px] mx-auto px-4 pb-12 flex flex-col lg:flex-row gap-5">

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
              <h2 className="text-center text-white font-serif tracking-[0.15em] text-sm italic">Eternal Entertainment</h2>
            </div>

            <div className="p-4">
              {/* Video + Play Access */}
              <div className="mb-4">
                <video
                  controls
                  preload="metadata"
                  poster="https://bunny.eternalorganizer.com/wp-content/uploads/2020/08/eternaljump.jpg"
                  className="w-full rounded border border-gray-800"
                >
                  <source src="https://bunny.eternalorganizer.com/videos/etnaground.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Cearlyn Banner */}
              <div className="mb-4">
                <Link href="/cearlyn" className="relative block w-full aspect-[16/9] rounded overflow-hidden group border border-purple-900/30">
                  <Image
                    src="https://bunny.eternalorganizer.com/wp-content/uploads/2024/06/covercearlynweb.jpg"
                    alt="Cearlyn - Princess into an Eternal World"
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-dodger text-2xl text-white/90 tracking-wider drop-shadow-lg">CEARLYN</span>
                    <p className="text-[10px] text-gray-300 italic mt-0.5">Princess into an Eternal World</p>
                  </div>
                </Link>
              </div>

              {/* Game Cards - 3 columns with play buttons */}
              <div className="grid grid-cols-3 gap-3">
                {/* Eternal Jump */}
                <Link href="/jumpgame" className="relative aspect-[3/4] rounded overflow-hidden group border border-orange-900/30">
                  <Image
                    src="https://bunny.eternalorganizer.com/wp-content/uploads/2024/11/ejumpsky.png"
                    alt="Eternal Jump"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, 250px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="font-dodger text-[10px] text-white tracking-wider uppercase drop-shadow">Eternal Jump</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </Link>

                {/* Eternal Leap */}
                <Link href="/leapgame" className="relative aspect-[3/4] rounded overflow-hidden group border border-red-900/30">
                  <Image
                    src="https://bunny.eternalorganizer.com/wp-content/uploads/2020/07/leapcoverz.jpg.webp"
                    alt="Eternal Leap"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, 250px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="font-dodger text-[10px] text-white tracking-wider uppercase drop-shadow">Eternal Leap</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </Link>

                {/* Eternal Fly */}
                <Link href="/flygame" className="relative aspect-[3/4] rounded overflow-hidden group border border-gray-700/30">
                  <Image
                    src="https://bunny.eternalorganizer.com/wp-content/uploads/2024/11/flysky.png"
                    alt="Eternal Fly"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, 250px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="font-dodger text-[10px] text-white tracking-wider uppercase drop-shadow">Eternal Fly</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Welcome to Etnaverse */}
          <div className="bg-gradient-to-r from-[#4a0000] via-[#8b0000] to-[#4a0000] py-3 rounded border border-red-950/50 text-center">
            <span className="font-dodger text-sm text-white tracking-[0.2em] uppercase">Welcome to Etnaverse Playgrounds</span>
          </div>

          {/* Latest News */}
          <div className="mt-2">
            <h3 className="font-dodger text-sm tracking-[0.15em] text-white mb-4 border-b border-[#570000] pb-2 uppercase">Latest News</h3>
            {result.posts.length > 0 ? (
              <div className="flex flex-col gap-5">
                {result.posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
                <Pagination currentPage={currentPage} totalPages={result.totalPages} basePath="/" />
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
