
export const SITE = {
  website: "https://elweday.github.io",
  author: "Mohammed Nasser",
  desc: "A personal portfolio and blog.",
  title: "Nasser's Blog",
  ogImage: "assets/images/fallback.png",
  lightAndDarkMode: true,
  itemsPerPage: 20,

} as const ;


export const TELEGRAM_BOT_TOKEN= "6754298360:AAFnmDthvAbcSGiaZXiax4ZOJOKqy5yl2UE";
export const MY_CHAT_ID= "5035552566";
export const omdbApiKey = "50788f34" // not a secret, feel free to use (It's pointless).
export const RESUME = "https://docs.google.com/document/d/1Lmc80EBvlTwp2vp5kkrLQEzGkF5WvxCQ/export?format=pdf"

export const PATHS = [
  { name: "Blog", path: "/blog", icon: "ant-design:read-outlined" },
  { name: "Projects", path: "/projects", icon: "ic:baseline-code" },
  { name: "About", path: "/about", icon: "mdi:about-circle-outline" },
  { name: "Search", path: "/search", icon: "ic:baseline-search" },
] as const;

export const Technologies= {
  javascript: {
    name: "Javascript",
    icon: "simple-icons:javascript",
    url: "https://www.javascript.com/",
    description: "A programming language commonly used for web development.",
    type: "programming language",
  },
  typescript: {
    name: "Typescript",
    icon: "simple-icons:typescript",
    url: "https://www.typescriptlang.org/",
    description: "A superset of JavaScript that adds static typing and other features.",
    type: "programming language",
  },
  golang: {
    name: "Golang",
    icon: "cib:go",
    url: "https://www.golang.org/",
    description: "A popular general-purpose programming language.",
    type: "programming language",
  },
  "c++": {
    name: "C++",
    icon: "file-icons:c",
    url: "https://en.cppreference.com/w/",
    description: "A general-purpose programming language.",
    type: "programming language",
  },
  python: {
    name: "Python",
    icon: "akar-icons:python-fill",
    url: "https://www.python.org/",
    description: "A high-level programming language known for its readability and versatility.",
    type: "programming language",
  },
  astro: {
    name: "Astro",
    icon: "simple-icons:astro",
    url: "https://astro.build/",
    description: "A modern static site generator for faster websites.",
    type: "web dev",
  },
  html: {
    name: "HTML5",
    icon: "akar-icons:html-fill",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/",
    description: "A markup language used for structuring and presenting content on the web.",
    type: "web dev",
  },
  css: {
    name: "CSS3",
    icon: "akar-icons:css-fill",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    description: "A style sheet language used for structuring and presenting content on the web.",
    type: "web dev",
  },
  react: {
    name: "React",
    icon: "mdi:react",
    url: "https://reactjs.org/",
    description: "A JavaScript library for building user interfaces.",
    type: "web dev",
  },
  django: {
    name: "Django",
    icon: "akar-icons:django-fill",
    url: "https://www.djangoproject.com/",
    description: "A web development framework for Python.",
    type: "web dev",
  },
  tailwind: {
    name: "Tailwind",
    icon: "mdi:tailwind",
    url: "https://tailwindcss.com/",
    description: "A utility-first CSS framework for rapid UI development.",
    type: "web dev",
  },
  postgres: {
    name: "Postgres",
    icon: "cib:postgresql",
    url: "https://www.postgresql.org/",
    description: "An open-source relational database system.",
    type: "technology",
  },
  svelte: {
    name: "Svelte",
    icon: "cib:svelte",
    url: "https://svelte.dev/",
    description: "A JavaScript framework for building user interfaces.",
    type: "web dev",
  },
  nextjs: {
    name: "Next.js",
    icon: "simple-icons:nextdotjs",
    url: "https://nextjs.org/",
    description: "A React framework for building static and dynamic web applications.",
    type: "web dev",
  },
  nodejs: {
    name: "Node.js",
    icon: "fa-brands:node-js",
    url: "https://nodejs.org/en/",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    type: "web dev",
  },
  jinja: {
    name: "Jinja",
    icon: "simple-icons:jinja",
    url: "https://jinja.palletsprojects.com/",
    description: "A templating engine for Python, used in web development.",
    type: "web dev",
  },
  bootstrap: {
    name: "Bootstrap",
    icon: "akar-icons:bootstrap-fill",
    url: "https://getbootstrap.com/",
    description: "A popular CSS framework for building responsive and mobile-first websites.",
    type: "web dev",
  },
  flask: {
    name: "Flask",
    icon: "simple-icons:flask",
    url: "https://flask.palletsprojects.com/",
    description: "A lightweight web application framework for Python.",
    type: "web dev",
  },
  plotly: {
    name: "Plotly",
    icon: "simple-icons:plotly",
    url: "https://plotly.com/",
    description: "A data visualization library for creating interactive plots and dashboards.",
    type: "web dev",
  },
    docker: {
    name: "Docker",
    icon: "mdi:docker",
    url: "https://www.docker.com/",
    description: "A platform for developing, shipping, and running applications in containers.",
    type: "technology",
  },
  git: {
    name: "Git",
    icon: "mdi:git",
    url: "https://git-scm.com/",
    description: "A distributed version control system for tracking changes in source code.",
    type: "technology",
  },
  npm: {
    name: "NPM",
    icon: "jam:npm",
    url: "https://www.npmjs.com/",
    description: "The package manager for JavaScript, used to manage project dependencies.",
    type: "web dev",
  },
  firebase: {
    name: "Firebase",
    icon: "teenyicons:firebase-solid",
    url: "https://firebase.google.com/",
    description: "A platform for building web and mobile applications with serverless features.",
    type: "technology",
  },
  latex: {
    name: "Firebase",
    icon: "file-icons:latex",
    url: "https://www.latex-project.org/",
    description: "A LaTeX markup language and typesetting system.",
    type: "technology",
  },
  prisma: {
    name: "Prisma",
    icon: "simple-icons:prisma",
    url: "https://www.prisma.io/",
    description: "A modern database toolkit for working with databases in TypeScript and JavaScript.",
    type: "technology",
  },
  chartjs: {
    name: "Chart.js",
    icon: "file-icons:chartjs",
    url: "https://www.chartjs.org/",
    description: "A simple yet flexible JavaScript charting library for designers & developers.",
    type: "technology",
  },
  pandas: {
    name: "Pandas",
    icon: "simple-icons:pandas",
    url: "https://pandas.pydata.org/",
    description: "A data manipulation and analysis library for the Python programming language.",
    type: "data science",
  },
  jupyter: {
    name: "Jupyter",
    icon: "simple-icons:jupyter",
    url: "https://jupyter.org/",
    description: "An open-source platform for interactive computing and data science.",
    type: "data science",
  },
  numpy: {
    name: "Numpy",
    icon: "simple-icons:numpy",
    url: "https://numpy.org/",
    description: "A powerful library for numerical computing in Python.",
    type: "data science",
  },
  tensorflow: {
    name: "TensorFlow",
    icon: "simple-icons:tensorflow",
    url: "https://www.tensorflow.org/",
    description: "An open-source machine learning framework for everyone.",
    type: "data science",
  },
  sklearn: {
    name: "Scikit-learn",
    icon: "simple-icons:scikitlearn",
    url: "https://scikit-learn.org/",
    description: "A popular machine learning library for Python.",
    type: "data science",
  },
  opencv: {
    name: "OpenCV",
    icon: "simple-icons:opencv",
    url: "https://opencv.org/",
    description: "An open-source library for computer vision in Python.",
    type: "data science",
  },
  ffmpeg: {
    name: "FFmpeg",
    icon: "file-icons:ffmpeg",
    url: "https://ffmpeg.org/",
    description: "An open-source library for video and audio manipulation.",
    type: "data science",
  },
  opengl : {
    name: "OpenGL",
    icon: "simple-icons:opengl",
    url: "https://www.opengl.org/",
    description: "A cross-platform 3D graphics API.",
    type: "data science",
  },
  gcp: {
    name: "Google Cloud Platform",
    icon: "mdi:google-cloud",
    url: "https://cloud.google.com/",
    description: "A platform for building and managing cloud computing services.",
    type: "technology",
  }
} as const;


