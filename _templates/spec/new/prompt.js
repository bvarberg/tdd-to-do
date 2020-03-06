/* eslint-disable @typescript-eslint/no-var-requires */
const i = require("inflection")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        type: "input",
        name: "description",
        message: "What is the spec testing",
      })
      .then(({ description }) => ({
        description,
      }))
  },
}
