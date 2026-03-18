import {fibs, fibsRec} from "./fibonacci.js";
import  {mergeSort} from "./mergeSort.js";


console.log("=== FIBONACCI TESTS ===");
console.log(fibs(8));
console.log(fibsRec(8));

console.log("\n=== MERGE SORT TESTS ===");
console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));             
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));