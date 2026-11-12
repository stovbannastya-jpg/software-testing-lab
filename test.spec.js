// Імпортуємо інструменти Playwright
const { test, expect } = require('@playwright/test');

// Тест 1. Перевірка відкриття сайту
test('Перевірка відкриття сайту', async ({ page }) => {
    const response = await page.goto('https://www.atbmarket.com/');
    expect(response.status()).toBe(200);
});

// Тест 2. Перевірка назви сторінки
test('Перевірка назви сторінки', async ({ page }) => {
    await page.goto('https://www.atbmarket.com/');
    await expect(page).toHaveTitle(/АТБ/);
});

// Тест 3. Перевірка заголовка сторінки
test('Перевірка заголовка сторінки', async ({ page }) => {
    await page.goto('https://www.atbmarket.com/');
    await expect(
        page.getByText('Каталог', { exact: false }).first()
    ).toBeVisible();
});
