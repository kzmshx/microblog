/**
 * ボタンをクリックすると、非同期でテキストが変更される
 */

import { render, waitFor } from "@testing-library/react";
import AsyncComponent from "../../app/components/AsyncComponent";
import { expect } from "vitest";
import { userEvent } from "@testing-library/user-event";

const user = userEvent.setup();

describe("AsyncComponent", () => {
  it("should update text after clicking the button", async () => {
    const { getByText, getByRole } = render(<AsyncComponent />);

    const p = getByText("Initial text");
    expect(p).toBeInTheDocument();

    const button = getByRole("button");
    await user.click(button);

    expect(p).toHaveTextContent("Loading...");

    await waitFor(
      () => {
        expect(p).toHaveTextContent("Updated text");
      },
      { interval: 50, timeout: 3000 },
    );
  });
});
