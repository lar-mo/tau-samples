import { fixture, Selector } from "testcafe";

const heroTitleCard = Selector("#hero_title_card");
const contactMeBtn = Selector("#formbutton-button");

fixture('Screenshot & video fixture')
    .page('http://lar-mo.github.io');


test('screenshot test', async t => {
    await t
        .setTestSpeed(.25)
        // .takeScreenshot()
        // .takeElementScreenshot(heroTitleCard);
        .click(contactMeBtn);
});

// testcafe chrome tests/test.js -s takeOnFails=true


// Take Videos
// testcafe chrome tests/firstTest.js --video artifacts/videos
// testcafe chrome tests/firstTest.js --video artifacts/videos --video-options failedOnly=true
