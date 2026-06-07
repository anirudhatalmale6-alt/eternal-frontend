import Image from "next/image";
import Link from "next/link";

const widgetClass = "border border-white/[0.08] rounded-[10px] p-[12px] mb-[2px]";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-[20px] w-full">

      {/* 1. Sync Metamask */}
      <Link
        href="https://www.eternalorganizer.com/sync-metamask/"
        className={`relative w-full aspect-[300/118] block hover:opacity-80 transition-opacity rounded-[10px] overflow-hidden ${widgetClass}`}
      >
        <Image
          src="https://bunny.eternalorganizer.com/wp-content/uploads/2024/10/syncmeta-300x118.png"
          alt="Sync Metamask"
          fill
          sizes="(max-width: 1024px) 100vw, 300px"
          className="object-cover"
        />
      </Link>

      {/* 2. Play Optimize */}
      <Link
        href="https://www.eternalorganizer.com/"
        className={`relative w-full aspect-[300/97] block hover:opacity-80 transition-opacity rounded-[10px] overflow-hidden ${widgetClass}`}
      >
        <Image
          src="https://bunny.eternalorganizer.com/wp-content/uploads/2020/05/playoptimize.jpg"
          alt="Eternal Play Networks"
          fill
          sizes="(max-width: 1024px) 100vw, 300px"
          className="object-cover"
        />
      </Link>

      {/* 3. VIP Optimize */}
      <Link
        href="https://www.eternalorganizer.com/dashboards/"
        className={`relative w-full aspect-[300/97] block hover:opacity-80 transition-opacity rounded-[10px] overflow-hidden ${widgetClass}`}
      >
        <Image
          src="https://bunny.eternalorganizer.com/wp-content/uploads/2020/05/vipoptimize.jpg"
          alt="VIP"
          fill
          sizes="(max-width: 1024px) 100vw, 300px"
          className="object-cover"
        />
      </Link>

      {/* 4. Cart Optimize */}
      <Link
        href="https://www.eternalorganizer.com/cart/"
        className={`relative w-full aspect-[300/97] block hover:opacity-80 transition-opacity rounded-[10px] overflow-hidden ${widgetClass}`}
      >
        <Image
          src="https://bunny.eternalorganizer.com/wp-content/uploads/2020/05/cartoptimize.jpg"
          alt="Cart"
          fill
          sizes="(max-width: 1024px) 100vw, 300px"
          className="object-cover"
        />
      </Link>

      {/* 5. Top Up */}
      <Link
        href="https://www.eternalorganizer.com/top-up/"
        className={`relative w-full aspect-[300/97] block hover:opacity-80 transition-opacity rounded-[10px] overflow-hidden ${widgetClass}`}
      >
        <Image
          src="https://bunny.eternalorganizer.com/wp-content/uploads/2020/05/topupoptimize.jpg"
          alt="Top Up"
          fill
          sizes="(max-width: 1024px) 100vw, 300px"
          className="object-cover"
        />
      </Link>

      {/* 6. Search Form */}
      <form
        action="https://www.eternalorganizer.com/"
        method="get"
        className="flex items-center w-full bg-black border border-gray-800 rounded overflow-hidden h-[40px]"
      >
        <input
          type="text"
          name="s"
          placeholder="Search..."
          className="w-full h-full bg-transparent text-gray-300 text-sm px-3 focus:outline-none"
        />
        <button
          type="submit"
          className="p-3 bg-gray-900 hover:bg-gray-800 transition-colors h-full flex items-center justify-center relative w-[40px]"
        >
          <Image
            src="https://bunny.eternalorganizer.com/wp-content/uploads/2016/11/magnifier.png"
            alt="Search"
            fill
            className="object-contain p-2 opacity-70"
          />
        </button>
      </form>

      {/* 7. Advertisement Label */}
      <div className="bg-[#111] border border-gray-900 py-1 text-center italic text-xs text-gray-500 font-bold tracking-wider rounded">
        Advertisement
      </div>

      {/* 8. Jump Game (Banner Vertical) */}
      <Link
        href="https://www.eternalorganizer.com/jumpgame"
        className={`relative w-full aspect-[222/515] block hover:opacity-80 transition-opacity rounded-[10px] overflow-hidden ${widgetClass}`}
      >
        <Image
          src="https://bunny.eternalorganizer.com/wp-content/uploads/2024/09/boardlanrete-jpg.avif"
          alt="Jump Game"
          fill
          sizes="(max-width: 1024px) 100vw, 300px"
          className="object-cover"
        />
      </Link>

      {/* 9. License VIP */}
      <Link
        href="https://www.eternalorganizer.com/license"
        className={`relative w-full aspect-square block hover:opacity-80 transition-opacity rounded-[10px] overflow-hidden ${widgetClass}`}
      >
        <Image
          src="https://bunny.eternalorganizer.com/wp-content/uploads/2021/04/vipmedia.jpg.webp"
          alt="Join VIP"
          fill
          sizes="(max-width: 1024px) 100vw, 300px"
          className="object-cover"
        />
      </Link>

      {/* 10. Learn */}
      <Link
        href="https://www.eternalorganizer.com/learn"
        className={`relative w-full aspect-[300/97] block hover:opacity-80 transition-opacity rounded-[10px] overflow-hidden ${widgetClass}`}
      >
        <Image
          src="https://bunny.eternalorganizer.com/wp-content/uploads/2019/02/learn-1.jpg"
          alt="Learn"
          fill
          sizes="(max-width: 1024px) 100vw, 300px"
          className="object-cover"
        />
      </Link>
    </aside>
  );
}