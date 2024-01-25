import { type CollectionEntry } from "astro:content";

export type Projects = CollectionEntry<"projects">;
export type Posts = CollectionEntry<"blog">;
export type Collection = Projects | Posts;
