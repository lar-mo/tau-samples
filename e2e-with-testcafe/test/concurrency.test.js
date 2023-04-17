// before

// beforeEach

// after

// afterEach

const { fixture } = require("testcafe");

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/")
    .beforeEach( async t => {
        await t
            // maximize browser window
            // .maximizeWindow()
            // slow down the test by 50%
            .setTestSpeed(0.5)
            // set page load timeout (deprecated method)
            // .setPageLoadTimeout(0);
    })

test
.timeouts({ pageLoadTimeout: 0 })
.page("https://devexpress.github.io/testcafe/example/")
("1st Test", async t =>{
    await t 
        .typeText("#developer-name","Larry")
        .click("#macos")
        .click("#submit-button");
});

test
.timeouts({ pageLoadTimeout: 0 })
.page("https://devexpress.github.io/testcafe/example/")
("2nd Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#linux")
        .click("#submit-button");
});

test
.timeouts({ pageLoadTimeout: 0 })
.page("https://devexpress.github.io/testcafe/example/")
("3rd Test", async t =>{
    await t
        .typeText("#developer-name","Bob")
        .click("#windows")
        .click("#submit-button");
});