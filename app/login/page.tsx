'use client';

import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    const cookies = document.cookie;
    if (cookies.includes('wordpress_logged_in_')) {
      window.location.replace('/account/');
    } else {
      window.location.replace('/wp-login.php');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center">
      <p className="text-gray-500 text-sm">Redirecting...</p>
    </div>
  );
}
