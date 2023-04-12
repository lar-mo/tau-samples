// const { fixture } = require("testcafe");

fixture("Speed Test Fixture")
    // Go to the application page
    .page("https://devexpress.github.io/testcafe/example/");

test("Set Test Speed test", async t => {
    await t 
        .setTestSpeed(.25)

        // Enter your name
        .typeText("#developer-name", "TAU")

        // Choose the operating system
        .click("#macos")
        
        // Click submit button
        .click("#submit-button");
});