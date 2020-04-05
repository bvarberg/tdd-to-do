/// <reference path="../support/index.d.ts" />

describe("user creates first task", () => {
  context("when there are no tasks yet", () => {
    it("allows the user to create and record a task", () => {
      cy.visit("/")

      cy.findByText("Create new task", { exact: false }).click()
      cy.findByPlaceholderText("Task description")
        .click()
        .type("My first task")
      cy.findByText("Save").click()
      cy.findByText("Refresh").click()

      cy.findAllByTestId("task").should("have.length", 1)
    })
  })
})
