import { fixture, Selector } from "testcafe";

const selectMenu = Selector("#preferred-interface");
const optionSelect1 = selectMenu.find('option');
const optionSelect2 = Selector("#preferred-interface > option:nth-child(3)");
const submitBtn = Selector("#tinymce");

fixture(`Select element from select menu`)
    // open the url
    .page("https://devexpress.github.io/testcafe/example/");

test("dropdown test", async t => {
    await t
     
    // open drop down
    // #preferred-interface
    .click(selectMenu)

    // select "both"
    // #preferred-interface > option:nth-child(3)
    // .click(optionSelect1.withText('Both')); // method from lesson
    .click(optionSelect2);                // my alternative

    // press submit
    // #submit-button
    // .click(submitBtn); 

});