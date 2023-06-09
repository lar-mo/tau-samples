// Initialize the eyes SDK
const { Eyes, Target } = require('@applitools/eyes-webdriverio');

const eyes = new Eyes();

// Set your private API key.
eyes.setApiKey(process.env.APPLITOOLS_API_KEY);

// Allows you to gather your tests into separate groupings within the same file
describe('Batches', function () {

    it("test", () => {
        // Navigate the browser to the "hello world example" web-site.
        browser.url('https://applitools.com/helloworld');
    });

    // represents a single test case
    it('Page should look ok', async function () {

        // Navigate the browser to the "hello world example" web-site.
        browser.url('http://the-internet.herokuapp.com/tables');

        try {

            // Set browser to fullscreen
            browser.maximizeWindow();

            // Get the current size of the screen
            const viewportSize = browser.getWindowSize();

            // Set Batch Name and ID
            eyes.setBatch("Batch Example", "First Batch");

            // Start the test and set the browser's viewport size to 
            await eyes.open(browser, 'Test Batches', 'Last Name filter', viewportSize);

            // await eyes.click('#table1 > thead > tr > th:nth-child(1) > span');
            await $('#table1 > thead > tr > th:nth-child(1) > span').click();

            // Visual checkpoint #1.
            await eyes.check('Check Last Name', Target.window());

            // End the test.
            await eyes.close();


            // Start the test and set the browser's viewport size to 
            await eyes.open(browser, 'Test Batches', 'First Name filter', viewportSize);

            await $('#table1 > thead > tr > th:nth-child(2) > span').click();

            // Visual checkpoint #1.
            await eyes.check('Check First Name', Target.window());

            // End the test.
            await eyes.close();



            // Start the test and set the browser's viewport size to 
            await eyes.open(browser, 'Test Batches', 'Due filter', viewportSize);

            await $('#table1 > thead > tr > th:nth-child(4) > span').click();

            // Visual checkpoint #1.
            await eyes.check('Check Amount Due', Target.window());

            // End the test.
            await eyes.close();

        } finally {

            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();

        }
    });
});

