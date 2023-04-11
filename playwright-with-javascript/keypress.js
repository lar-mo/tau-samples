const { chromium } = require('playwright');

// async/await pattern
( async() => {
    // function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/key_presses');

    // input something

    // method from type.js -- works but lack backspace capability
    // const input = await page.$('#target');
    // await input.type('Words of wisdom', { delay: 50 });

    await page.click('input');
    await page.keyboard.type('even a stopped click is right twice a day');

    // hit the backspace
    // await page.keyboard.press('Backspace', {delay: 400});

    await page.keyboard.down('Shift');
    for(let i = 0; i < ' twice a day'.length;i++){
        await page.keyboard.press('ArrowLeft');
    }
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(' 2xs a day');

    await browser.close();
})();