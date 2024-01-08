import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import "@/app/globals.css";
import { mulish, rokkitt } from "@/app/utils/font";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Center components in the preview
    layout: "centered",
    viewport: {
      viewports: {
        // Support various devices using @storybook/addon-viewport
        ...MINIMAL_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${mulish.variable} ${rokkitt.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
