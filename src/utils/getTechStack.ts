import type { CollectionEntry } from "astro:content";
import { Technologies } from "@config";
const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);


const techStackByType = groupBy(Object.values(Technologies), (tech) => tech.type);


const getAllStack = (projects: CollectionEntry<"projects">[]) => {
  const tech = projects
    .flatMap(project => project.data.stack as (keyof typeof Technologies)[])
    .filter(
      (value: string, index: number, self: string[]) =>
        self.indexOf(value) === index
    )
    .sort((a: string, b: string) => a.localeCompare(b))
    .map(tech => Technologies[tech]);
  return tech;
};
export default getAllStack;
export { techStackByType };
