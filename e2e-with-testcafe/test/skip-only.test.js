// const { fixture } = require("testcafe");

fixture.skip("First Fixture")
    // Go to the application page
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    await t 
        // Enter your name
        .typeText("#developer-name", "TAU")

        // Choose the operating system
        .click("#macos")
        
        // Click submit button
        .click("#submit-button");
});

fixture("Second Fixture")
    // Go to the application page
    .page("https://devexpress.github.io/testcafe/example/");

test.skip("Second Test", async t => {
    await t 
        // Enter your name
        .typeText("#developer-name", "TAU")

        // Choose the operating system
        .click("#macos")
        
        // Click submit button
        .click("#submit-button");
});

test("Third Test", async t => {
    await t 
        // Enter your name
        .typeText("#developer-name", "TAU")

        // Choose the operating system
        .click("#macos")
        
        // Click submit button
        .click("#submit-button");
});