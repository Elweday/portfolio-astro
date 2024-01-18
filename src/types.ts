import { type CollectionEntry } from "astro:content";

export type Projects = CollectionEntry<"projects">;
export type Posts = CollectionEntry<"blog">;
export type Collection = Projects | Posts;
export type CollectionData = Projects["data"] | Posts["data"];



export type SocialIcons = {
  [social in SocialMedia]: string;
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
