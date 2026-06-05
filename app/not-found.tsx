import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-900 mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <Link
          href="/"
          className="text-sm border border-gray-600 px-6 py-2 hover:border-red-900 hover:text-red-500 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
