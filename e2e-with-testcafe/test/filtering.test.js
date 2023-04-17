// testcafe chrome tests/filtering.test.js -t 'Prod Test'

const { fixture } = require("testcafe");

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/")
    .beforeEach( async t => {
        await t
            // maximize browser window
            .maximizeWindow()
            // slow down the test by 50%
            .setTestSpeed(0.5)
            // set page load timeout (deprecated method)
            // .setPageLoadTimeout(0);
    })

test
.timeouts({ pageLoadTimeout: 0 })
.page("https://devexpress.github.io/testcafe/example/")
("Prod Test", async t =>{
    await t 
        .typeText("#developer-name","Larry")
        .click("#macos")
        .click("#submit-button");
});

test
.timeouts({ pageLoadTimeout: 0 })
.page("https://devexpress.github.io/testcafe/example/")
("UAT Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#linux")
        .click("#submit-button");
});