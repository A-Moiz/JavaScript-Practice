var twoSum = function (nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output.push(i, j);
      }
    }
  }

  return output.length === 0
    ? "Target unreachable with numbers in array"
    : output;
};

const array = [2, 1, 5, 3];
const target = 5;
console.log(twoSum(array, target));
