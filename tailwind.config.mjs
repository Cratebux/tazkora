const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#112C70",
        neutral: "#D9D9D9",
        neutral2: "#8A8B93",
        neutral3: "#595B6A",
        neutral4: "#A1A2AA",
        violet: "#5B58EB",
        teal: "#161827",
        profilebg: "#0D0E17",
        itembg: "#1E2135",
        modalInput: "#12131F",
        blue: "#416EF0",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "banner-bg": "url('../../public/images/herobanner.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), flowbite.plugin()],
};
