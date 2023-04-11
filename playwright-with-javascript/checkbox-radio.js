const { firefox } = require('playwright');

// async/await pattern
( async() => {
    // function code
    const browser = await firefox.launch({headless: false, slowMo: 600});
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
    // check the second checkbox
    const checkboxes = await page.$$('#main div :nth-child(1) > input[type="checkbox"]');
    await checkboxes[1].check();
    await checkboxes[0].uncheck();
    // select the second radio button
    const radios = await page.$$('#main div :nth-child(1) > input[type="radio"]');
    await radios[1].check();
    await browser.close();
})();