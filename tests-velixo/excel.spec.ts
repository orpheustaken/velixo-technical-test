import { test, expect } from '@playwright/test';
import { loginAndOpenExcel } from '../utils/login';

test('Open Excel Online and verify a new workbook is created', async ({ page }) => {
    await loginAndOpenExcel(page);

    const sheet = page.locator('div[aria-label="Sheet1"]');
    await expect(sheet).toBeVisible();
});

test('Insert =TODAY() function and verify result', async ({ page }) => {
    await loginAndOpenExcel(page);

    await page.click('div[aria-label="Sheet1"] div[role="gridcell"]:nth-child(1)');

    await page.keyboard.type('=TODAY()');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(2000);

    const cellValue = await page.locator('div[role="gridcell"]:nth-child(1)').textContent();

    const today = new Date().toLocaleDateString();

    expect(cellValue).toContain(today);
});

