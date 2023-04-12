import { Selector } from "testcafe";

// variables for elements
const fileSelectBtn = Selector("input#file-upload");
const uploadFileBtn = Selector("input#file-submit");

fixture("File upload fixture")
    // open page
    .page("http://the-internet.herokuapp.com/upload");

test("File upload test", async t => {

    await t
        // choose file & select file
        .setFilesToUpload(fileSelectBtn, '../../upload/kids.jpg')

        // option
        // .clearUpload(fileSelectBtn)
        // .setFilesToUpload(fileSelectBtn, '../../upload/kids.jpg')

        // upload
        .click(uploadFileBtn);

        // verify redirect page

})
