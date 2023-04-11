const { chromium, devices } = require('playwright');
const iPhone = devices['iPad Pro 11'];

// async/await pattern
( async() => {
    // function code
    const browser = await chromium.launch({headless: false, slowMo: 300});
    const context = await browser.newContext({
        ...iPhone, 
        permissions:['geolocation'],
        geolocation: { longitude: -122.117611, latitude: 45.612917},
        locale: 'fr-FR'
    });
    const page = await context.newPage();
    await page.goto('https://maps.google.com/');
    await page.waitForTimeout(5000); // do not use in production

    // close the browser
    await browser.close();
})();