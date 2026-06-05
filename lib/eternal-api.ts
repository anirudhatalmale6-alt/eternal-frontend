const ETERNAL_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://www.eternalorganizer.com/wp-json';

export interface UserBalance {
  eternal_gold: number;
  eternal_ruby: number;
  eternal_emerald: number;
}

export interface ContentAccess {
  post_id: number;
  has_access: boolean;
  cost: number;
  currency: string;
}

export interface UnlockResult {
  success: boolean;
  message: string;
  new_balance: number;
}

export async function getUserBalance(token: string): Promise<UserBalance> {
  const res = await fetch(`${ETERNAL_API_URL}/eternal/v1/user/balance`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch balance');
  return res.json();
}

export async function checkContentAccess(token: string, postId: number): Promise<ContentAccess> {
  const res = await fetch(`${ETERNAL_API_URL}/eternal/v1/content/access-check?post_id=${postId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to check access');
  return res.json();
}

export async function unlockContent(token: string, postId: number): Promise<UnlockResult> {
  const res = await fetch(`${ETERNAL_API_URL}/eternal/v1/content/unlock`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ post_id: postId }),
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to unlock content');
  return res.json();
}

export async function loginUser(username: string, password: string): Promise<{ token: string; user_display_name: string; user_email: string }> {
  const res = await fetch(`${ETERNAL_API_URL}/jwt-auth/v1/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Login failed');
  }
  return res.json();
}

export async function validateToken(token: string): Promise<boolean> {
  const res = await fetch(`${ETERNAL_API_URL}/jwt-auth/v1/token/validate`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
  });
  return res.ok;
}
