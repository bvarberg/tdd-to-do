---
to: cypress/integration/<%= h.changeCase.snakeCase(description) %>_spec.js
---
/// <reference path="../support/index.d.ts" />

describe("<%= description %>", () => {
  it("...")
})
