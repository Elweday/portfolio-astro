import { SITE } from "@config";
import { defineCollection, z } from "astro:content";
import { Technologies } from "../types";



const baseItem = z.object({
  title: z.string(),
  cover: z.string(),
  draft: z.boolean().optional(),
  tags: z.array(z.string()).default([]),
  description: z.string(),
})

type FlexibleType<T> = {
  [K in keyof T]: T[K];
} & {
  [key: string]: any;
};


type Entry = FlexibleType<z.infer<typeof baseItem> >;

const blog = defineCollection({
  type: "content",
  schema: baseItem.extend({
    pubDatetime: z.date().default(new Date()),
    canonicalURL: z.string().optional(),
    }),
});

const Stacks = [...Object.keys(Technologies)] as [string, ...string[]];



const projects = defineCollection({
  type: "content",
  schema: baseItem.extend({
    startDate: z.date(),
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
