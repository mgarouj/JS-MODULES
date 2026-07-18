const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];   // [1, 2, 3, 4, 5] — copies + adds
const copy = [...arr1];          // shallow copy (no shared reference)

Math.max(...arr1);  // spreads into arguments: Math.max(1, 2, 3)