/**
 * UserSearch
 *   Send API request with input when search button is clicked
 *   Display user info from API
 */

import { UserSearch } from "../../app/components/UserSearch";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import axios from "axios";

const axiosMocks = vi.hoisted(() => {
  return {
    get: vi.fn(),
  };
});

vi.mock("axios", async () => {
  const actual = await vi.importActual("axios");
  return {
    default: {
      ...actual,
      ...axiosMocks,
    },
  };
});

const user = userEvent.setup();

describe("UserSearch", () => {
  it("should send API request with input when search button is clicked", async () => {
    axiosMocks.get.mockResolvedValue({ data: { name: "Kazumasa Hirata" } });
    const { getByRole } = render(<UserSearch />);

    const input = getByRole("textbox");
    await user.type(input, "test");

    const button = getByRole("button");
    await user.click(button);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/api/users?query=test");
  });

  it("should display user info from API", async () => {
    axiosMocks.get.mockResolvedValue({ data: { name: "Kazumasa Hirata" } });
    const { getByRole, findByText } = render(<UserSearch />);

    const input = getByRole("textbox");
    await user.type(input, "test");

    const button = getByRole("button");
    await user.click(button);

    const element = await findByText("Kazumasa Hirata");
    expect(element).toBeInTheDocument();
  });
});
