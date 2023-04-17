// const { fixture } = require("testcafe");

fixture("First Fixture")
    // Go to the application page
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    await t 
        // Enter your name
        .typeText("#developer-name", "Demo")

        // Choose the operating system
        .click("#macos")
        
        // Click submit button
        .click("#submit-button");
});