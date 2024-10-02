// Tạo file test4.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 4: Personal notes”.
// a. b.
// Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn (khoảng 3 dòng) tại báo https://vnexpress.net/khoa-hoc,
// Thực hiện search theo tiêu đề bài báo bất kì

import { test } from '@playwright/test';

test('Personal notes', async ({ page }) => {
  await test.step('Navigate to the Vnexpress Page', async () => {
    await page.goto('https://vnexpress.net', {
      timeout: 60000,
    });
  });
  await test.step('Click on menu tab Khoa Học', async () => {
    await page.locator('a[href="/khoa-hoc"]').click();
  });
  const titles: any[] = [];
  const contents: any[] = [];
  await test.step('Get data for titles and contents from the VnExpress page', async () => {
    for (let i = 5; i < 15; i++) {
      const title = await page
        .locator(`.title-news a[data-medium="Item-${i}"]`)
        .getAttribute('title');
      titles.push(title);
      const content = await page
        .locator(`.description a[data-medium="Item-${i}"]`)
        .innerText();
      contents.push(content);
    }
  });
  await test.step('Navigate to the Material Playwright Page', async () => {
    await page.goto(' https://material.playwrightvn.com/');
  });
  await test.step('Click on “Bài học 4: Personal notes”', async () => {
    await page.locator('a[href="04-xpath-personal-notes.html"]').click();
  });
  await test.step('Add data title and contents', async () => {
    for (let j = 0; j <= titles.length - 1; j++) {
      await page.locator('input[id="note-title"]').fill(titles[j]);
      await page.locator('textarea[id="note-content"]').fill(contents[j]);
      await page.locator('button[id="add-note"]').click();
      await page.waitForTimeout(500);
    }
  });
  await test.step('Search by title', async () => {
    await page.locator('input[id="search"]').fill(titles[0]);
  });
});
