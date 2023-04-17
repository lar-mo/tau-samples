// await t.expect(actual).eql( expected, message, options);
// await t.expect(Selector('#elementid').innerText).eql('txt', 'check element text', {timeout: 500});

/*
import { Selector } from 'testcafe';

fixture 'Example page'
    .page 'https://devexpress.github.io/testcafe/example/';

test('Check property of element', async t => {
    const developerNameInput = Selector('#developer-name');

    await t
        .expect(developerNameInput.value).eql('', 'input is empty')
        .typeText(developerNameInput, 'John Doe')
        .expect(developerNameInput.value).eql('John Doe', 'input contains text "John Doe"');
})
*/

const { fixture } = require("testcafe");
import { Selector } from "testcafe";

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitBtn = Selector("#submit-button");

fixture("First Fixture")
    // Go to the application page
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    await t 
        // verify that name field is empty on page load
        .expect(developerName.value).eql('', 'input is empty')

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