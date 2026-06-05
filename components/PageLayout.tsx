import Sidebar from '@/components/Sidebar';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <div className="max-w-[960px] mx-auto px-4 py-8 flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[73%] min-w-0">
          {children}
        </div>
        <aside className="w-full lg:w-[27%] flex-shrink-0">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
