import { parse } from "./extension";
import { add } from "./library";

export function main() {
  const text = "hello world"; // adds 2
  const pieces = parse(text);

  return add(5, pieces.length);
}
