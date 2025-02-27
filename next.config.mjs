// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output:"export"
// };

// export default nextConfig;
const nextConfig = {
  output: "export",
  trailingSlash: true, // Ensures correct paths for static files
  images: {
    unoptimized: true, // Fixes missing images
  },
};

export default nextConfig;
