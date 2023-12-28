/**
 * increment
 *   should increment count
 * decrement
 *   should decrement count
 */

import { act, renderHook } from "@testing-library/react";
import useCounter from "../../app/hooks/useCounter";
import { expect } from "vitest";

describe("useCounter", () => {
  it("should increment count", () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
  });

  it("should decrement count", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.count).toBe(100);

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(99);

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(98);
  });
});
