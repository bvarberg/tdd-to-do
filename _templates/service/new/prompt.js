/* eslint-disable @typescript-eslint/no-var-requires */
const i = require("inflection")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Service name:",
        },
      ])
      .then(({ name }) => {
        return {
          name: i.camelize(name, false),
        }
      })
  },
}
