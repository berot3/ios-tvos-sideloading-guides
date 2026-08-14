import type { NextConfig } from "next";

const repositoryName = "ios-tvos-sideloading-guides";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repositoryName}`,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
