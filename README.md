# About

NextBook is a documentation website built with [Nextra 4.x](https://nextra.site/) - a Next.js-based static site generator optimized for documentation sites.

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- pnpm (recommended)

### Installation

```bash
git clone https://github.com/harrywang/nextbook.git

cd nextbook

pnpm install

pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.


## Create Content

All content is stored in the `/src/content` directory as MDX files. You can organize your content using folders and `_meta.js` files to control the sidebar navigation.

See the existing content in the `/src/content` folder for examples of how to structure your documentation.

## Search Functionality

To test search during development, run `pnpm build` and then restart your app with `pnpm dev` (Nextra 4 uses Pagefind package, which indexes built .html files instead of .md/.mdx files).

You may need to hard refresh your browser to see the search results (`Cmd + Shift + R` for Mac).

## License

MIT
