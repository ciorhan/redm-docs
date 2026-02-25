# REDM - The Developer's Outlaw Journal

Documentation + presentation website for RedM server development, built with Next.js App Router and MDX.

## Quick Start

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm start
```

## Main Routes

- `/` Presentation landing page
- `/docs` Documentation hub
- `/docs/getting-started`
- `/docs/scripting`
- `/docs/scripting/events`
- `/docs/scripting/commands`
- `/docs/resources`
- `/docs/resources/structure`
- `/docs/resources/deploy`
- `/blog` Blog listing
- `/blog/[slug]` Blog article pages (SSG)
- `/contact` Contact page

## Project Structure

```text
app/
  components/
    hero-art.tsx
    site-header.tsx
  docs/
    nav.ts
    shell.tsx
    ...mdx pages
  blog/
    posts.ts
    [slug]/page.tsx
  globals.css
  mdx-code-block.tsx
```

## Where To Edit Things

- Landing/blog/contact header and branding:
  - `app/components/site-header.tsx`
- Hero art:
  - `app/components/hero-art.tsx`
- Global theme and docs styling:
  - `app/globals.css`
- Docs sidebar structure:
  - `app/docs/nav.ts`
- Docs content:
  - `app/docs/**/*.mdx`
- Blog dummy data:
  - `app/blog/posts.ts`

## MDX Code Blocks

Docs MDX code blocks are rendered through a custom component that adds:

- language label at top of each code block
- syntax-style token coloring

Implementation files:

- `mdx-components.tsx`
- `app/mdx-code-block.tsx`
