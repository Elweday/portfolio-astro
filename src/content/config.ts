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
      pubDatetime: z.date().default(new Date()),
      title: z.string(),
      postSlug: z.string().optional(),
      cover: z.string().optional().default("https://th.bing.com/th/id/R.99bf1e22856725b68d5fddfcd283677b?rik=TutQhaQL70DRQA&pid=ImgRaw&r=0"),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default([]),
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
        cover: z.string(),
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
