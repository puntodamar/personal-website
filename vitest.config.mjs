import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

const r = (p) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
    root: r("./"),                 // important in monorepos
    test: {
        environment: "jsdom",
        globals: true,
        exclude: ["**/.nuxt/**", "**/dist/**"]  // keep tests out of Nuxt build dir
    },
    resolve: {
        alias: {
            "~": r("./"),
            "@": r("./"),
        },
    },
});
