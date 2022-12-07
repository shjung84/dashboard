const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  base: "",
});

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dashboard/" : "/",
  outputDir: "docs",
};
