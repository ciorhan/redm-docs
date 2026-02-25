// import type { NextConfig } from "next";

import createMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["mdx", "md", "tsx", "ts", "jsx", "js"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
