module.exports = {
  "main": {
    name: "main",
    file: "main.js",
    children: {
      "mod1": {
        name: "module1",
        file: "lib/module1.js"
      },
      "mod2": {
        name: "module2",
        file: "lib/module2.js"
      }
    }
  }
};