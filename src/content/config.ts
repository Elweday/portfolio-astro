import { SITE } from "../config";
import { Schema, ZodTuple } from "astro/zod";
import { defineCollection, z } from "astro:content";
import { Technologies } from "../types";
import type { TupleType } from "typescript";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string().default(SITE.author),
    pubDatetime: z.date().default(new Date()),
    title: z.string(),
    postSlug: z.string().optional(),
    cover: z.string(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default([]),
    description: z.string(),
    canonicalURL: z.string().optional(),
    }),
});

const Stacks = [...Object.keys(Technologies)] as [string, ...string[]];



const projects = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string().default(SITE.author),
    startDate: z.date(),
    endDate: z
      .date()
      .or(z.enum(["Present"]))
      .default("Present"),
    title: z.string(),
    description: z.string(),
    postSlug: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    stack: z.array(z.enum(Stacks)).default([]),
    cover: z.string(),
    projectURL: z.string().url().optional(),
  })
});

export const collections = { blog, projects };
