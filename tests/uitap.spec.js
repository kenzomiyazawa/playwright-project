const { test, expect } = require('@playwright/test');

test('Dynamic ID', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/');
    await expect (page).toHaveTitle('UI Test Automation Playground');

    await page.getByRole('link',{ name: 'Dynamic ID' }).click();
    await page.getByRole('button',{name: 'Button with Dynamic ID'}).click();

});
