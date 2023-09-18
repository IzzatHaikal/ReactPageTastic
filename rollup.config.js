import pkg from "./package.json" assert { type: "json" };
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.js",
  exclude: "src/stories",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }],
      ],
    }),
    resolve(),
    commonjs(),
    terser(),
    scss({ fileName: "pagetastic.css" }),
    copy({
      targets: [{ src: "types/index.d.ts", dest: "dist" }],
    }),
  ],
  external: Object.keys(pkg.peerDependencies),
};
