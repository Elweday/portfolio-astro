import { object } from "astro/zod";
import { type CollectionEntry } from "astro:content";

export type Projects = CollectionEntry<"projects">;
export type Posts = CollectionEntry<"blog">;
export type Collection = Projects | Posts;

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
};

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

interface StackIcons {
  [key: string]: string;
}


export const StackIcons = {
  astro: "simple-icons:astro",
  react: "mdi:react",
  tailwind: "mdi:tailwind",
  postgres: "cib:postgresql",
  svelte: "cib:svelte",
  nextjs: "simple-icons:nextdotjs",
  nodejs: "fa-brands:node-js",
  python: "akar-icons:python-fill",
  jinja: "simple-icons:jinja",
  bootstrap: "akar-icons:bootstrap-fill",
  flask: "simple-icons:flask",
  plotly: "simple-icons:plotly",
  javascript: "simple-icons:javascript",
  typescript: "simple-icons:typescript",
  docker: "logos:docker-icon",
  git: "logos:git-icon",
  npm: "logos:npm-icon",
  firebase: "logos:firebase",
  prisma: "simple-icons:prisma",
  chartjs: "file-icons:chartjs",
  pandas: "simple-icons:pandas",
  jupyter: "simple-icons:jupyter",
  numpy: "simple-icons:numpy",
  matplotlib: "logos:seaborn-icon",
};

export type SocialMedia =
  | "Github"
  | "Facebook"
  | "Instagram"
  | "LinkedIn"
  | "Mail"
  | "Twitter"
  | "Twitch"
  | "YouTube"
  | "WhatsApp"
  | "Snapchat"
  | "Pinterest"
  | "TikTok"
  | "CodePen"
  | "Discord"
  | "GitLab"
  | "Reddit"
  | "Skype"
  | "Steam"
  | "Telegram"
  | "Mastodon";
