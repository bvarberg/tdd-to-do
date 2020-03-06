---
to: "<%= includeStories ? `src/components/${name}/stories.tsx` : null %>"
---
import decoratorCentered from "@storybook/addon-centered/react"
import React from "react"
import { <%= name.split("/").pop() %> } from "."

export default {
  title: "<%= name %>",
  decorators: [decoratorCentered],
}

export const example = () => <<%= name.split("/").pop() %> />
