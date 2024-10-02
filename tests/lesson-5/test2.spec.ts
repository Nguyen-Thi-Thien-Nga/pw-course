// Tạo file test2.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 2: Product page”, hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau:
// a. Sản phẩm 1: 2 sản phẩm
// b. Sản phẩm 2: 3 sản phẩm
// c. Sản phẩm 3: 1 sản phẩm

import { test } from '@playwright/test';

test('Product page', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.locator('a[href="02-xpath-product-page.html"]').click();
  const productId1 = await page.locator('button[data-product-id="1"]');
  for (let i = 1; i <= 2; i++) {
    await productId1.click();
    await page.waitForTimeout(100);
  }
  const productId2 = await page.locator('button[data-product-id="2"]');
  for (let i = 1; i <= 3; i++) {
    await productId2.click();
    await page.waitForTimeout(100);
  }
  await page.locator('button[data-product-id="3"]').click();
});
