const { fixture } = require("testcafe");
import { Selector } from "testcafe";

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitBtn = Selector("#submit-button");

fixture("First Fixture")
    // Go to the application page
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    const developerNameElement = await developerName.with({visibilityCheck:true})();
    await t 
        // verify that name field is empty on page load
        .expect(developerNameElement.value).eql('', 'input is empty')

        // Enter your name
        .typeText(developerName, "TAU person")

        // verify name field contains typed input
        // .expect(developerName.value).eql('TAU', 'input contains TAU')
        .expect(developerName.value).contains('TAU', 'input contains TAU')

        // Choose the operating system
        .click(osOption)
        
        // Click submit button
        .click(submitBtn);
});

test("wait mechanism", async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click(osOption)

        .expect(developerName.exists).ok()

        // Enter your name
        .typeText(developerName, "TAU person")

        .expect(developerName.value).eql('TAU person')

        // Click submit button
        .click(submitBtn);
});