import { main } from "./index.js";
import * as library from "./library.js";
import { describe, it, expect, vi } from "vitest";

describe("index test", () => {
  it("should return 15", () => {
    const value = main();
    expect(value).toEqual(15);
  });
  it("should return 30", () => {
    const spy = vi.spyOn(library, "add").mockImplementation(() => {
      return 30;
    });

    const value = main();
    expect(value).toEqual(30);
  });
});
