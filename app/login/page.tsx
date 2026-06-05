'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const cookies = document.cookie;
    if (cookies.includes('wordpress_logged_in_')) {
      router.replace('/account/');
      return;
    }
    window.location.href = '/login/';
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center">
      <p className="text-gray-500">Redirecting...</p>
    </div>
  );
}
