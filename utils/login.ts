import { Page } from '@playwright/test';

export async function loginToMicrosoft(page: Page) {
    const email = process.env.MICROSOFT_EMAIL!;
    const password = process.env.MICROSOFT_PASSWORD!;

    await page.goto('https://login.microsoftonline.com/');

    await page.fill('input[type="email"]', email);
    await page.click('input[type="submit"]');

    await page.waitForSelector('input[type="password"]', { state: 'visible' });
    await page.fill('input[type="password"]', password);
    await page.click('input[type="submit"]');

    await page.waitForTimeout(2000);
    const staySignedIn = await page.locator('text=Stay signed in?').count();
    if (staySignedIn) {
        await page.click('input[type="submit"]');
    }

    await page.waitForLoadState('networkidle');
}

export async function loginAndOpenExcel(page: Page) {
    await loginToMicrosoft(page);

    await page.goto('https://www.office.com/launch/excel');

    await page.waitForLoadState('networkidle');

    await page.click('text=New blank workbook');

    await page.waitForSelector('div[aria-label="Sheet1"]');
}
