
const plugin = require('tailwindcss/plugin')

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },

    extend: {
      colors: {
        skin: {
          "base": withOpacity("--color-text-base"),
          "accent": withOpacity("--color-accent"),
          "inverted": withOpacity("--color-text-base"),
          "card": withOpacity("--color-card"),
          "card-muted": withOpacity("--color-card-muted"),
          "fill": withOpacity("--color-fill"),
          "line": withOpacity("--color-border"),
        }
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
      },

      typography: {
        DEFAULT: {
          css: {
            pre: {
              color: false,
            },
            code: {
              color: true,
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),   plugin(({ addVariant }) => {
    addVariant('dark', '&[data-theme="dark"]')
  })],
};
