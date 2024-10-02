// Tạo file test3.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 3: Todo page”.
// a. Thêm mới 100 todo item có nội dung “Todo <i>”
// b. Xoá các todo có số lẻ

import { test } from '@playwright/test';
test('Todo page', async ({ page }) => {
  await test.step('Navigate to the Material Playwright Page', async () => {
    await page.goto(' https://material.playwrightvn.com/');
  });
  await test.step('Click on “Bài học 3: Todo page”', async () => {
    await page.locator('a[href="03-xpath-todo-list.html"]').click();
  });
  await test.step('Add 100 new todo items with the content “Todo <i>', async () => {
    const newTask = await page.locator('input[id="new-task"]');
    for (let i = 1; i <= 100; i++) {
      await newTask.fill(`Todo ` + i);
      await page.locator('button[id="add-task"]').click();
      await page.waitForTimeout(100);
    }
  });

  await test.step('Delete odd numbered todos', async () => {
    page.on('dialog', (dialog) => dialog.accept());

    for (let i = 1; i <= 100; i++) {
      if (i % 2 !== 0) {
        await page.locator(`button[id="todo-${i}-delete"]`).click();
      }
    }
  });
});
