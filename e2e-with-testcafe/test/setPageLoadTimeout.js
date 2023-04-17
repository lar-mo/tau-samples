// const { fixture } = require("testcafe");

fixture("Set page timeout Fixture")
    // Go to the application page
    .page("https://devexpress.github.io/testcafe/");

test("Set page timeout Test 1", async t => {
    await t 
        .setPageLoadTimeout(0)
        .navigateTo("https://devexpress.github.io/testcafe/example/");
});

test
    .timeouts({ pageLoadTimeout: 10000 })
    ("Set page timeout Test 2", async t => {
        await t 
            .setPageLoadTimeout(0)
            .navigateTo("https://devexpress.github.io/testcafe/example/");
    });