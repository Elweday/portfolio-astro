import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://mnasser.vercel.app", // replace this with your deployed domain
  author: "Mohammed Nasser",
  desc: "A personal portfolio and blog.",
  title: "Mohammed Nasser",
  ogImage: "assets/images/fallback.png",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const PATHS = [
  { name: "Home", path: "/" },
  { name: "Posts", path: "/posts" },
  { name: "Projects", path: "/my-projects" },
  { name: "About", path: "/about" },
]


export type NAV_LINKS = "posts" | "projects" | "about" | "search" | "tags" | "home" | "search"

export const LOCALE = ["en-EN"]; // set to [] to  use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/elweday",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-nasser-38b045234/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:mohammednh2864@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/elweday",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
