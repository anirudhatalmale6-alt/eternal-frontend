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
    // WP API not reachable yet - show placeholder
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans">

      {/* Categories */}
      <div className="max-w-4xl mx-auto mt-8 mb-10 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/category/esports" className="group flex flex-col items-center justify-center p-5 bg-gradient-to-br from-[#1e1e1e] to-[#141414] border border-white/5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#1a1a1a] hover:border-[#990000] shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(153,0,0,0.2)]">
            <Gamepad2 className="w-8 h-8 text-[#878787] mb-2 group-hover:text-[#ff3333] transition-colors" />
            <span className="text-xs font-semibold tracking-wide text-[#878787] uppercase group-hover:text-white transition-colors">eSports</span>
          </Link>
          <Link href="/category/automotive" className="group flex flex-col items-center justify-center p-5 bg-gradient-to-br from-[#1e1e1e] to-[#141414] border border-white/5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#1a1a1a] hover:border-[#990000] shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(153,0,0,0.2)]">
            <Car className="w-8 h-8 text-[#878787] mb-2 group-hover:text-[#ff3333] transition-colors" />
            <span className="text-xs font-semibold tracking-wide text-[#878787] uppercase group-hover:text-white transition-colors">Automotive</span>
          </Link>
          <Link href="/category/technology" className="group flex flex-col items-center justify-center p-5 bg-gradient-to-br from-[#1e1e1e] to-[#141414] border border-white/5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#1a1a1a] hover:border-[#990000] shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(153,0,0,0.2)]">
            <Cpu className="w-8 h-8 text-[#878787] mb-2 group-hover:text-[#ff3333] transition-colors" />
            <span className="text-xs font-semibold tracking-wide text-[#878787] uppercase group-hover:text-white transition-colors">Technology</span>
          </Link>
          <Link href="/categories" className="group flex flex-col items-center justify-center p-5 bg-gradient-to-br from-[#1e1e1e] to-[#141414] border border-white/5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#1a1a1a] hover:border-[#990000] shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(153,0,0,0.2)]">
            <MoreHorizontal className="w-8 h-8 text-[#878787] mb-2 group-hover:text-[#ff3333] transition-colors" />
            <span className="text-xs font-semibold tracking-wide text-[#878787] uppercase group-hover:text-white transition-colors">More</span>
          </Link>
        </div>
      </div>

      {/* Main Layout (2 columns) */}
      <div className="max-w-[1200px] mx-auto px-4 pb-12 flex flex-col lg:flex-row gap-6">

        {/* Main Content */}
        <div className="w-full lg:w-[75%] flex flex-col gap-6">

          {/* VIP Banner */}
          <Link href="/membership" className="block w-full">
            <div className="w-full h-[100px] bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-md flex items-center justify-center text-black font-bold text-2xl shadow-lg border border-yellow-300 hover:opacity-90 transition">
              JOIN ETERNAL VIP
            </div>
          </Link>

          {/* Eternal Entertainment */}
          <div className="bg-[#050505] border-x border-b border-[#222] rounded overflow-hidden">
            <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 py-2 border-b-2 border-red-950">
              <h2 className="text-center text-white font-serif tracking-wider">Eternal Entertainment</h2>
            </div>

            <div className="p-4 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8 border-b border-gray-800">
                <div className="w-32 h-40 bg-black border border-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">Character Card</span>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-2 italic tracking-widest">PLAY</h1>
                  <p className="text-sm text-gray-300 font-bold uppercase">Get The Access Now</p>
                  <Link href="/license" className="text-xs text-blue-400 hover:underline">
                    https://www.eternalorganizer.com/license
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-video bg-[#111] border border-purple-900 rounded-md flex items-center justify-center relative overflow-hidden">
                  <span className="text-purple-400 font-bold">Cearlyn Banner</span>
                </div>
                <div className="grid grid-rows-2 gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black border border-orange-900 rounded-md flex items-center justify-center p-2 text-xs text-center">Eternal Jump</div>
                    <div className="bg-black border border-red-900 rounded-md flex items-center justify-center p-2 text-xs text-center">Eternal Leap</div>
                  </div>
                  <div className="bg-black border border-gray-800 rounded-md flex items-center justify-center p-2 text-sm text-center font-bold">ETERNAL FLY</div>
                </div>
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-4 border-b border-red-900 pb-2">Latest News</h3>
            {posts.length > 0 ? (
              <div className="flex flex-col gap-6">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="bg-[#111] border border-gray-800 p-4 rounded-md mb-4 hover:border-red-900 transition-colors">
                <h4 className="text-lg font-bold text-red-500 mb-1">Judul Artikel Contoh</h4>
                <p className="text-xs text-gray-400 mb-3">June 5, 2026 | Author: Admin</p>
                <p className="text-sm text-gray-300">Deskripsi singkat artikel akan muncul di sini menggantikan fungsi the_excerpt()...</p>
              </div>
            )}
          </div>

        </div>

        {/* Sidebar - using actual widget images */}
        <aside className="w-full lg:w-[25%]">
          <Sidebar />
        </aside>

      </div>
    </div>
  );
}
