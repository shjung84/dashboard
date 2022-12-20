const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  publicPath: "/dashboard/",
  // publicPath: process.env.NODE_ENV === "production" ? "/dashboard/" : "/",
  outputDir: "docs",
};
