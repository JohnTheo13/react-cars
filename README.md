Traffic-meister
================

## Demo
Check out the live [demo](http://traffic-meister.ksulourgeio.gr)

## Project setup
1. Clone the project
1. In a terminal type ```yarn``` install dependencies
1. In a terminal type ```yarn start``` to run the project
1. In a terminal type ```yarn test``` to run your tests
1. In a terminal type ```yarn lint``` to check for lint mistakes and ```yarn lint:fix``` to fix them
1. In a terminal type ```yarn build``` to make a production ready build

## Project's Stack
This project was created with Create React apps with no build configuration
Styled-Components for the styling and typescript for type checking and dev-experience

- [Creating an App](https://github.com/facebook/create-react-app/) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
- [Redux](https://redux.js.org/) (Improvement)
- [Styled-Components](https://styled-components.com)


## Project's Best Practices and Architect
#### Motivations
- Styled-Components, if it's planned smart the components exported to a package to used in different projects (reusability)
- Redux, to handle all the business logic no you can have the same logic with different components just by using the created reducer (reusability, refactoring, maintainace) (Imporvement)
- Create React App to have a PWA ready project

### Best Practices
1. Single responsibility
1. Small Stateless Components instead of big Classes
1. Composable Components
1. Reusable
1. Meaningful
1. Declarative FP with Pure or Almost-Pure functions
1. Try to keep the Component's methods styles in the same folder

## Lint
Yes, we lint our files.   
Lint will ensure that so best practices are followed. Search the error messages and learn with that.   
Make sure that all your files are passing the lint check before open a PR.      
Use pre-commit hook that won't allow you to commit without fixing the lint alerts. (improvement)

## Unit Test
Following TDD you need first to write a small story, with an empty component and the unit tests and then we develop the component.

## Suggestions
- Commit-lint to supress branch naming commit messages and run test before pushing
- [Redux](https://redux.js.org/) to share state across different components
- [Redux sagas](https://redux-saga.js.org/) for complex async requests
- Suggested project file [structure](./structure.md)
- [Cypress](https://www.cypress.io/) for e2e and accessibility tests