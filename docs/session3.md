# 3 Formularios e interacciones con Cypress

## Conexión 

## Conceptos

## Concrección práctica

### Formularios

```ts
/**
 * The register form
 *   should have a form with 5 clean inputs and a submit button disabled
 *   when the users fills the form correctly
 *     should allow to submit the form
 *   when the user fills the form incorrectly
 *     should disabled the submit button when start
 *     should not mark the email as invalid if it is empty, but list in error section
 *     should mark the email as invalid if it is not an email
 *   when the user resets the form
 *     should clear the form when the reset button is clicked
 */
```
- Comandos `type`, `clear`, `check`, `uncheck`, `select`, `submit`, `reset`.
- Afirmaciones sobre formularios y sus elementos.
- Patrón : Arrange - Act - Assert.
  
- To Do: Variables de entorno y fixtures


## Conclusión