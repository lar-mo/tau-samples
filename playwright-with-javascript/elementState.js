const { chromium } = require('playwright');

// async/await pattern
( async() => {
    // function code
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/automation-practice-form');

    // print the element state
    const firstName = await page.$('#firstName');
    const sportsCheck = await page.$('#hobbies-checkbox-1');
    const submitBtn = await page.$('#submit');

    console.log("firstName.isDisabled: " + await firstName.isDisabled());
    console.log("firstName.isEnabled: " + await firstName.isEnabled());
    console.log("firstName.isEditable: " + await firstName.isEditable());

    console.log("sportsCheck.isChecked: " + await sportsCheck.isChecked());
    console.log("sportsCheck.isVisible: " + await sportsCheck.isVisible());

    console.log("submitBtn.isHidden: " + await submitBtn.isHidden());
    console.log("submitBtn.isVisible: " + await submitBtn.isVisible());

    // close the browser
    await browser.close();
})();