/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bunny.eternalorganizer.com',
        port: '',
        pathname: '/**', // Mengizinkan semua path gambar dari domain ini
      },
    ],
  },
};

export default nextConfig;