# run test: ./node_modules/.bin/wdio ./wdio.conf.js
# or npm run node_wdio

Feature: Google Searching

  Scenario: Search from the search bar produces correct links
    Given A web browser is at the Google home page
    When The user enters "cucumber" into the search bar
    Then links related to "cucumber" are shown on the results page