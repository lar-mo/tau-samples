fixture("My Fixture")
    .page("http://google.com");

test
    .page("http://aretemm.net")
("my test", async t => {
    await t
        .takeScreenshot();
});

// you need to import {ClientFunction} from "testcafe";
// get style attribute of a Selector
// see http://devexpress.github.io/testcafe/example/
const getStyleAttributeOf = ClientFunction((selector) => {
    const element = selector();
    return element.getAttribute('style');
});

const field = Selector('div#slider > span');
const styles = await getStyleAttributeOf(field) || '';
console.log(`styles = '${styles}'`);
