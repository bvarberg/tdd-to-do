/* eslint-disable @typescript-eslint/no-var-requires */
const i = require("inflection")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        type: "input",
        name: "name",
        message: "Component name:",
      })
      .then(({ name }) => {
        return {
          name: name
            .split("/")
            .map(part => i.camelize(part, false))
            .join("/"),
        }
      })
  },
}
