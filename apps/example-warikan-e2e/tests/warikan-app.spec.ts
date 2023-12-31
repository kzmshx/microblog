import { expect, Page, test } from "@playwright/test";
import { config } from "@repo/example-warikan-config";
import axios from "axios";

const apiUrl = `http://localhost:${config.apiPort}`;
const webUrl = `http://localhost:${config.webPort}`;

const submitCreateGroupForm = async (page: Page, groupName: string | null, memberNames: string | null) => {
  if (groupName !== null) {
    const groupNameInput = page.getByLabel("グループ名");
    await groupNameInput.fill(groupName);
  }
  if (memberNames !== null) {
    const memberNamesInput = page.getByLabel("メンバー");
    await memberNamesInput.fill(memberNames);
  }
  const submitButton = page.getByText("グループを作成");
  await submitButton.click();
};

const submitAddExpenseForm = async (
  page: Page,
  expenseName: string | null,
  amount: number | null,
  payer: string | null,
) => {
  if (expenseName !== null) {
    const expenseNameInput = page.getByLabel("支出名");
    await expenseNameInput.fill(expenseName);
  }
  if (amount !== null) {
    const amountInput = page.getByLabel("金額");
    await amountInput.fill(amount.toString());
  }
  if (payer !== null) {
    const payerSelect = page.getByLabel("支払うメンバー");
    await payerSelect.selectOption(payer);
  }
  const submitButton = page.getByText("支出を登録");
  await submitButton.click();
};

test.describe("割り勘アプリ", () => {
  test.beforeEach(async ({ page }) => {
    await axios.get(apiUrl + "/init");
    await page.goto(webUrl);
  });

  test.afterEach(async () => {
    await axios.get(apiUrl + "/init");
  });

  test.describe("グループ作成画面", () => {
    test("グループ名とメンバー名を入力して送信すると、支出一覧へ遷移する", async ({ page }) => {
      await submitCreateGroupForm(page, "group1", "平田, 田中, 中林");
      await expect(page).toHaveURL(/.*\/group\/group1/);
    });

    test("不正な入力で送信すると、バリデーションエラーが発生する", async ({ page }) => {
      await submitCreateGroupForm(page, null, null);
      await expect(page.getByText("グループ名は必須です")).toBeVisible();
      await expect(page.getByText("メンバーは2人以上必要です")).toBeVisible();
    });
  });

  test.describe("支出一覧画面", () => {
    test.beforeEach(async ({ page }) => {
      await submitCreateGroupForm(page, "group1", "平田, 田中");
      await page.waitForURL(/.*\/group\/group1/);
    });

    test("支出を追加すると、精算方法が更新される", async ({ page }) => {
      await submitAddExpenseForm(page, "expense1", 1000, "田中");
      await expect(page.getByText("平田 → 田中500円")).toBeVisible();
    });

    test("不正な入力で送信すると、バリデーションエラーが発生する", async ({ page }) => {
      await submitAddExpenseForm(page, null, null, null);
      await expect(page.getByText("支出名は必須です")).toBeVisible();
      await expect(page.getByText("金額は1円以上の整数で必須です")).toBeVisible();
      await expect(page.getByText("支払うメンバーは必須です")).toBeVisible();
    });
  });
});
