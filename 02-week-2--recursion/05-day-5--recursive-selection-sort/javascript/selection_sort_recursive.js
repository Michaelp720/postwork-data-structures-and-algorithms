function selectionSortRecursive(arr) {
  // type your code here
  //base case
  if (arr.length === 1 || arr.length === 0){
    return arr
  }
  

  //recursive case - move min to arr[0] then 
  //selectionSortRecursive(arr.slice(1))
  const min = Math.min(...arr)
  const idx = arr.indexOf(min)
  arr.splice(idx, 1)
  let sorted = [min, ...selectionSortRecursive(arr)]
  

  return sorted




  // function selectionSort(arr) {
  //   const sorted = [];
  
  //   while (arr.length > 0) {
  //     const min = Math.min(...arr);
  //     const idx = arr.indexOf(min);
  
  //     sorted.push(min);
  //     arr.splice(idx, 1);
  //   }
  
  //   return sorted;
  // }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
