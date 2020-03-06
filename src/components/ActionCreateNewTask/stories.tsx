import decoratorCentered from "@storybook/addon-centered/react"
import React from "react"
import { ActionCreateNewTask } from "."

export default {
  title: "ActionCreateNewTask",
  decorators: [decoratorCentered],
}

export const example = () => <ActionCreateNewTask />
