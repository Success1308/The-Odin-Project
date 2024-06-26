import calculator from "./calculator";

describe("Calculator", () => {
  test("add function", () => {
    expect(calculator.add(1, 2)).toBe(3);

    expect(calculator.add(-5, 3)).toBe(-2);
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(10, -5)).toBe(5);
  });

  test("subtract function", () => {
    expect(calculator.subtract(5, 3)).toBe(2);

    expect(calculator.subtract(-5, 3)).toBe(-8);
    expect(calculator.subtract(0, 0)).toBe(0);
    expect(calculator.subtract(10, -5)).toBe(15);
  });

  test("multiply function", () => {
    expect(calculator.multiply(5, 3)).toBe(15);

    expect(calculator.multiply(-5, 3)).toBe(-15);
    expect(calculator.multiply(0, 5)).toBe(0);
    expect(calculator.multiply(2, -4)).toBe(-8);
  });

  test("divide function", () => {
    expect(calculator.divide(10, 2)).toBe(5);

    expect(calculator.divide(5, 0)).toBeNaN();
    expect(calculator.divide(-10, 5)).toBe(-2);
    expect(calculator.divide(0, 5)).toBe(0);
  });
});