export const LOCALE = ["en-EN"];


export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/elweday",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-nasser-38b045234/",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
    icon: "mdi:linkedin",
  },
  {
    name: "Mail",
    href: "mailto:mohammednh2864@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
    icon: "mdi:email",
  },
  {
    name: "Discord",
    href: "https://discord.com/users/elweday",
    linkTitle: `${SITE.author} on Discord`,
    active: true,
    icon: "ic:baseline-discord",
  },
] as const;

export const MY_SHOWS = [
  "bojack_horseman",
  "the_big_bang_theory",
  "invincible",
  "brooklyn_nine_nine",
  "silicon_valley",
  "Severance",
  "love_death_robots",
  "daredevil",
  "the_boys",
  "rick_and_morty",
  "how_i_met_your_mother",
  "the_office",
];

export const HOBBIES = [
  { name: "Coding", icon: "ph:code-bold"},
  { name: "Gaming", icon: "cil:gamepad"},
  { name: "3d Modeling", icon: "carbon:chart-3d"},
  { name: "TV shows", icon: "ic:round-tv"},
  { name: "Cooking Food", icon: "ph:cooking-pot-bold"},
  { name: "Reading", icon: "ic:baseline-book"},
  { name: "Movies", icon: "mdi:movie"},
  { name: "Music", icon: "mdi:music-box-multiple"},
  { name: "Teaching", icon: "mdi:teacher"},

] as const;