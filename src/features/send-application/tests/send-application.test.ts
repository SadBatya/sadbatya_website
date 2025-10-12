import { test, expect } from "@playwright/test";

test("Отправка заявки пользователя через форму", async ({ page }) => {
  await page.goto("/");

  const nameInput = page.getByTestId("application-form-name");
  const telegramInput = page.getByTestId("application-form-telegram");
  const messageInput = page.getByTestId("application-form-description");
  const submitButton = page.getByTestId("application-form-button");

  await nameInput.fill("Владимир");
  await telegramInput.fill("@sadbatya");
  await messageInput.fill("Привет, хочу присоединиться к проекту!");

  await submitButton.click();

  await expect(page.locator("text=Данные успешно отправлены")).toBeVisible({
    timeout: 10000,
  });
});

test("Проверка на отправку пустой формы", async ({ page }) => {
  await page.goto("/");

  const submitButton = page.getByTestId("application-form-button");

  submitButton.click();

  const errors = page.locator("text=Минимум 2 символа");

  await expect(errors.nth(0)).toBeVisible({
    timeout: 5000,
  });

  // проверяем второй элемент
  await expect(errors.nth(1)).toBeVisible({
    timeout: 5000,
  });
});
