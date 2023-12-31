import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3002/test", () => {
    return new HttpResponse("Get data");
  }),
  http.post("http://localhost:3002/test", () => {
    return new HttpResponse("Post data");
  }),
];
