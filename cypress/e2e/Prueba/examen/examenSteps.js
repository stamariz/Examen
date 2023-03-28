import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";

Given("Validar Login Exitoso", () => {
  //cy.visit('https://automationexercise.com/login', { failOnStatusCode: false }).wait(5000)
  cy.request({
    method: "POST",
    url: "https://automationexercise.com/api/verifyLogin",
    form: true,
    body: {
      email: "danielchr12@outlook.com",
      password: "prueba1234",
    }
  }).should(({body}) => {
    const prueba = JSON.parse(body)
    expect(prueba.responseCode, 'Status').to.eq(200)
    expect(prueba.message, 'Message').to.eq('User exists!')
  })
})

Given("Validar Login Errado", () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/verifyLogin",
      form: true,
      body: {
        email: "daniel.prueba@outlook.com",
        password: "prueba1234",
      }
    }).should(({body}) => {
      const prueba = JSON.parse(body)
      console.log(body)
      expect(prueba.responseCode, 'Status').to.eq(404)
      expect(prueba.message, 'Message').to.eq('User not found!')
    })
  })

And("Ingresar Usuario", () => {
  cy.get('.login-form > form > [type="email"]').type("danielchr12@outlook.com");
})

And("Ingresar Contraseña", () => {
  cy.get('[type="password"]').type("prueba1234");
})

And("Seleccionar botón Login", () => {
  cy.get(".login-form > form > .btn").click();
})
