import { capitalize } from "./capitalize";

test("capitalizes the first letter of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("does not change the rest of the string", () => {
  expect(capitalize("world")).toBe("World");
});

test("handles an empty string", () => {
  expect(capitalize("")).toBe("");
});

test("handles a single character", () => {
  expect(capitalize("a")).toBe("A");
});
