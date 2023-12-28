/**
 * 初期状態ではテキストは空欄
 * 入力されたテキストが送信される
 */

import { render } from "@testing-library/react";
import Form from "../../app/components/Form";
import { expect, vi } from "vitest";
import { userEvent } from "@testing-library/user-event";

const user = userEvent.setup();

describe("Form", () => {
  it("should be empty initially", async () => {
    const { getByPlaceholderText } = render(<Form />);
    const element = getByPlaceholderText("Enter text");
    expect(element).toBeInTheDocument();
    expect(element).toHaveValue("");
  });

  it("should submit the entered text and display alert", async () => {
    window.alert = vi.fn();
    const { getByPlaceholderText, getByRole } = render(<Form />);

    const input = getByPlaceholderText("Enter text");
    await user.type(input, "Hello, world!");

    expect(input).toHaveValue("Hello, world!");

    const button = getByRole("button");
    await user.click(button);

    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("submitted: Hello, world!");
  });
});
