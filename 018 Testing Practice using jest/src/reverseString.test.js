import { capitalize } from "./capitalize";

test("capitalizes the first letter of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});
