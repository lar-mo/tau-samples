const createTestCafe = require('testcafe');

const testcafe   = await createTestCafe('localhost', 1337, 1338);
const liveRunner = testcafe.createLiveModeRunner();

await liveRunner
    .src('tests/firstTest.js')
    .browsers('chrome')
    .run();

await testcafe.close();


/*
https://testcafe.io/documentation/403842/guides/intermediate-guides/live-mode

const createTestCafe = require('testcafe');

const testcafe = await createTestCafe('localhost', 1337, 1338);

try {
    const liveRunner = testcafe.createLiveModeRunner();

    await liveRunner
        .src('tests/test.js')
        .browsers('chrome')
        .run();
}
finally {
    await testcafe.close();
}
*/