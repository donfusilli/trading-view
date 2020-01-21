const puppeteer = require('puppeteer');

// const username = process.argv[2];
// const password = process.argv[3];

async function exportData() {
    const browser = await puppeteer.launch({ headless: false, slowMo: 500 });
    const page = await browser.newPage();
    await page.goto('https://www.tradingview.com/');

    // type username and password into sign-in form, submit form
    await page.$eval('.tv-header__link.tv-header__link--signin.js-header__signin', el => el.click());
    await page.$eval('[name="username"].tv-signin-dialog__input', el => el.value = 'username');
    await page.$eval('[name="password"].tv-signin-dialog__input', el => el.value = 'password');
    await page.$eval('#signin-form button[type="submit"]', el => el.click());

    // export chart data
    await page.goto('https://www.tradingview.com/chart');
    await page.$eval('.layout__area--topleft [data-role="button"]', el => el.click());
    await page.$eval('.common-tooltip-vertical.item-2xPVYue0.item-1dXqixrD', el => el.click());
    await page.$eval('[data-name="chart-export-dialog"] button[name="submit"]', el => el.click());

    await browser.close();
}

exportData();
