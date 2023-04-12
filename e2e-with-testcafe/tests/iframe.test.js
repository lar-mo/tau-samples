import { fixture, Selector } from "testcafe";

const iFrameName = Selector("#mce_0_ifr"); // why iframe#mce_0_ifr
const textArea = Selector("#tinymce"); // wny body#tinymce.mce-content-body

fixture(`iFrame fixture`)
    // open the url
    .page("http://the-internet.herokuapp.com/iframe");

test("iframe test", async t => {
    await t
        // switch to iframe
        .switchToIframe(iFrameName)

        // click inside
        .click(textArea)

        // remove text
        .pressKey('ctrl+a delete')

        // add new text "TAU"
        .typeText(textArea, "Hello from TAU")

        // verify new innertext
        .expect(textArea.innerText).contains('TAU')

        // put focus outside iframe
        .switchToMainWindow();

});