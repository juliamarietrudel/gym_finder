const esbuild = require("esbuild");
const sassPlugin = require("esbuild-sass-plugin").sassPlugin;
const copyStaticFiles = require("esbuild-copy-static-files");

const config = {
  entryPoints: ["app/javascript/application.js"],
  bundle: true,
  outdir: "app/assets/builds",
  publicPath: "assets",
  plugins: [
    sassPlugin(),
    copyStaticFiles({
      src: "./node_modules/bootstrap-icons/font/fonts",
      dest: "app/assets/builds/fonts",
    }),
  ],
  loader: {
    ".js": "jsx",
    ".woff": "file",
    ".woff2": "file",
  },
};

if (process.argv.includes("--watch")) {
  esbuild.context(config).then((context) => {
    context.watch();
  });
} else {
  esbuild.build(config).catch(() => process.exit(1));
}
