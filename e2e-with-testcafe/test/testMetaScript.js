/*
testcafe chrome my-tests --fixture-meta device=mobile,env=production
testcafe chrome my-tests --test-meta device=mobile,env=production
*/

const { fixture } = require("testcafe");

fixture.meta('version','1')("First Fixture")
    .page("https://devexpress.github.io/testcafe/");

test.meta('env','production')
.page("https://devexpress.github.io/testcafe/example/")
("Prod Test", async t =>{
    await t 
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button");
});

test.meta('env','UAT').page("https://devexpress.github.io/testcafe/example/")("UAT Test", async t =>{await t.typeText("#developer-name","TAU").click("#macos").click("#submit-button");});