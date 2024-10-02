// Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 1: Register Page”
// a. Nhập đầy đủ các thông tin, click button register

import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { format } from 'date-fns';

test('Register user successfully', async ({ page }) => {
  await test.step('Navigate to the Material Playwright Page', async () => {
    await page.goto(' https://material.playwrightvn.com/');
  });
  await test.step('Click on “Bài học 1: Register Page” ', async () => {
    await page.locator('a[href="01-xpath-register-page.html"]').click();
  });
  await test.step('Fill in all the information ', async () => {
    await page.locator('input[id="username"]').fill(faker.person.fullName());
    await page.locator('input[id="email"]').fill(faker.internet.email());
    await page.locator('input[id="female"]').check();
    await page.locator('input[id="reading"]').check();
    await page.locator('input[id="traveling"]').check();
    await page.locator('input[id="cooking"]').check();
    await page
      .locator('select[id="interests"]')
      .selectOption(['Technology', 'Music']);
    await page.locator('select[id="country"]').selectOption('Canada');
    await page
      .locator('input[id="dob"]')
      .fill(format(faker.date.birthdate(), 'yyyy-MM-dd'));
    await page
      .locator('input[id="profile"]')
      .setInputFiles('test-data/test1.txt');
    await page.locator('textarea[id="bio"]').fill(faker.food.description());
    await page.locator('input[id="rating"]').fill('2');
    await page.locator('input[id="favcolor"]').fill('#e66465');
    await page.locator('div[class=tooltip]').hover();
    await page.locator('label.switch').click();
  });
  await test.step('Click on “Bài học 1: Register Page” ', async () => {
    await page.locator('button[type="submit"]').click();
  });
});
