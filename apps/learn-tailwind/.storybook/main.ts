import type { StorybookConfig } from "@storybook/nextjs";

import * as path from "path";
import { dirname, join } from "path";
import { webpack } from "next/dist/compiled/webpack/webpack";
import Configuration = webpack.Configuration;

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  staticDirs: [
    // Support static assets in the public folder
    "../public",
  ],
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config: Configuration) => {
    // Support typescript import aliases. See tsconfig.json:compilerOptions.paths
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, ".."),
    };
    return config;
  },
};
export default config;
