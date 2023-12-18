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

export type Technology  = {
  [key: string]: {
    name: string;
    icon: string;
    url: string;
  };
}


export const Technologies = {
  astro: {
    name: "Astro",
    icon: "simple-icons:astro",
    url: "https://astro.build/",
    description: "A modern static site generator for faster websites.",
  },
  react: {
    name: "React",
    icon: "mdi:react",
    url: "https://reactjs.org/",
    description: "A JavaScript library for building user interfaces.",
  },
  tailwind: {
    name: "Tailwind",
    icon: "mdi:tailwind",
    url: "https://tailwindcss.com/",
    description: "A utility-first CSS framework for rapid UI development.",
  },
  postgres: {
    name: "Postgres",
    icon: "cib:postgresql",
    url: "https://www.postgresql.org/",
    description: "An open-source relational database system.",
  },
  svelte: {
    name: "Svelte",
    icon: "cib:svelte",
    url: "https://svelte.dev/",
    description: "A JavaScript framework for building user interfaces.",
  },
  nextjs: {
    name: "Next.js",
    icon: "simple-icons:nextdotjs",
    url: "https://nextjs.org/",
    description: "A React framework for building static and dynamic web applications.",
  },
  nodejs: {
    name: "Node.js",
    icon: "fa-brands:node-js",
    url: "https://nodejs.org/en/",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
    python: {
    name: "Python",
    icon: "akar-icons:python-fill",
    url: "https://www.python.org/",
    description: "A high-level programming language known for its readability and versatility.",
  },
  jinja: {
    name: "Jinja",
    icon: "simple-icons:jinja",
    url: "https://jinja.palletsprojects.com/",
    description: "A templating engine for Python, used in web development.",
  },
  bootstrap: {
    name: "Bootstrap",
    icon: "akar-icons:bootstrap-fill",
    url: "https://getbootstrap.com/",
    description: "A popular CSS framework for building responsive and mobile-first websites.",
  },
  flask: {
    name: "Flask",
    icon: "simple-icons:flask",
    url: "https://flask.palletsprojects.com/",
    description: "A lightweight web application framework for Python.",
  },
  plotly: {
    name: "Plotly",
    icon: "simple-icons:plotly",
    url: "https://plotly.com/",
    description: "A data visualization library for creating interactive plots and dashboards.",
  },
  javascript: {
    name: "Javascript",
    icon: "simple-icons:javascript",
    url: "https://www.javascript.com/",
    description: "A programming language commonly used for web development.",
  },
  typescript: {
    name: "Typescript",
    icon: "simple-icons:typescript",
    url: "https://www.typescriptlang.org/",
    description: "A superset of JavaScript that adds static typing and other features.",
  },
    docker: {
    name: "Docker",
    icon: "logos:docker-icon",
    url: "https://www.docker.com/",
    description: "A platform for developing, shipping, and running applications in containers.",
  },
  git: {
    name: "Git",
    icon: "logos:git-icon",
    url: "https://git-scm.com/",
    description: "A distributed version control system for tracking changes in source code.",
  },
  npm: {
    name: "NPM",
    icon: "logos:npm-icon",
    url: "https://www.npmjs.com/",
    description: "The package manager for JavaScript, used to manage project dependencies.",
  },
  firebase: {
    name: "Firebase",
    icon: "logos:firebase",
    url: "https://firebase.google.com/",
    description: "A platform for building web and mobile applications with serverless features.",
  },
  prisma: {
    name: "Prisma",
    icon: "simple-icons:prisma",
    url: "https://www.prisma.io/",
    description: "A modern database toolkit for working with databases in TypeScript and JavaScript.",
  },
  chartjs: {
    name: "Chart.js",
    icon: "file-icons:chartjs",
    url: "https://www.chartjs.org/",
    description: "A simple yet flexible JavaScript charting library for designers & developers.",
  },
  pandas: {
    name: "Pandas",
    icon: "simple-icons:pandas",
    url: "https://pandas.pydata.org/",
    description: "A data manipulation and analysis library for the Python programming language.",
  },
  jupyter: {
    name: "Jupyter",
    icon: "simple-icons:jupyter",
    url: "https://jupyter.org/",
    description: "An open-source platform for interactive computing and data science.",
  },
  numpy: {
    name: "Numpy",
    icon: "simple-icons:numpy",
    url: "https://numpy.org/",
    description: "A powerful library for numerical computing in Python.",
  },
  matplotlib: {
    name: "Matplotlib",
    icon: "logos:seaborn-icon",
    url: "https://matplotlib.org/",
    description: "A 2D plotting library for Python, creating static, animated, and interactive plots.",
  },
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
