# Application Routes Infrastructure

- / - Marketing (landing page)
- /sitemap.xml - SEO sitemap [Learn more](#sitemapxml)
- /robots.txt - Search engine crawling rules
<!-- - /docs - Fumadocs – product documentation -->
- /\* - pages

- /api/docs - scalar api documentation ui
- /api/health - health routes
- /api/\* - feature-endpoints

## Error routes

- 404 : Not found
- 500 : Internal server error
- 503 : Service unavailable

# Sitemap.xml

1. Next.js — Built-in sitemap support
   Next.js App Router provides a special file convention called sitemap.ts.

```
src/
└── app/
    ├── layout.tsx
    ├── page.tsx
    ├── sitemap.ts
    └── robots.ts

```

2. sitemap.ts

```

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://example.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://example.com/docs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://example.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}

```

That's it.

Next.js automatically exposes the generated sitemap at:
https://example.com/sitemap.xml

You don't need to configure Express, install a package, or manually create XML.

3. What about dynamic routes?
   Suppose you have blog posts stored in MongoDB.

   /blog
   /blog/first-post
   /blog/second-post
   /blog/third-post

   You can fetch the posts and generate sitemap entries dynamically.

```
import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    url: `https://example.com/blog/${post.slug}`,
    lastModified: post.updatedAt,
  }));
}
```

Now whenever the sitemap is regenerated, it can include the latest posts.

4. Next.js — robots.txt

Next.js also provides a robots.ts convention.

Create src/app/robots.ts:

```
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/dashboard/"],
    },
    sitemap: "https://example.com/sitemap.xml",
  };
}
```

5. React.js — Static sitemap

Create the file directly inside public/.

```
project/
├── public/
│   ├── sitemap.xml
│   └── robots.txt
├── src/
├── index.html
└── vite.config.js
```

Vite copies the contents of public/ into the build output.
For more info ask ChatGPT.
