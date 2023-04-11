const { chromium } = require('playwright');

// async/await pattern
( async() => {
    // function code
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // take a screenshot
    // await page.goto('https://applitools.com'); // example 1
    // await page.screenshot({path: 'screenshot.png'});

    // await page.goto('https://www.roadtripsandhikes.org/'); // example 2
    // const thumbnail = await page.$('#rt_tile > img:nth-child(1)');
    // await thumbnail.screenshot({path: 'thumbnail.png'});

    await page.goto('https://applitools.com'); // example 3
    await page.screenshot({path: 'screenshot-full.png', fullPage: true});

    // close browser
    await browser.close();
})();