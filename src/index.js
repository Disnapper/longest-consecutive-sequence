module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return 1;

  let obj = {};
  let chainArr = [0];
  let lengthchainArr = 1;

  for (let i = 0, l = array.length; i < l; i++) {
    if (!obj[array[i]]) {
      if (obj[array[i] - 1] && obj[array[i] + 1]) {
        chainArr[lengthchainArr] = [obj[array[i] - 1], obj[array[i] + 1]];
        lengthchainArr++;
      } else if (obj[array[i] - 1]) {
        obj[array[i]] = obj[array[i] - 1];
        chainArr[obj[array[i] - 1]]++;
      } else if (obj[array[i] + 1]) {
        obj[array[i]] = obj[array[i] + 1];
        chainArr[obj[array[i] + 1]]++;
      } else {
        obj[array[i]] = lengthchainArr;
        chainArr[lengthchainArr] = 1;
        lengthchainArr++;
      }
    }
  }

  for (let i = 1; i < lengthchainArr; i++) {
    if (Array.isArray(chainArr[i])) {
      chainArr[chainArr[i][0]] += chainArr[chainArr[i][1]] + 1;
      chainArr[i] = 0;
    }
  }
  return Math.max.apply(null, chainArr);
}