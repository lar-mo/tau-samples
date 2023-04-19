import Eyes from '@applitools/eyes-testcafe';
const eyes = new Eyes();

fixture`Hello world`
  .page('https://applitools.com/helloworld')
  .afterEach(async () => eyes.close())
  .after(async () => eyes.waitForResults());
  
test('Cookies', async t => {
  await eyes.open({
      appName: 'Hello World!',
      testName: 'My first JavaScript test!',
      browser: [{ width: 800, height: 600, name: 'firefox' }],
      t
  });
  await eyes.checkWindow('Main Page');
  await t.click('button')
  await eyes.checkWindow('Click!');
});