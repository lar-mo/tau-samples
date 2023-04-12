// const { fixture } = require("testcafe");

fixture("Navigate Example")
    // Go to the application page
    .page("https://devexpress.github.io/testcafe/example/");

test("navigate test", async t => {
    await t 
        .navigateTo("http://google.com");
});