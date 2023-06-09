import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  server: {
    port: 5634,
  },
  build: {
    lib: {
      entry: "src/arkitekt/index.tsx",
      name: "arkitekt",
    },

    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "cancelable-promise",
        "@jhnnsrs/mikro",
        "@jhnnsrs/fakts",
        "@jhnnsrs/herre",
        "@jhnnsrs/datalayer",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
