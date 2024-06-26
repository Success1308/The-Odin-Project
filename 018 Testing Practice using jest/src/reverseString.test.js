import { reverseString } from "./reverseString";

test("String can be reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Empty string returns empty string", () => {
  expect(reverseString("")).toBe("");
});

test("String with special characters", () => {
  expect(reverseString("!dlrow ,olleH")).toBe("Hello, world!");
});

test("String with numbers", () => {
  expect(reverseString("12345")).toBe("54321");
});

test("String with whitespace", () => {
  expect(reverseString("   hello  ")).toBe("  olleh   ");
});

test("String with mixed uppercase and lowercase letters", () => {
  expect(reverseString("HelloWorld")).toBe("dlroWolleH");
});

test("String with non-alphanumeric characters", () => {
  expect(reverseString("$#@!*&")).toBe("&*!@#$");
});

test("String with emoji", () => {
  expect(reverseString("🙂👍")).toBe("👍🙂");
});

test("String with newline characters", () => {
  expect(reverseString("Hello\nWorld")).toBe("dlroW\nolleH");
});

test("String with leading and trailing spaces", () => {
  expect(reverseString("  hello  ")).toBe("  olleh  ");
});

test("String with non-string input (number)", () => {
  expect(reverseString(123)).toBe(""); // Handle non-string input gracefully
});

test("String with non-string input (object)", () => {
  expect(reverseString({ key: "value" })).toBe("");
});

test("String with null input", () => {
  expect(reverseString(null)).toBe("");
});

test("String with undefined input", () => {
  expect(reverseString(undefined)).toBe("");
});

// Add more tests as needed
