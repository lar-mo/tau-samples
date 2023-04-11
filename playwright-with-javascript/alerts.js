const { chromium } = require('playwright');

// async/await pattern
( async() => {
    // function code
    const browser = await chromium.launch({headless: false, slowMo: 600});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts');

    // logic to handle the alerts
    // confirmButton
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('#confirmButton');
    
    // promptButton
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('my text is this');
    });
    await page.click('#promtButton'); // note the typo in the id - promt vs prompt

    // close the browser
    await browser.close();
})();