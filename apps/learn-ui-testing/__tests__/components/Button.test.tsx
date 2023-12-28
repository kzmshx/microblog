import { render } from "@testing-library/react";
import Button from "../../app/components/Button";

describe("Button", () => {
  it("should render a button with the given label", () => {
    const { getByRole } = render(<Button label="ボタン" onClick={() => alert("click")} />);

    const element = getByRole("button");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("ボタン");
  });
});
