'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageLayout from '@/components/PageLayout';

export default function RegisterPage() {
  return (
    <PageLayout>
      <Suspense fallback={<div className="text-center py-8 text-gray-500">Loading...</div>}>
        <RegisterForm />
      </Suspense>
    </PageLayout>
  );
}

function RegisterForm() {
  const searchParams = useSearchParams();
  const refCode = searchParams.get('ref') || '';

  const [form, setForm] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    referral: refCode,
    agreeTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!form.agreeTerms) {
      setError('You must agree to the terms');
      return;
    }

    setLoading(true);
    try {
      const wpApiUrl = process.env.NEXT_PUBLIC_WP_API_URL || 'https://www.eternalorganizer.com/wp-json';
      const res = await fetch(`${wpApiUrl}/wp/v2/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.username,
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          password: form.password,
          meta: {
            dbem_phone: form.phone,
            referral: form.referral,
          },
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Registration failed');
      }
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed. Please try again.');
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <h1 className="font-dodger text-2xl mb-4">Account Created!</h1>
        <p className="text-gray-400">Please check your email to verify your account.</p>
      </div>
    );
  }

  return (
    <div>
          <div className="max-w-[500px] mx-auto">
            <h1 className="font-dodger text-xl text-center mb-8 tracking-wider">Create an Account</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {error && (
                <div className="bg-red-900/30 border border-red-800 text-red-400 text-sm p-3 rounded">
                  {error}
                </div>
              )}

              <div>
                <label className="font-dodger text-[10px] tracking-[0.15em] text-gray-400 block mb-1.5">CHOOSE A USERNAME</label>
                <input
                  type="text" name="username" value={form.username} onChange={handleChange} required
                  className="w-full bg-transparent border-b border-gray-700 text-white py-2 text-sm focus:outline-none focus:border-[#669933] transition-colors"
                />
              </div>

              <div>
                <label className="font-dodger text-[10px] tracking-[0.15em] text-gray-400 block mb-1.5">FIRST NAME</label>
                <input
                  type="text" name="firstName" value={form.firstName} onChange={handleChange} required
                  className="w-full bg-transparent border-b border-gray-700 text-white py-2 text-sm focus:outline-none focus:border-[#669933] transition-colors"
                />
              </div>

              <div>
                <label className="font-dodger text-[10px] tracking-[0.15em] text-gray-400 block mb-1.5">LAST NAME</label>
                <input
                  type="text" name="lastName" value={form.lastName} onChange={handleChange} required
                  className="w-full bg-transparent border-b border-gray-700 text-white py-2 text-sm focus:outline-none focus:border-[#669933] transition-colors"
                />
              </div>

              <div>
                <label className="font-dodger text-[10px] tracking-[0.15em] text-gray-400 block mb-1.5">EMAIL ADDRESS</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  className="w-full bg-transparent border-b border-gray-700 text-white py-2 text-sm focus:outline-none focus:border-[#669933] transition-colors"
                />
              </div>

              <div>
                <label className="font-dodger text-[10px] tracking-[0.15em] text-gray-400 block mb-1.5">PASSWORD</label>
                <input
                  type="password" name="password" value={form.password} onChange={handleChange} required
                  className="w-full bg-transparent border-b border-gray-700 text-white py-2 text-sm focus:outline-none focus:border-[#669933] transition-colors"
                />
              </div>

              <div>
                <label className="font-dodger text-[10px] tracking-[0.15em] text-gray-400 block mb-1.5">CONFIRM PASSWORD</label>
                <input
                  type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required
                  className="w-full bg-transparent border-b border-gray-700 text-white py-2 text-sm focus:outline-none focus:border-[#669933] transition-colors"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox" name="agreeTerms" checked={form.agreeTerms} onChange={handleChange}
                  className="w-4 h-4 accent-[#669933]"
                />
                <span className="font-dodger text-[9px] tracking-[0.1em] text-gray-400">BY CREATING AN ACCOUNT YOU AGREE TO THE SITES</span>
              </div>

              <div>
                <label className="font-dodger text-[10px] tracking-[0.15em] text-gray-400 block mb-1.5">PHONE NUMBERS</label>
                <div className="flex items-center border-b border-gray-700">
                  <span className="text-sm text-gray-400 pr-2 flex items-center gap-1">
                    <span className="text-lg">&#127470;&#127465;</span> +62
                  </span>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    className="w-full bg-transparent text-white py-2 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-dodger text-[10px] tracking-[0.15em] text-gray-400 block mb-1.5">PARTNER CODE (REFERRAL)</label>
                <input
                  type="text" name="referral" value={form.referral} onChange={handleChange}
                  readOnly={!!refCode}
                  className={`w-full bg-transparent border-b border-gray-700 text-white py-2 text-sm focus:outline-none focus:border-[#669933] transition-colors ${refCode ? 'text-gray-500' : ''}`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#8b0000] to-[#660000] text-white font-dodger text-[11px] tracking-[0.2em] py-3 rounded hover:from-[#a00000] hover:to-[#800000] transition-all disabled:opacity-50 mt-2"
              >
                {loading ? 'CREATING...' : 'REGISTER MY ACCOUNT'}
              </button>
            </form>
          </div>
    </div>
  );
}
