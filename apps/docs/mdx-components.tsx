import type { MDXComponents } from "mdx/types";
import { List, ListItem, Typography } from "@mui/material";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <Typography variant="h1" component="h1">
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography variant="h2" component="h2">
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography variant="h3" component="h3">
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography variant="h4" component="h4">
        {children}
      </Typography>
    ),
    h5: ({ children }) => (
      <Typography variant="h5" component="h5">
        {children}
      </Typography>
    ),
    h6: ({ children }) => (
      <Typography variant="h6" component="h6">
        {children}
      </Typography>
    ),
    ul: ({ children }) => (
      <List component="ul" sx={{ pl: 2 }}>
        {children}
      </List>
    ),
    ol: ({ children }) => (
      <List component="ol" sx={{ pl: 2 }}>
        {children}
      </List>
    ),
    li: ({ children }) => <ListItem component="li">{children}</ListItem>,
    p: ({ children }) => <Typography component="p">{children}</Typography>,
  };
}
