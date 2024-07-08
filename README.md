# SGTechCandidacy
_Completed form in SGTech for QA Automation position_

# Description

This test will automate the submission of a form through Cypress to apply for a QA Automation position.

## Table of Contents

- [Installation](#installation)
- [Running the tests](#running-the-tests)
- [E2E Tests](#e2e-tests)
- [Fixtures](#fixtures)
- [Common functions](#common-functions)
- [Page objects](#page-objects)
- [Commands](#commands)
- [Contributions](#contributions)

## Installation

1. Clone this repository to your local machine
   
       git clone https://github.com/psrivera90/sgtech-candidacy/

2. Navigate to the project folder
   
       cd sgtech-candidacy

3. Install the dependencies
   
       npm install

4. Install Cypress
   
       npm install cypress --save-dev

## Running the tests

1. Open Cypress test runner:

        npx cypress open

## E2E Tests

The End-to-End (E2E) test file _'sgtech.cy.js'_ is located in _'cypress/e2e/sg-tech'_. This file contains a test case that simulates a scenario in wich a user completes a form to apply for a job position.

## Fixtures

The fixture file _'data.json'_ located in _'cypress/fixtures'_ contains certain data used in the tests.

## Common functions

The _'commonFunctions.js'_ file is located in _'cypress/functions'_ and contains reusable functions for testing.

## Page objects

The Page Objects files are located in _'cypress/pages'_ and contain classes representing different pages of the application. These files encapsulate the page elements and related actions for better organization and maintainability.

## Commands

The custom commands are defined in the _'cypress/support/commands.js'_ file. These commands extend Cypress with reusable actions and can be used to simplify and standardize test scripts.

## Contributions

Contributions are welcome! Please follow these steps to contribuite:

  1. Fork the repository
     
  2. Create a new branch
     
         git checkout -b feature/your-feature

  3. Make your changes
     
  4. Commit your changes

         git commit -m 'Add some feature'

  5. Push to the branch
