export const rotate = (matrix, direction = "clockwise") => {
  var result = [],
    n = matrix.length,
    m = matrix[0].length,
    i,
    j,
    row;

  for (i = 0; i < m; ++i) {
    row = [];
    for (j = 0; j < n; ++j) {
      row.push(
        direction === "clockwise" ? matrix[n - j - 1][i] : matrix[j][m - i - 1]
      );
    }
    result.push(row);
  }

  return result;
};

export const transposeTimes = (array, times = 0) => {
  let result = [...array];
  for (let i = 0; i < times; i++) {
    result = rotate(result);
  }

  return result;
};

export const ShapeIterator = shape => {
  return {
    [Symbol.iterator]: function*() {
      for (let [y, col] of Object.entries(shape)) {
        for (let [x, val] of Object.entries(col)) {
          yield { x: Number(x), y: Number(y), val };
        }
      }
    }
  };
};

export const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

export const lerp = (v0, v1, t) => v0 * (1 - t) + v1 * t;

export const toObject = arr => {
  let rv = {};
  for (let i = 0; i < arr.length; ++i) rv[i] = arr[i];
  return rv;
};
