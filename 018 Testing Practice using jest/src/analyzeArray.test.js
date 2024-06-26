import analyzeArray from "./analyzeArray";

// Test cases

test("Analyzing an array of numbers", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Empty array should throw an error", () => {
  expect(() => analyzeArray([])).toThrow("Input should be a non-empty array");
});

test("Non-array input should throw an error", () => {
  expect(() => analyzeArray("string")).toThrow(
    "Input should be a non-empty array"
  );
});

test("Array with negative numbers", () => {
  const result = analyzeArray([-1, -5, -3, -2]);
  expect(result).toEqual({
    average: -2.75,
    min: -5,
    max: -1,
    length: 4,
  });
});

test("Array with one element", () => {
  const result = analyzeArray([10]);
  expect(result).toEqual({
    average: 10,
    min: 10,
    max: 10,
    length: 1,
  });
});

test("Array with decimal numbers", () => {
  const result = analyzeArray([1.5, 2.5, 3.5]);
  expect(result).toEqual({
    average: 2.5,
    min: 1.5,
    max: 3.5,
    length: 3,
  });
});

test("Array with duplicate numbers", () => {
  const result = analyzeArray([3, 1, 5, 2, 3, 4, 1]);
  expect(result).toEqual({
    average: 2.857,
    min: 1,
    max: 5,
    length: 7,
  });
});
