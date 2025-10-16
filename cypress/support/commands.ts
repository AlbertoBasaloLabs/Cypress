import { login, loginAs, loginWith } from "./login.function";

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
      loginAs(alias: string): Chainable<void>;
      loginWith(email: string, password: string): Chainable<void>;
    }
  }
}
Cypress.Commands.add("login", login);
Cypress.Commands.add("loginAs", loginAs);
Cypress.Commands.add("loginWith", loginWith);
