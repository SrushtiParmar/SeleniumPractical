const { Builder, By, Key } = require('selenium-webdriver');
require('chromedriver');

describe('Search Ducks from Google', async () => {
    let driver;
    
    it('Open Google and search duck', async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://google.com');
        await driver.findElement(By.name('q')).sendKeys('ducks', Key.ENTER);
    });

    it('verify the search result of google', async () => {
    })

    after(async () => {
        await driver.quit();
    })
});