import { main } from ".";
import * as library from "./library";
import { describe, it, expect, vi, afterEach, beforeEach } from "vitest";

vi.mock("./extension", async () => {
  const mod = await vi.importActual<typeof import("./extension")>(
    "./extension"
  );
  return {
    ...mod,
    parse: vi.fn().mockImplementation(() => ["a", "b", "c", "d", "e"]),
  };
});

describe("index test", () => {
  it("should return 10", () => {
    const value = main();
    expect(value).toEqual(10);
  });

  it("should return 30", () => {
    const spy = vi.spyOn(library, "add").mockImplementation(() => {
      return 30;
    });

    const value = main();
    expect(value).toEqual(30);
  });
});
