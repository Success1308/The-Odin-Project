import caesarCipher from "./caesarCipher";

describe("caesarCipher function", () => {
  test("Basic shift", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("Case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("Handling punctuation and spaces", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("Large shift with wrap-around", () => {
    expect(caesarCipher("abc", 26)).toBe("abc");
  });

  test("Negative shift (left shift)", () => {
    expect(caesarCipher("abc", -1)).toBe("zab");
  });

  test("Large negative shift", () => {
    expect(caesarCipher("abc", -27)).toBe("zab");
  });

  test("Empty string", () => {
    expect(caesarCipher("", 5)).toBe("");
  });

  test("Shift of 0", () => {
    expect(caesarCipher("abc", 0)).toBe("abc");
  });

  test("Mixed case input", () => {
    expect(caesarCipher("HeLlO", 3)).toBe("KhOoR");
  });

  test("Non-alphabetic characters", () => {
    expect(caesarCipher("Hello, 123!", 3)).toBe("Khoor, 123!");
  });

  test("Large positive shift", () => {
    expect(caesarCipher("abc", 30)).toBe("efg");
  });

  test("Large negative shift beyond -26", () => {
    expect(caesarCipher("abc", -30)).toBe("wxy");
  });
});
