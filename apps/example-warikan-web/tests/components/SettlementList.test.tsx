import { Settlement } from "../../src/type";
import SettlementList from "../../src/components/SettlementList/SettlementList";
import { render } from "@testing-library/react";
import { expect } from "vitest";

describe("SettlementList", () => {
  test("snapshot renders", () => {
    // Arrange
    const settlements: Settlement[] = [{ from: "A", to: "B", amount: 10 }];
    // Act
    const { container } = render(<SettlementList settlements={settlements} />);
    // Assert
    expect(container).toMatchSnapshot();
  });
});
