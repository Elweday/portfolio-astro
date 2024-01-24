import { slug as slugger } from "github-slugger";
import type { CollectionEntry } from "astro:content";
export const slugifyStr = (str: string) => slugger(str);
type EntryData = (CollectionEntry<"blog"> | CollectionEntry<"projects">)["data"]
const slugify = (data: EntryData) => slugger(data.title);
export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));
export default slugify;