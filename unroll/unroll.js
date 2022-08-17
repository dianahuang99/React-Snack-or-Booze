function unroll(matrix) {
  let top = 0;
  let left = 0;
  let right = matrix[0].length;
  let bottom = matrix.length;
  const res = [];
  while (left < right && top < bottom) {
    for (var i = left; i < right; i += 1) {
      res.push(matrix[top][i]);
    }

    top += 1;

    for (var i = top; i < bottom; i += 1) {
      res.push(matrix[i][right - 1]);
    }

    right -= 1;

    if (!(left < right && top < bottom)) {
      break;
    }

    for (var i = right - 1; i > left - 1; i -= 1) {
      res.push(matrix[bottom - 1][i]);
    }

    bottom -= 1;

    for (var i = bottom - 1; i > top - 1; i -= 1) {
      res.push(matrix[i][left]);
    }

    left += 1;
  }
  return res;
}

module.exports = unroll;
