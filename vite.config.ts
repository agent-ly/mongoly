import { defineConfig } from "vite";
import swc from "rollup-plugin-swc";

// I use SWC to allow usage of decorators in my tests
export default defineConfig({
  plugins: [
    swc({
      jsc: {
        parser: {
          syntax: "typescript",
          dynamicImport: true,
          decorators: true,
        },
        target: "es2022",
        transform: {
          decoratorMetadata: true,
        },
      },
    }),
  ],
  esbuild: false,
});