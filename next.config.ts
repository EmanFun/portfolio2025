import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: "default",
    domains: ['images.unsplash.com']
  }
};

export default nextConfig;
