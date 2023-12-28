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

## ビジュアルリグレッションテストのツール

よくある実現方法

- reg-suit + Storycap
  - [Visual regression testingを導入してみた - STORES Product Blog](https://product.st.inc/entry/2023/12/07/202841)
  - [Visual Regression Test をローカル環境で導入する｜CyberZ Developer](https://note.com/cyberz_cto/n/n79e344f59651)
- Chromatic
  - [ビジュアルリグレッションテストのツールを導入するまでの意思決定プロセス - BASEプロダクトチームブログ](https://devblog.thebase.in/entry/process-of-introduction-of-chromatic)
  - [Vol.03 Component 総数 1000 件を超える Bill One の React フロントエンドに Chromatic を用いた VRT を導入した話 - Sansan Tech Blog](https://buildersbox.corp-sansan.com/entry/2023/05/12/110000)
  - [Chromatic VRT 戦略：効果を保ちつつ、コストを抑える方法 - Speaker Deck](https://speakerdeck.com/takuyakikuchi/chromatic-vrt-zhan-lue-xiao-guo-wobao-titutu-kosutowoyi-erufang-fa)
  - [Visual Regression Testを導入して、手間と時間を節約した話 - SmartHR Tech Blog](https://tech.smarthr.jp/entry/2023/09/25/120209)
- Playwright
  - [Playwright + reg-suitでVisual Regression Testing(VRT)を導入](https://zenn.dev/koheii/articles/8214467454a46c)
  - [Playwrightでビジュアルリグレッションテストを導入して安全にCSSライブラリを置き換える | みどりのさるのエンジニア](https://t-yng.jp/post/playwright-vrt)
  - [2023年にVisual Regression Testingを始めるならどんな選択肢があるか | ログラス Productチーム アドベントカレンダー 2022](https://www.wantedly.com/companies/loglass/post_articles/463738#_=_)
  - [クラウド型電子カルテにVisual Regression Testを導入した話 - エムスリーテックブログ](https://www.m3tech.blog/entry/digikar-vrt)
  - [CypressからPlaywrightに移行しました | PR TIMES 開発者ブログ](https://developers.prtimes.jp/2023/04/10/migrate-from-cypress-to-playwright/)
- その他
  - [Visual Regression Testingでテスト工数を削減する（ディスプレイ広告タグでの目視確認の自動化） - Yahoo! JAPAN Tech Blog](https://techblog.yahoo.co.jp/entry/2023082130432740/)
