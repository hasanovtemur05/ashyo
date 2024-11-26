/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['texnoark.ilyosbekdev.uz', 'ecomapi.ilyosbekdev.uz'], 
  },
  reactStrictMode: true, 
  swcMinify: true, 
};

export default nextConfig;
