import type {StorybookConfig} from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  /** 暴露 public 目录给到 stotrybook，作为静态资源目录 */
  "staticDirs": ['../src/stories/assets'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  // docs: {
  //   autodocs: "tag",
  // },
  core: {
    builder: "@storybook/builder-webpack5"
  }
};
export default config;
