const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(90 * 1000);

Before(async function () {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
    await this.page.setViewportSize({ width: 1280, height: 720 });
});

After(async function () {
    await this.browser.close();
});