import { SITE } from "@config";
import { Schema, ZodTuple } from "astro/zod";
import { defineCollection, z } from "astro:content";
import { Technologies } from "../types";
import type { TupleType } from "typescript";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      title: z.string(),
      postSlug: z.string().optional(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

const Stacks = [...Object.keys(Technologies)] as [string, ...string[]];



const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        author: z.string().default(SITE.author),
        startDate: z.date(),
        endDate: z
          .date()
          .or(z.enum(["Present"]))
          .optional()
          .default("Present"),
        title: z.string(),
        description: z.string(),
        postSlug: z.string().optional(),
        draft: z.boolean().optional(),
        tags: z.array(z.string()).default(["others"]),
        stack: z.array(z.enum(Stacks)).default([]),
        cover: image()
          .refine(img => img.width / img.height != 16 / 9, {
            message: "The Image must have aspect ratio of 16:9!!",
          })
          .or(z.string()),
        projectURL: z.string().url().optional(),
      })
      .refine(data => data.startDate <= data.endDate, {
        message: "Start date cannot be after end date!",
        path: ["endDate"],
      })
      .refine(data => data.startDate <= new Date(), {
        message: "Start date cannot be in the future!",
        path: ["startDate"],
      })
      .refine(data => data.endDate <= new Date(), {
        message: "End date cannot be in the future!",
        path: ["endDate"],
      }),
});

export const collections = { blog, projects };
