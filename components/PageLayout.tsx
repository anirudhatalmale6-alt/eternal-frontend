import Sidebar from '@/components/Sidebar';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <div className="max-w-[800px] mx-auto py-[20px] flex flex-col lg:flex-row">
        <div className="w-full lg:w-[69.6%] min-w-0 lg:float-left lg:border-r lg:border-[#570000] px-[10px]">
          {children}
        </div>
        <aside className="w-full lg:w-[29%] lg:float-right px-[5px]">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
