const calculator = {
  add: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return NaN;
    }
    return a + b;
  },

  subtract: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return NaN;
    }
    return a - b;
  },

  multiply: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return NaN;
    }
    return a * b;
  },

  divide: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number" || b === 0) {
      return NaN;
    }
    return a / b;
  },
};

export default calculator;
