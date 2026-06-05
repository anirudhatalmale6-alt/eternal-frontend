import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | '...')[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  const getHref = (page: number) => page === 1 ? basePath : `${basePath}?page=${page}`;

  return (
    <div className="flex items-center justify-center gap-1 mt-8">
      {currentPage > 1 && (
        <Link
          href={getHref(currentPage - 1)}
          className="w-8 h-8 flex items-center justify-center rounded border border-gray-800 text-gray-400 hover:border-red-900 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </Link>
      )}

      {pages.map((page, i) =>
        page === '...' ? (
          <span key={`dots-${i}`} className="w-8 h-8 flex items-center justify-center text-gray-600 text-xs">...</span>
        ) : (
          <Link
            key={page}
            href={getHref(page)}
            className={`w-8 h-8 flex items-center justify-center rounded text-xs font-medium transition-colors ${
              page === currentPage
                ? 'bg-[#1c1c1c] text-white border border-red-900'
                : 'border border-gray-800 text-gray-400 hover:border-red-900 hover:text-white'
            }`}
          >
            {page}
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link
          href={getHref(currentPage + 1)}
          className="w-8 h-8 flex items-center justify-center rounded border border-gray-800 text-gray-400 hover:border-red-900 hover:text-white transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
