# Cypress Tests

Project contains automated tests of web page https://automationexercise.com/ with use of Cypress.

Tests are executed by Github actions after every push to repo.

Automates test cases:

- Add and remove product from card
- Login and logout User
- Register and login with new user
- Search product
- Filter products

Requrements:
Install Node.js

Install Cypress:

```
npm install cypress --save-dev
```

Install dependencies:

```
npm install
```

Install TypeScript

```
npm install typescript @types/node @types/mocha --save-dev
```

Open Cypress app:

```
npx cypress open
```

Run all tests:

```
npx cypress run
```

Run ui tests:

```
npm run uiTests
```

Run tests on specific browser: chrome, edge, firefox:

```
npm run uiTests-chrome
npm run uiTests-edge
npm run uiTests-firefox
```

### Test Raport

After each run, test raport is crated: cypress/reports

