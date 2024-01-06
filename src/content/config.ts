import { SITE } from "@config";
import { defineCollection, z } from "astro:content";
import { Technologies } from "../types";

const Stacks = [...Object.keys(Technologies)] as [string, ...string[]];
type FlexibleType<T> = {
  [K in keyof T]: T[K];
} & {
  [key: string]: any;
};

type Entry = FlexibleType<z.infer<typeof baseItem> >;

const baseItem = z.object({
  dateTime: z.date().default(new Date()),
  title: z.string(),
  cover: z.string(),
  draft: z.boolean().optional(),
  tags: z.array(z.string()).default([]),
  description: z.string(),
})

const blog = defineCollection({
  type: "content",
  schema: baseItem.extend({
    canonicalURL: z.string().optional(),
    }),
});

const projects = defineCollection({
  type: "content",
  schema: baseItem.extend({
    endDate: z
      .date()
      .or(z.enum(["Present"]))
      .default("Present"),
    stack: z.array(z.enum(Stacks)).default([]),
    projectURL: z.string().url().optional(),
  })
});

export const collections = { blog, projects };
export type {Entry};
