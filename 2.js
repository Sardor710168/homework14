function printPascalTriangle(n) {
  let triangle = [];

  for (let i = 0; i < n; i++) {
    triangle[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }

  for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(n - i - 1);
    let row = triangle[i].join(" ");
    console.log(spaces + row);
  }
}

printPascalTriangle(4);
