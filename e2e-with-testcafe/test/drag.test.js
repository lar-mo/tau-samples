import { Selector } from "testcafe";

const testUrl = "https://devexpress.github.io/testcafe/example/";
const sliderToggle = Selector("input#tried-test-cafe");
// const sliderToggle = Selector("label").withText("I have tried TestCafe");
const sliderCtrl = Selector("#slider");

// url https://devexpress.github.io/testcafe/example/
fixture("slider test fixture")
    .page(testUrl)

test("slider test", async t => {
    await t
        .setTestSpeed(.5)
        // check box "I have tried TestCafe" to unlock slider
        .click(sliderToggle)
        // move slider to selected position
        .drag(sliderCtrl,360,0, {offsetX:10, offsetY:10});
})