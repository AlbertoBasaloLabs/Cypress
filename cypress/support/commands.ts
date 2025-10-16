import { login } from "./login.function";

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
    }
  }
}
Cypress.Commands.add("login", login());
