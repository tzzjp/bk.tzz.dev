import rss from "@astrojs/rss";
import { siteConfig } from "@/config";
import { getCollection } from "astro:content";
import { getGitInfo } from "@/lib/git";


export async function GET(content) {
  const blogs = await getCollection('blog');
  const blogsWithGitInfo = await Promise.all(
    blogs.map(async (post) => {
      const gitInfo = await getGitInfo("./src/content/blog/" + post.id);
      if(gitInfo === null) {
        return post;
      } else {
        return { ...post, data: { ...gitInfo, ...(post.data || {})} }
      }
    })
  );
  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: content.site,
    items: blogsWithGitInfo.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}`,
    })),
    customData: `<language>ja-JP</language>`,
  });
}