import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve("."),
  },
  async redirects() {
    return [
      // Старий слаг категорії reaghuvannya → reaguvannya (узгоджено з рештою слагів)
      {
        source: "/poslugy/suprovid-ta-reaghuvannya/grupy-reaghuvannya",
        destination: "/poslugy/suprovid-ta-reaguvannya/grupy-reaguvannya",
        permanent: true,
      },
      {
        source: "/poslugy/suprovid-ta-reaghuvannya/:service",
        destination: "/poslugy/suprovid-ta-reaguvannya/:service",
        permanent: true,
      },
      {
        source: "/poslugy/suprovid-ta-reaghuvannya",
        destination: "/poslugy/suprovid-ta-reaguvannya",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
