import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
      }
    ]
  }
};

export default withPayload(nextConfig)