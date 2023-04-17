const { fixture } = require("testcafe");
import { Selector } from "testcafe";

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitBtn = Selector("#submit-button");

fixture("First Fixture")
    // Go to the application page
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    await t 
        // Enter your name
        .typeText(developerName, "TAU")

        // Choose the operating system
        .click(osOption)
        
        // Click submit button
        .click(submitBtn);
});