export function split(str: string, del: string) {
  return str.split(del);
}

export function parse(text: string): string[] {
  console.log("hello?");
  const parts = split(text, " ");
  return parts;
}
