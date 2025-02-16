/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const max1 = a > b ? a : b;
  const max2 = c > b ? c : b;

  if (max1 === max2 || max1 > max2) {
    return max1;
  }
  return max2;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const onDiagonal = queen.x === queen.y && king.x === king.y;
  const onAntiDiagonal = queen.x + queen.y === king.x + king.y;
  const onSameRowOrColumn = queen.x === king.x || queen.y === king.y;

  return onDiagonal || onAntiDiagonal || onSameRowOrColumn;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return false;
  const side1 = a === b ? a + b > c : false;
  const side2 = b === c ? b + c > a : false;
  const side3 = c === a ? a + c > b : false;

  return side1 || side2 || side3;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */

function convertToRomanNumerals(num) {
  const ten = Math.floor(num / 10);
  const unit = num % 10;

  function repeatChar(char, n) {
    let num2 = n;
    let res = '';
    while (num2 > 0) {
      res += char;
      num2 -= 1;
    }
    return res;
  }

  function setUnit(x) {
    let coppyX = x;
    let res = '';
    if (coppyX === 9) {
      return 'IX';
    }
    if (coppyX === 4) {
      return 'IV';
    }
    if (coppyX >= 5) {
      res += 'V';
      coppyX -= 5;
    }
    res += repeatChar('I', coppyX);
    return res;
  }

  return repeatChar('X', ten) + setUnit(unit);
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const end = i === numberStr.length - 1;
    const currentChar = numberStr[i];

    switch (currentChar) {
      case '0':
        result += end ? 'zero' : 'zero ';
        break;
      case '1':
        result += end ? 'one' : 'one ';
        break;
      case '2':
        result += end ? 'two' : 'two ';
        break;
      case '3':
        result += end ? 'three' : 'three ';
        break;
      case '4':
        result += end ? 'four' : 'four ';
        break;
      case '5':
        result += end ? 'five' : 'five ';
        break;
      case '6':
        result += end ? 'six' : 'six ';
        break;
      case '7':
        result += end ? 'seven' : 'seven ';
        break;
      case '8':
        result += end ? 'eight' : 'eight ';
        break;
      case '9':
        result += end ? 'nine' : 'nine ';
        break;
      case '-':
        result += end ? 'minus' : 'minus ';
        break;
      case '.':
      case ',':
        result += end ? 'point' : 'point ';
        break;
      default:
        break;
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const halfLen = Math.floor(str.length / 2);

  for (let i = 0; i < halfLen; i += 1) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let ind = null;
  for (let i = 0; i < str.length; i += 1) {
    if (ind === null && str[i] === letter) {
      ind = i;
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  return getIndexOf(`${num}`, `${digit}`) !== -1;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length <= 2) return -1;

  function sumArr(arr2, num, to) {
    let sum = 0;
    for (let i = num; i < to; i += 1) {
      sum += arr2[i];
    }
    return sum;
  }

  const len = arr.length;

  for (let i = 1; i < len - 1; i += 1) {
    const leftSum = sumArr(arr, 0, i);
    const rightSum = sumArr(arr, i + 1, len);

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  function setArr(len, fill) {
    const arr = [];
    for (let i = 0; i < len; i += 1) {
      arr[i] = fill;
    }
    return arr;
  }
  const matrix = [];

  for (let i = 0; i < size; i += 1) {
    matrix[i] = setArr(size, '');
  }

  const allLen = size * size;
  let right = 0;
  let down = size - 1;
  let left = size - 1;
  let up = 0;
  let direction = 'right';

  for (let i = 1; i <= allLen; i += 1) {
    if (direction === 'right') {
      for (let y = 0; y <= down; y += 1) {
        if (!matrix[right][y]) {
          matrix[right][y] = i;
          i += 1;
        }
      }
      right += 1;
      direction = 'down';
    }

    if (direction === 'down') {
      for (let y = right; y <= down; y += 1) {
        if (!matrix[y][down]) {
          matrix[y][down] = i;
          i += 1;
        }
      }
      down -= 1;
      direction = 'left';
    }

    if (direction === 'left') {
      for (let y = down; y >= 0; y -= 1) {
        if (!matrix[left][y]) {
          matrix[left][y] = i;
          i += 1;
        }
      }
      left -= 1;
      direction = 'up';
    }

    if (direction === 'up') {
      for (let y = 0; y < size - right; y += 1) {
        if (!matrix[size - 1 - y][up]) {
          matrix[size - 1 - y][up] = i;
          i += 1;
        }
      }
      up += 1;
      i -= 1;
      direction = 'right';
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const copymatrix = matrix;
  const mainMatrix = [];
  const lenMat = matrix.length;

  for (let i = 0; i < lenMat; i += 1) {
    mainMatrix[i] = [...matrix[i]];
  }

  for (let i = lenMat - 1; i >= 0; i -= 1) {
    const setInd = lenMat - 1 - i;
    for (let y = 0; y < lenMat; y += 1) {
      copymatrix[y][setInd] = mainMatrix[i][y];
    }
  }

  return copymatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let coppyArr = arr;

//   const start = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i] <= start) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   coppyArr = [...sortByAsc(left), start, ...sortByAsc(right)];
//   return coppyArr;

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const len = str.length;
  let coppyStr = str;
  let result = '';

  for (let iter = 0; iter < iterations; iter += 1) {
    let right = '';
    let left = '';
    for (let i = 0; i < len; i += 1) {
      if (i % 2 === 0) left += coppyStr[i];
      if (i % 2 !== 0) right += coppyStr[i];
    }
    result = `${left}${right}`;
    coppyStr = result;
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arrNum = [];
  let num = number;
  while (num) {
    arrNum.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  let changeNumInd = null;
  let changeNumInd2 = null;
  for (let i = arrNum.length - 2; i >= 0; i -= 1) {
    if (arrNum[i] < arrNum[i + 1]) {
      changeNumInd = i;
      break;
    }
  }

  if (changeNumInd === null) return number;

  for (let i = arrNum.length - 1; i >= changeNumInd + 2; i -= 1) {
    if (arrNum[i] > arrNum[changeNumInd]) {
      changeNumInd2 = i;
      break;
    }
  }
  if (changeNumInd2 === null) changeNumInd2 = changeNumInd + 1;

  const head = [];
  let tail = [];
  for (let i = 0; i < arrNum.length; i += 1) {
    if (i < changeNumInd) head.push(arrNum[i]);
    if (i === changeNumInd) head.push(arrNum[changeNumInd2]);
    if (i > changeNumInd && i !== changeNumInd2) tail.push(arrNum[i]);
    if (i === changeNumInd2) tail.push(arrNum[changeNumInd]);
  }

  tail = tail.sort((a, b) => a - b);

  const arr = [...head, ...tail];
  let res2 = 0;
  for (let i = 0; i < arr.length; i += 1) {
    res2 = res2 * 10 + arr[i];
  }
  return res2;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
