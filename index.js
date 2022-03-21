function hasTargetSum(array, target) {
  const viewedNo = {};

  for (const no of array) {
    // n steps
    const complement = target - no;
    if (complement in viewedNo) return true;
    viewedNo[no] = true;
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}

function findSock(object) {
  if (object.sock) return "sock";
}

/*
  create an object to keep track of numbers we've already viewed
  iterate through each item in the array
   for current iteration get a number that adds to the target (x = target - no)
    check if any key on our object is the complement
      if so, return true otherwise false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
