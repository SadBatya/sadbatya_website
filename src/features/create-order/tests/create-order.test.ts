import { test, expect } from "@playwright/test";

test("Форма заказа услуг должна успешно отправиться", async ({ page }) => {
  page.goto("/");

  const nameInput = page.getByTestId("create-order-form-name");
  const telegramInput = page.getByTestId("create-order-form-telegram");
  const descriptionTextarea = page.getByTestId("create-order-form-description");
  const serviceCard = page.getByTestId("service-card");

  const submitButton = page.getByTestId("create-order-form-button");

  await serviceCard.first().click();

  await nameInput.fill("Владимир");
  await telegramInput.fill("@sadbatya");
  await descriptionTextarea.fill("Хочу заказать данные услуги");

  await submitButton.click();

  await expect(page.locator("text=Данные успешно отправлены")).toBeVisible({
    timeout: 10000,
  });
});
