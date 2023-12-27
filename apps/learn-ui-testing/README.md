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
// vitest.config.ts
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
