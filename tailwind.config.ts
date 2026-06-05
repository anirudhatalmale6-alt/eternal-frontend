import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ==== TAMBAHKAN KODE INI ====
      fontFamily: {
        dodger: ['Dodger', 'sans-serif'], // sans-serif akan jadi fallback otomatis jika Dodger gagal load
      },
      // ============================
    },
  },
  plugins: [],
};
export default config;