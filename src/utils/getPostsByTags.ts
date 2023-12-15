import { slugifyAll } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getPostsByTags = (posts: CollectionEntry<"blog">[], tags: string[]) => {
  const checkTags = (post: CollectionEntry<"blog">) =>
    tags?.some(tag => slugifyAll(post.data.tags).includes(tag));
  return posts.filter(checkTags);
};

export default getPostsByTags;
