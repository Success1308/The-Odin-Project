export function reverseString(str) {
  if (typeof str !== "string") {
    return "";
  }

  return Array.from(str).reverse().join("");
}
