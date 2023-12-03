import { test, expect } from "@playwright/test";

test("Page navigation", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle("User Management");

  await page.goto("http://localhost:3000/dashboard");
  await expect(page.getByText("Dashboard")).toBeVisible();

  await page.getByRole("row").first().click();
  await expect(page.getByText("Phone")).toBeVisible();

  await page.goto("http://localhost:3000/dashboard/new-user");
  await expect(page.getByText("Create new user")).toBeVisible();
});

test("get started link", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Click the get started link.
  await page.getByRole("button").click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText("Dashboard")).toBeVisible();
});
