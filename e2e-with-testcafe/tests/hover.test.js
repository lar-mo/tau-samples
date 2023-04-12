import { Selector } from "testcafe";

const testUrl = "https://devexpress.github.io/testcafe/example/";
const populateBtn = Selector("input#populate");


// url https://devexpress.github.io/testcafe/example/
fixture("hover test fixture")
    .page(testUrl)

test("hover test", async t => {
    await t
        .setTestSpeed(.5)
        .hover(populateBtn);

})