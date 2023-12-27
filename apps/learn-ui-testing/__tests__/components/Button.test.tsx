import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../../app/components/Button";

describe("Button", () => {
  it("should render a button with the given label", () => {
    render(<Button label="ボタン" onClick={() => alert("click")} />);

    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("ボタン");
  });
});
