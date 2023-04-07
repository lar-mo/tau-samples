// Initialize the eyes SDK
const { Eyes, Target, RectangleSize } = require('@applitools/eyes-webdriverio');

const eyes = new Eyes();

// Set your private API key.
eyes.setApiKey(process.env.APPLITOOLS_API_KEY);

// Allows you to gather your tests into separate groupings within the same file
describe('Applitools Visual Test', function () {

// represents a single test case
    // it("test", () => {
    //     // Navigate the browser to the "hello world example" web-site.
    //     browser.url('https://applitools.com/helloworld');
    // });

    it('Page should look ok', async function () {

        // Navigate the browser to the "hello world example" web-site.
        browser.url('https://applitools.com/helloworld/');

        try {

            // Set browser to fullscreen
            // browser.windowHandleFullscreen();                // v4.14.4
            browser.maximizeWindow();                           // v8.7.0

            // Get the current size of the screen
            // const viewportSize = browser.getViewportSize();  // v4.14.4
            const viewportSize = browser.getWindowSize();       // v8.7.0
            // var viewportSize_portrait  = {width: 375, height: 812};                 
            // eyes.setViewportSize(viewportSize_portrait);

            // Start the test and set the browser's viewport size to 
            await eyes.open(browser, 'Hello World Example', 'New Visual UI Test', viewportSize);
            // await eyes.open(browser, 'Viewport Example', 'Mobile', { width: 375, height:  812}); // doesn't work v4.14.4
             // await eyes.open(browser, 'Viewport Example', 'Mobile', new RectangleSize(375, 812)); // doesn't work v8.7.0
            //  await eyes.open(browser, 'Viewport Example', 'Mobile'); // doesn't work v8.7.0

            // Visual checkpoint #1.
            await eyes.check('Main Page', Target.window());

            // Click the "Click me!" button.
            // await browser.click('button');                   // v4.14.4
            await $('button').click();                          // v8.7.0

            // Visual checkpoint #2.
            await eyes.check('Click!', Target.window());

            // End the test.
            await eyes.close();

        } finally {

            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();

        }
    });
});

