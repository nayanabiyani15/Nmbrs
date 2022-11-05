
import {userDetails, page, login, recovery} from "../fixtures/locators";

describe('Nmbrs login functionality', () => {

  beforeEach(() => {
    cy.visit(page.login);
  })

  context('Successful scenarios', () => {
    it('Test successful login scenario', () => {
      cy.login(userDetails.email, userDetails.password)
      cy.url().should('include', page.home)
    })

    it('Test successful signoff scenario', () => {
      cy.login(userDetails.email, userDetails.password).logoff()
      cy.url().should('include', page.login)
    })
  })

  context('Unsuccessful scenarios', ()=> {
    it('Login with invalid username', () => {
      let email = "random.random@gmail.com"
      let actualErrorText = "Invalid combination email/password. Please try again."

      cy.login(email, userDetails.password)
      cy.get(login.errorText).should('have.text', actualErrorText)
    })

    it('Login with invalid password', () => {
      let password = "random.random@gmail.com"
      let actualErrorText = "Invalid combination email/password. Please try again."

      cy.login(userDetails.email, password)
      cy.get(login.errorText).should('have.text', actualErrorText)
    })
  })

  context('Validate forget password route', () => {
    it('test the forget password link redirection', () => {
      cy.get(login.forgetPassword).click()
      cy.url().should('include', page.login).get(recovery.email).should('be.visible')
    })

  })
})