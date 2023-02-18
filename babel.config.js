module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@shared": "./src/shared",
            "@screens": "./src/screens",
          },
        },
      ],
    ],
  };
};
