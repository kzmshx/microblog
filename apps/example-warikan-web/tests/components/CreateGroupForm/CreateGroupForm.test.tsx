import userEvent from "@testing-library/user-event";
import CreateGroupForm from "../../../src/components/CreateGroupForm/CreateGroupForm";
import { render } from "@testing-library/react";

const onSubmit = vi.fn();

const user = userEvent.setup();

describe("CreateGroupForm", () => {
  it("should submit form", async () => {
    const { getByLabelText, getByText } = render(<CreateGroupForm onSubmit={onSubmit} />);

    const nameInput = getByLabelText("グループ名");
    await user.type(nameInput, "旅行");

    const membersInput = getByLabelText("メンバー");
    await user.type(membersInput, "太郎, 花子");

    const submitButton = getByText("グループを作成");
    await user.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({ name: "旅行", members: ["太郎", "花子"] });
  });

  it("should display error message when validation failed", async () => {
    const { getByText } = render(<CreateGroupForm onSubmit={onSubmit} />);

    const submitButton = getByText("グループを作成");
    await user.click(submitButton);

    expect(getByText("グループ名は必須です")).toBeInTheDocument();
    expect(getByText("メンバーは2人以上必要です")).toBeInTheDocument();
  });
});
