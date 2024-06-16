import rss from "@astrojs/rss";
import { siteConfig } from "@/config";
import { getCollection } from "astro:content";

export async function GET(content) {
  const blog = await getCollection('blog');
  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: content.site,
    items: blog.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}`,
    })),
    customData: `<language>ja-JP</language>`,
  });
}