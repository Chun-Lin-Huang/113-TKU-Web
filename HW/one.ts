/* 題目 1: 使用 const 和 let 聲明變數
1.聲明一個常數 const age: number = 25。
2.聲明一個變數 let name: string = "Alice"，並更改變數的值。 */

const age: number = 25;
console.log(`Age: ${age}`);
// age 不可改，因為他使用 const 聲明 age 為 25，如果嘗試更改會報錯

let Name: string = "Alice";

Name = "Kelly";
console.log(`Name: ${Name}`);