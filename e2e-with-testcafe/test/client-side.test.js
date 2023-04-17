const { fixture } = require("testcafe");
import { Selector, ClientFunction } from "testcafe";

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitBtn = Selector("#submit-button");

fixture("First Fixture")
    // Go to the application page
    .page("https://devexpress.github.io/testcafe/example/");

//Returns URL of the current web page
const getPageUrl = ClientFunction(() => window.location.href);
test('Check the page URL', async t => {
    await t
        .typeText(developerName, 'John Smith')
        .click(osOption)
        .click(submitBtn) // Redirects to thank you page
        .expect(getPageUrl()).contains('thank-you', 'URL contains text "thank-you"');
});
