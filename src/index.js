module.exports = function reverse (n) {
  let strings = String(n);
  let arr = strings.split("");
  let arr1 = arr.reverse("");
  let strings2 = arr1.join("");
  let numberReverse = + strings2;
  return numberReverse;
}
