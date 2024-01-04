import { slugifyStr } from "./slugify";
import  { type CollectionEntry, getCollection } from "astro:content";

const  getUniqueTags = async (...collections: ("blog" | "projects")[]) => {
  const entries = await Promise.all(
    collections.map(collection => getCollection(collection))
  ).then(entries => entries.flat());

  const filteredEntries = entries.filter(({ data }) => !data.draft);
  const tags: string[] = filteredEntries
    .flatMap(entry => entry.data.tags)
    .map(tag => slugifyStr(tag))
    .filter(
      (value: string, index: number, self: string[]) =>
        self.indexOf(value) === index
    )
    .sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));
  return tags;
};

export default getUniqueTags;
