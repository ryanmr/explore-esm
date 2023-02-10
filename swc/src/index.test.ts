import { main } from ".";
import * as library from "./library";

describe("index test", () => {
  it("should return 15", () => {
    const value = main();
    expect(value).toEqual(15);
  });
  it("should return 30", () => {
    const spy = jest.spyOn(library, "add").mockImplementation(() => {
      return 30;
    });

    const value = main();
    expect(value).toEqual(30);
  });
});
