import { handlers } from "../../mock/handler";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useApi } from "../../src/hooks/useApi";
import { expect } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const server = setupServer(...handlers);
const url = "http://localhost:3002/test";

describe("useApi", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe("GET", () => {
    it("should set data when request succeeded", async () => {
      const { result } = renderHook(() => useApi(url));

      expect(result.current.data).toBeNull();
      await waitFor(() => {
        expect(result.current.data).toBe("Get data");
      });
    });

    it("should set error when request failed", async () => {
      server.use(http.get(url, () => new HttpResponse(null, { status: 500 })));

      const { result } = renderHook(() => useApi(url));

      expect(result.current.error).toBeNull();
      await waitFor(() => {
        expect(result.current.error).toBe("エラーが発生しました");
      });
    });
  });

  describe("POST", () => {
    it("should set data when request succeeded", async () => {
      const { result } = renderHook(() => useApi(url));

      let response;
      await act(async () => {
        response = await result.current.postData({});
      });
      expect(response!.data).toBe("Post data");
    });

    it("should set error when request failed", async () => {
      server.use(http.post(url, () => new HttpResponse(null, { status: 500 })));

      const { result } = renderHook(() => useApi(url));
      await act(async () => {
        await result.current.postData({});
      });
      await waitFor(() => {
        expect(result.current.error).toBe("エラーが発生しました");
      });
    });
  });
});
