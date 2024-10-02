// Tạo file test3.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 3: Todo page”.
// a. Thêm mới 100 todo item có nội dung “Todo <i>”
// b. Xoá các todo có số lẻ

import { test } from '@playwright/test';
test('Todo page', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.locator('a[href="03-xpath-todo-list.html"]').click();
  const newTask = await page.locator('input[id="new-task"]');
  for (let i = 1; i <= 100; i++) {
    await newTask.fill(`Todo ` + i);
    await page.locator('button[id="add-task"]').click();
    await page.waitForTimeout(100);
  }

  page.on('dialog', (dialog) => dialog.accept());

  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      await page.locator(`button[id="todo-${i}-delete"]`).click();
    }
  }
});
