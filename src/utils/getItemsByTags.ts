import { slugifyAll } from "./slugify";
import type { CollectionEntry } from "astro:content";

type Item = CollectionEntry<"blog"> | CollectionEntry<"projects">
type ItemsType = Item[] 

const getItemsByTags = (Items: ItemsType, tags: string[]) => {
  const checkTags = (item: Item) =>
    tags?.some(tag => slugifyAll(item.data.tags).includes(tag));
  return Items.filter(checkTags);
};

export default getItemsByTags;
