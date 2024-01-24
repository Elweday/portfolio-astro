import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import slugify from "@utils/slugify";
import { SITE } from "@config";

export async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const projects = await getCollection("blog");
  const items = [...sortedPosts, ...projects].map(({ data, collection }) => ({
    link: `${collection == "blog" ? "blog": "projects"}/${slugify(data)}`,
    title: data.title,
    description: data.description,
    pubDate: new Date(data.dateTime),
  })) 
  
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: items,
  });
}
