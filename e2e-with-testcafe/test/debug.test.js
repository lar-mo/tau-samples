// const { fixture } = require("testcafe");
import { Selector } from 'testcafe';

const developerName = Selector("#developer-name");

fixture("First Fixture")
    // Go to the application page
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    await t
    
        // .debug()
        
        // Enter your name
        .typeText(developerName, "TAU")

        // verify input is correct
        .expect(developerName.value).eql('TAU')

        // Choose the operating system
        .click("#macos")
        
        // Click submit button
        .click("#submit-button");
});

// testcafe firefox tests/debug.test.js  --debug-on-fail