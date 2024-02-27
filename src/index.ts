export {};

// This expression is not callable, Type 'X' no call signatures

// EXAMPLE 1 - Access the property that points to a method

function getFunc() {
  return {
    sum(a: number, b: number) {
      return a + b;
    },
  };
}

const result = getFunc();

console.log(result.sum(10, 50)); // 👉️ 60

// ---------------------------------------------------

// // EXAMPLE 2 - Typing a function correctly in TypeScript

// // 👇️ using Type Alias (for only function) 👇️
// type FunctionA = (a: number, b: number) => number;
// const funcA: FunctionA = (a, b) => a + b;
// console.log(funcA(100, 100));

// // ------------------------------------------------

// // 👇️ Using interface (for only function) 👇️
// interface FunctionB {
//   (a: number, b: number): number;
// }
// const funcB: FunctionB = (a, b) => a + b;
// console.log(funcB(100, 200));

// // ------------------------------------------------

// // 👇️ Type Alias with other members 👇️
// type DateThings = {
//   date: string;
//   getTimestamp: (str: string) => number;
// };
// const d: DateThings = {
//   date: '2023-09-24',
//   getTimestamp(str) {
//     return new Date(str).getTime();
//   },
// };
// console.log(d.getTimestamp('2024-04-16'));

// // ------------------------------------------------

// // 👇️ Interface with other members 👇️
// interface MathThings {
//   sum: (a: number, b: number) => number;
//   num: number;
// }
// const obj: MathThings = {
//   num: 100,
//   sum(a, b) {
//     return a + b;
//   },
// };
// console.log(obj.sum(50, 50));
