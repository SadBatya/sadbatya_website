import { test, expect } from "@playwright/test";

test("has title on my site", async ({ page }) => {
  await page.goto("https://sadbatya.ru/");

  // Выбираем заголовок "Обо мне"
  await expect(page.getByRole("heading", { name: "Обо мне" })).toBeVisible();
});