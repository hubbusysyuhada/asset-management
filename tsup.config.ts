import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  // entry: ["./index.ts", "./icons/*.ts", "./illustrations/*.ts"],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  splitting: false,
  sourcemap: true,
});