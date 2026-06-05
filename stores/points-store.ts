'use client';

import { create } from 'zustand';

interface PointsState {
  eternalGold: number;
  eternalRuby: number;
  eternalEmerald: number;
  unlockedPosts: Set<number>;
  setBalances: (gold: number, ruby: number, emerald: number) => void;
  markUnlocked: (postId: number) => void;
  isUnlocked: (postId: number) => boolean;
}

export const usePointsStore = create<PointsState>()((set, get) => ({
  eternalGold: 0,
  eternalRuby: 0,
  eternalEmerald: 0,
  unlockedPosts: new Set<number>(),
  setBalances: (gold, ruby, emerald) =>
    set({ eternalGold: gold, eternalRuby: ruby, eternalEmerald: emerald }),
  markUnlocked: (postId) =>
    set((state) => {
      const next = new Set(state.unlockedPosts);
      next.add(postId);
      return { unlockedPosts: next };
    }),
  isUnlocked: (postId) => get().unlockedPosts.has(postId),
}));
