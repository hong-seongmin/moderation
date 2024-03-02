module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "@babel/preset-react", // React 프리셋 추가
      "@babel/preset-env",
      "@babel/preset-flow",
      "@babel/preset-typescript",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            assets: "./assets",
          },
        },
      ],
    ],
  };
};
