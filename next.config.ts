import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: "default",
    remotePatterns: [{ protocol: 'https', hostname: 'example.com', port: '', pathname: '/path/to/image/**', },],
  }
};

export default nextConfig;
