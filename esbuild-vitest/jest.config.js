const fs = require("node:fs");

const swcrc = JSON.parse(fs.readFileSync(".swcrc", "utf8"));

module.exports = {
  roots: ["./src/"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", swcrc],
  },
};
