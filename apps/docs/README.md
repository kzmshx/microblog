# docs

## Memo

### Create project

```shell
pnpm create next-app@latest apps/docs \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --import-alias "@/*" \
  --use-pnpm

# ✔ Would you like to use `src/` directory? … No
```

### Install MDX

```shell
pnpm i @next/mdx @mdx-js/loader @mdx-js/react @types/mdx --filter docs
```

### Install MUI

```shell
pnpm i @mui/material @mui/material-nextjs @emotion/react @emotion/styled @emotion/cache --filter docs
```
