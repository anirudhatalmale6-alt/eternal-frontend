'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuthStore } from '@/stores/auth-store';
import { usePointsStore } from '@/stores/points-store';
import { loginUser, getUserBalance } from '@/lib/eternal-api';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuthStore();
  const { setBalances } = usePointsStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await loginUser(username, password);
      login(result.token, result.user_display_name, result.user_email);

      try {
        const balance = await getUserBalance(result.token);
        setBalances(balance.eternal_gold, balance.eternal_ruby, balance.eternal_emerald);
      } catch {
        // Balance endpoint may not be available yet
      }

      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: 'url(https://bunny.eternalorganizer.com/wp-content/uploads/2019/01/agency_bg.jpg)',
        backgroundRepeat: 'repeat',
        backgroundColor: 'black',
      }}
    >
      <div className="w-full max-w-sm">
        <div className="text-center mb-6">
          <Image
            src="https://bunny.eternalorganizer.com/wp-content/uploads/2019/11/logo2.png"
            alt="Eternal"
            width={155}
            height={40}
            className="mx-auto bg-black p-2"
          />
        </div>

        <form onSubmit={handleSubmit} className="bg-black p-6 rounded border border-gray-800">
          {error && (
            <div className="mb-4 p-3 border-l-4 border-[#669933] bg-white text-black text-sm">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-1">Username or Email</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#111] border border-gray-700 text-white px-3 py-2 text-sm focus:outline-none focus:border-[#669933]"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#111] border border-gray-700 text-white px-3 py-2 text-sm focus:outline-none focus:border-[#669933]"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#669933] text-white py-2 font-bold hover:bg-[#557a2b] transition-colors disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>

          <div className="mt-4 text-center text-xs text-gray-500">
            <a href="https://www.eternalorganizer.com/wp-login.php?action=lostpassword" className="hover:text-white">
              Lost your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
