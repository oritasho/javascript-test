const array = [2, 4, 7, 5, 4, 3, 8];

const b = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});

console.log(b);