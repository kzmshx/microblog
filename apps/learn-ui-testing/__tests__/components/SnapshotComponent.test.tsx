/**
 * - スナップショットテストの仕組み
 *   - 初回にスナップショットを作成し、次回以降はスナップショットと比較して差分があればテストが失敗する。
 *   - これにより意図しないDOMの変更を検知できる。
 * - 意図したDOMの変更をする場合は、`vitest -u`でスナップショットを更新する必要がある。
 * - CIでスナップショットテストを実行する場合は、スナップショットの結果をGitにコミットする必要がある。
 */

import { render } from "@testing-library/react";
import SnapshotComponent from "../../app/components/SnapshotComponent";

describe("SnapshotComponent", () => {
  it("should pass snapshot test", () => {
    const { container } = render(<SnapshotComponent text="Hello, snapshot test!" />);
    expect(container).toMatchSnapshot();

    // const { container } = render(<SnapshotComponent text="Yeah, snapshot text!" />);
    // expect(container).toMatchSnapshot();
  });
});
