import { slug as slugger } from "github-slugger";
import type { CollectionEntry } from "astro:content";

export const slugifyStr = (str: string) => slugger(str);

type collectionData = CollectionEntry<"blog">["data"] | CollectionEntry<"projects">["data"]

const slugify = (data: collectionData) =>
data.postSlug ? slugger(data.postSlug) : slugger(data.title);

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default slugify;