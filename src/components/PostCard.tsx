import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
}

export default function Card({ href, frontmatter }: Props) {
  const { title, pubDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
  };

  return (
    <li className="my-6 flex flex-row p-3 bg-skin-fill rounded-lg  h-full min-h-44">
      <div className=" flex flex-col justify-between text-wrap w-full">
        <a {...headerProps}   href={href}   className="py-1 text-wrap text-xl origin-top-left font-medium text-skin-accent underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0   hover:underline" >{title}</a>
        <p className="">{description}</p>
        <Datetime className="scale-90 origin-bottom-left mt-auto  " datetime={pubDatetime} />
      </div>
      <img  className="rounded-lg ml-3 size-40" src="https://picsum.photos/100" alt="" />
    </li>
  );
}
