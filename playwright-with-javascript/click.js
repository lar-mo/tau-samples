const { chromium } = require('playwright');

// async/await pattern
( async() => {
    // function code
    const browser = await chromium.launch({headless: false, slowMo: 2500});
    const page = await browser.newPage();
    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    // click on the keynotes
    await page.click('#t1 > table > tr:nth-child(6) > td:nth-child(6) > button');
    await page.click('#t2 > table > tr:nth-child(3) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(15) > button');
    await browser.close();
})();