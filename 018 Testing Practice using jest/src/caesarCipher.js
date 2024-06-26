export default function caesarCipher(str, shift) {
  function shiftChar(char, shift) {
    let code = char.charCodeAt(0);
    if (char >= "A" && char <= "Z") {
      code = ((((code - 65 + shift) % 26) + 26) % 26) + 65;
    } else if (char >= "a" && char <= "z") {
      code = ((((code - 97 + shift) % 26) + 26) % 26) + 97;
    }
    return String.fromCharCode(code);
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      result += shiftChar(char, shift);
    } else {
      result += char;
    }
  }

  return result;
}
