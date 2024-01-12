import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOGImage } from "@utils/generateOgImages";

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map(post => ({
    params: { slug: post.slug },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOGImage(props as CollectionEntry<"blog">), {
    headers: { "Content-Type": "image/png" },
  });
