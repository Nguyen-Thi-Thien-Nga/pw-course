// Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 1: Register Page”
// a. Nhập đầy đủ các thông tin, click button register

import { test } from '@playwright/test';

test('Register user successfully', async ({ page }) => {
  await page.goto(' https://material.playwrightvn.com/');
  await page.locator('a[href="01-xpath-register-page.html"]').click();
  await page
    .locator('input[id="username"]')
    .pressSequentially('Thien Nga', { delay: 100 });
  await page.locator('input[id="email"]').fill('test1@gmail.com');
  await page.locator('input[id="female"]').check();
  await page.locator('input[id="reading"]').check();
  await page.locator('input[id="traveling"]').check();
  await page.locator('input[id="cooking"]').check();
  await page
    .locator('select[id="interests"]')
    .selectOption(['Technology', 'Music']);
  await page.locator('select[id="country"]').selectOption('Canada');
  await page.locator('input[id="dob"]').fill('1994-02-22');
  await page
    .locator('input[id="profile"]')
    .setInputFiles('test-data/test1.txt');
  await page.locator('textarea[id="bio"]').fill('Biography desscription');
  await page.locator('input[id="rating"]').fill('2');
  await page.locator('input[id="favcolor"]').fill('#e66465');
  await page.locator('div[class=tooltip]').hover();
  await page.locator('label.switch').click();
  await page.locator('button[type="submit"]').click();
});
