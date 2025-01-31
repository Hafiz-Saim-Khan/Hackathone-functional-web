import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add your external domain here
  },
  // Add any other configuration options here
};

export default nextConfig;
