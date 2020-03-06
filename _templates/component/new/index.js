/* eslint-disable @typescript-eslint/no-var-requires */
const i = require("inflection")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Component name:",
        },
        {
          default: "N",
          message: "Include stories?",
          name: "includeStories",
          type: "toggle",
        },
        {
          default: "N",
          message: "Include tests?",
          name: "includeTests",
          type: "toggle",
        },
      ])
      .then(({ name, includeStories, includeTests }) => {
        return {
          name: i.camelize(name, false),
          includeStories,
          includeTests,
        }
      })
  },
}
