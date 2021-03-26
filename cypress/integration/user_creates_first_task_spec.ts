/// <reference path="../support/index.d.ts" />

describe("user creates first task", () => {
  context("when there are no tasks yet", () => {
    it("allows the user to create and record a task", () => {
      cy.visit("/")

      cy.findByTestId("Button:CreateTask").click()
      cy.findByTestId("Input:TaskDescription")
        .click()
        .type("My first task")
      cy.findByTestId("Button:SaveTask").click()

      cy.findAllByTestId("ListItemTask").should("have.length", 1)
    })
  })
})
