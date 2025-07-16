/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        100: "100",
        1000: "1000",
      },
      fontFamily: {
        quickSand: ["Quicksand", "sans-serif"],
      },

      backgroundImage: {},
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        custom_shadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
        button_pressed_shadow: "-5px 6px #222",
      },
      brightness: {
        25: ".25",
        175: "1.75",
      },
      transformOrigin: {
        "top-left-1/3-3/4": "33% 75%",
        "top-bottom-1/2": "50% 50%",
      },
      keyframes: {
        loader: {
          "15%": {
            transform: "translateX(0)",
          },
          "45%": {
            transform: " translateX(230px)",
          },
          "65%": {
            transform: " translateX(230px)",
          },
          "95%": {
            transform: "translateX(0)",
          },
        },
        swipe: {
          "0%": {
            margin: 0,
            transform: "rotate(0deg)",
          },

          "100%": {
            "margin-right": "20px",
            transform: "rotate(-5deg)",
          },
        },
        updown: {
          "0%": {
            transform: "translateX(-10%)",
          },
          "50%": {
            transform: "translateX(10%)",
          },
          "100%": {
            transform: "translateX(-10%)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "loading-dot": {
          "0%": {
            top: "60px",
            height: "5px",
            "border-radius": "50px 50px 25px 25px",
            transform: "scaleX(1.7)",
          },

          "40%": {
            height: "20px",
            "border-radius": "50%",
            transform: "scaleX(1)",
          },
          "100%": {
            top: "0%",
          },
        },
        shadow: {
          "0%": {
            transform: "scaleX(1.5)",
          },

          "40%": {
            transform: "scaleX(1)",
            opacity: 0.7,
          },

          "100%": {
            transform: "scaleX(.2)",
            opacity: 0.4,
          },
        },
      },
      animation: {
        loading: "loader infinite 2s",
        loading_dot_v2: "loading-dot alternate infinite .5s",
        handswipe: "swipe 0.8s alternate infinite",
        shadow: "shadow .5s alternate infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionDelay: {
        400: "400ms",
        500: "500ms",
        1500: "1500ms",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
