'use client';

import { useState } from 'react';
import { useAuthStore } from '@/stores/auth-store';
import { usePointsStore } from '@/stores/points-store';
import { checkContentAccess, unlockContent, getUserBalance } from '@/lib/eternal-api';
import Link from 'next/link';

interface PremiumGateProps {
  postId: number;
  excerpt: string;
  children: React.ReactNode;
}

export default function PremiumGate({ postId, excerpt, children }: PremiumGateProps) {
  const { token, isLoggedIn } = useAuthStore();
  const { isUnlocked, markUnlocked, setBalances } = usePointsStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cost, setCost] = useState<number | null>(null);
  const [currency, setCurrency] = useState('eternal_ruby');
  const [accessChecked, setAccessChecked] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);

  const checkAccess = async () => {
    if (!token) return;
    try {
      const result = await checkContentAccess(token, postId);
      setHasAccess(result.has_access);
      setCost(result.cost);
      setCurrency(result.currency);
      if (result.has_access) markUnlocked(postId);
    } catch {
      // API not available yet, show gated content
    }
    setAccessChecked(true);
  };

  if (!accessChecked && isLoggedIn && token) {
    checkAccess();
  }

  if (isUnlocked(postId) || hasAccess) {
    return <>{children}</>;
  }

  const handleUnlock = async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const result = await unlockContent(token, postId);
      if (result.success) {
        markUnlocked(postId);
        setHasAccess(true);
        const balance = await getUserBalance(token);
        setBalances(balance.eternal_gold, balance.eternal_ruby, balance.eternal_emerald);
      } else {
        setError(result.message);
      }
    } catch {
      setError('Failed to unlock content. Please try again.');
    }
    setLoading(false);
  };

  const currencyLabel = currency === 'eternal_ruby' ? 'Eternal Ruby' : currency === 'eternal_emerald' ? 'Eternal Emerald' : 'Eternal Gold';

  return (
    <div className="relative">
      <div
        className="text-gray-300 mb-6"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0D0D]/80 to-[#0D0D0D] z-10" />
        <div className="blur-sm opacity-30 pointer-events-none max-h-[200px] overflow-hidden">
          {children}
        </div>
      </div>
      <div className="relative z-20 -mt-20 bg-gradient-to-r from-[#1a0000] to-[#0a0a0a] border border-red-900 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Premium Content</h3>
        <p className="text-gray-400 text-sm mb-4">
          This article requires {cost !== null ? `${cost} ${currencyLabel}` : 'premium access'} to read.
        </p>
        {!isLoggedIn ? (
          <Link
            href="/login"
            className="inline-block bg-red-900 text-white px-6 py-2 rounded hover:bg-red-800 transition-colors font-bold"
          >
            Log In to Unlock
          </Link>
        ) : (
          <button
            onClick={handleUnlock}
            disabled={loading}
            className="bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-2 rounded hover:from-red-800 hover:to-red-600 transition-colors font-bold disabled:opacity-50"
          >
            {loading ? 'Unlocking...' : `Unlock for ${cost ?? '?'} ${currencyLabel}`}
          </button>
        )}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
}
