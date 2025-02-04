function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else if (typeof a === 'string' && typeof b === 'string'){
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'number'){
    return a + b.toString();
  } else if (typeof a === 'number' && typeof b === 'string'){
    return a.toString() + b;
  } else {
    return "Invalid input";
  }
}

let result1 = addSafe(5, 10); // 15
let result2 = addSafe("hello", " world"); // "hello world"
let result3 = addSafe(5, " world"); // "5 world"
let result4 = addSafe("hello", 5); // "hello5"
let result5 = addSafe(true, 5); // "Invalid input"
console.log(result1, result2, result3, result4, result5); 