import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "visitestonia.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "visitparnu.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "frosthotel.ee",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Other config options here
};

export default nextConfig;
