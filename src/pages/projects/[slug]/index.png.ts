import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOGImage } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";

export async function getStaticPaths() {
  const projects = await getCollection("projects");

  return projects.map(project => ({
    params: { slug: project.slug },
    props: project,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOGImage(props as CollectionEntry<"projects">), {
    headers: { "Content-Type": "image/png" },
  });
