import { test, expect } from '@playwright/test';
import { loginToMicrosoft } from '../utils/login';

test('Login to Microsoft Account', async ({ page }) => {
    await loginToMicrosoft(page);
    await expect(page).toHaveURL(/.*office.com.*/);
});
