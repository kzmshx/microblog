import { test } from "@playwright/test";
import { config } from "@repo/example-warikan-config";
import axios from "axios";

const apiUrl = `http://localhost:${config.apiPort}`;
const webUrl = `http://localhost:${config.webPort}`;

test.describe("割り勘アプリ", () => {
  test.beforeEach(async ({ page }) => {
    await axios.get(apiUrl + "/init");
    await page.goto(webUrl);
  });
});
