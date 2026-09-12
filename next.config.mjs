/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a fully static site (HTML/CSS/JS) into `out/` so it can be
  // served by static hosts like Hostinger without a Node.js server.
  output: "export",

  // Static export can't use the Next.js image optimization server,
  // so serve images as-is.
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },

  // Emit trailing-slash folders (index.html per route) which static
  // hosts serve more reliably.
  trailingSlash: true,
};

export default nextConfig;
