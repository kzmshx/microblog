# learn-ui-testing

## Memo

### Create project.

```shell
pnpm create next-app@latest --example with-vitest apps/learn-ui-testing
```

```shell
pnpm i -D @testing-library/user-event --filter learn-ui-testing
```

### Use `@testing-library/jest-dom` with `vitest`.

```shell
pnpm i -D @testing-library/jest-dom --filter learn-ui-testing
```

```ts
// vitest.config.mts
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./__tests__/setup.ts"], // Add this line for setup `@testing-library/jest-dom`.
  },
});
```

```ts
// __tests__/setup.ts
import "@testing-library/jest-dom/vitest";
```

### Install Storybook

```shell
pnpm dlx storybook init --skip-install
pnpm i -D @storybook/cli
pnpm dlx sort-package-json
```

### Define play function with `@storybook/test`

- Storybookでテストを書くメリット
  - テストの実装過程を視覚的に確認できる
- Storybookでテストを書くデメリット
  - Storybook外のテストと分離されるため、テストケースの重複が発生する可能性がある
  - 2023年12月時点ではモックが使えない
- Storybookでテストを書くかどうかの判断基準
  - 基本的にRTL（React Testing Library）で十分なはずなのでそちらを優先する
  - 今後モックのサポートなどが進むとStorybookでテストを書くメリットが増えるかもしれない

```tsx
// Form.stories.tsx
const meta: Meta<typeof Form> = {
  title: "Form",
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

/**
 * https://storybook.js.org/blog/storybook-test/
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const { getByRole, getByDisplayValue } = within(canvasElement);

    const input = getByRole("textbox");
    await expect(input).toHaveTextContent("");

    await userEvent.type(input, "Hello, World!");
    await expect(getByDisplayValue("Hello, World!")).toBeInTheDocument();
  },
};
```
