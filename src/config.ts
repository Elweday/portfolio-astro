import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://elweday.github.io", // replace this with your deployed domain
  author: "Mohammed Nasser",
  desc: "A personal portfolio and blog.",
  title: "Nasser's Blog",
  ogImage: "assets/images/fallback.png",
  lightAndDarkMode: true,
  itemsPerPage: 20,
};

export const PATHS = [
  { name: "Blog", path: "/blog", icon: "ant-design:read-outlined" },
  { name: "Projects", path: "/projects", icon: "ic:baseline-code" },
  { name: "About", path: "/about", icon: "mdi:about-circle-outline" },
  { name: "Search", path: "/search", icon: "ic:baseline-search" },
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
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-nasser-38b045234/",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:mohammednh2864@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/elweday",
    linkTitle: `${SITE.author} on Discord`,
    active: true,
  },
];





export const MY_SHOWS = [
  "silicon_valley",
  "bojack_horseman",
  "brooklyn_nine_nine",
  "the_big_bang_theory",
  "daredevil",
  "the_boys",
  "invincible",
  "rick_and_morty",
];

export const HOBBIES = [
  { name: "coding personal projects", icon: "ph:code-bold"},
  { name: "playing video games", icon: "cil:gamepad"},
  { name: "3d modeling with blender", icon: "carbon:chart-3d"},
  { name: "watching tv shows", icon: "ic:round-tv"},
  { name: "cooking food", icon: "ph:cooking-pot-bold"},

]