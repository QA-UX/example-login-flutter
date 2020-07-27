const wd = require('wd');
const assert = require('assert');
const { byValueKey } = require('appium-flutter-finder');

const { Before, Given, When, Then, After } = require('cucumber');

const PORT = 4723;

const config = {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: './build/app/outputs/apk/debug/app-debug.apk', // relative to root of project
    appPackage: 'com.example.loginapp',
    appActivity: 'com.example.loginapp.MainActivity',
    automationName: 'uiautomator2'
};
const driver = wd.promiseChainRemote('localhost', PORT);

Before({ timeout: 120000 }, async () => {
    await driver.init(config);
    await driver.sleep(6000); // wait for app to load
});

After(async () => {
    await driver.quit();
});

Given('I am in app home page', { timeout: 30000 }, async () => {
    const inputEmail = byValueKey('inputEmail');
    // assert.equal(inputEmail, true);
    //   let inputEmail = await driver.element("Key","inputEmail");
    //   inputEmail.type("john@john.com")
});

When('I click on "Arrow Right" button', async () => {
    const buttonLogin = byValueKey('buttonLogin');
    //await buttonLogin.click();
    await driver.touchAction({
        action: 'tap',
        element: { elementId: buttonLogin }
    });
      let loginButton = await driver.hasElementByXPath("arrow_forward");
    //   loginButton.click();
});

Then('I access the welcome screen', { timeout: 2000 }, async () => {
    await driver.setImplicitWaitTimeout(1500);
    let message = await driver.hasElementByXPath("//*[@text='Bem Vindo']");
    assert.equal(message, true);
});