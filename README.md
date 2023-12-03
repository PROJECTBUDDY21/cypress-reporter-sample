# cypress-reporter-sample
This project has Cypress configured with reporter
junit
mocha

Step1 : Run Sample Rect App in local
cd .\cypress-reporter-configuration\ 
npm start


Step2 : In another command prompt run cypress test cases in headless mode
cd .\cypress-reporter-configuration\ 
npm run cypress:run

###############################################
Result
###############################################
1) Mochawesome Result 
cypress-reporter-configuration\MochaResult\mochawesome.json

2) cypress-junit-reporter Result
cypress-reporter-configuration\CypressJUnitResults\results-[hash].xml

3) mocha-junit-reporter Result
cypress-reporter-configuration\test-results.xml

