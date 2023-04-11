const { webkit } = require('playwright');

// async/await pattern
( async() => {
    // function code
    const browser = await webkit.launch({headless: false, slowMo: 600});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/frames');

    // logic to handle the iframes
    const frame1 = await page.frame({url: /\/sample/});
    const heading1 = await frame1.$('h1');
    console.log(await heading1.innerText());

    // close the browser
    await browser.close();
})();