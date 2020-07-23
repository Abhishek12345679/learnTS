// console.log("Hello TS :3 uWu");

// interface Params {
//   a: number;
//   b: number;
// }

type Params = {
  a: number;
  b: number;
};

enum Apples {
  apple = "Fruit",
  notFruit = "apple",
}

const add = (Params: Params): number => {
  console.log(Params.a + Params.b);
  console.log(Apples);
  return Params.a + Params.b;
};

add({ a: 3, b: 3 });
