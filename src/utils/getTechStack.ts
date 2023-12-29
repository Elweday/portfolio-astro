import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import { type TechnologyKey, Technologies } from "../types";

const getAllStack = (projects: CollectionEntry<"projects">[]) => {
  const tech = projects
    .flatMap(project => project.data.stack as TechnologyKey[])
    .filter(
      (value: string, index: number, self: string[]) =>
        self.indexOf(value) === index
    )
    .sort((a: string, b: string) => a.localeCompare(b))
    .map(tech => Technologies[tech]);
  return tech;
};
export default getAllStack;
