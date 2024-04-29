function findShortestStringRecursive(arr) {
  // type your code here
  //loop through the array, returning 
  if (arr.length === 1) {
    return arr[0];
  }

  const shortest = findShortestStringRecursive(arr.slice(1))



  return arr[0].length <= shortest.length ? arr[0] : shortest


  // function findShortestString(arr) {
  //   return arr.reduce((shortest, string) =>
  //     string.length < shortest.length ? string : shortest
  //   );

  // const sumWithInitial = array1.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   initialValue,
  // );
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
