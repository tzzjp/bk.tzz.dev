import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  type: 'content',
  // schema: rssSchema,
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date()
  })
});

export const collections = {blog};
