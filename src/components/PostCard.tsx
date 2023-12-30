import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium  hover:underline",
  };

  return (
    <li className="my-6 flex flex-row p-3 bg-skin-fill rounded-lg min-h-40 ">
      <div className="w-full">
      <a
        href={href}
        className="py-1 inline-block text-xl scale-105 origin-top-left font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime datetime={pubDatetime} />
      <p>{description}</p>
      </div>
      <img  className="rounded-lg pl-3" src="https://picsum.photos/100" alt="" />
    </li>
  );
}
