---
to: src/components/<%= name %>/index.tsx
---
import React from "react"

interface Props {}

export function <%= name.split("/").pop() %>({}: Props) {
  return null
}
