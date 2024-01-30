let curses: string[] = [];

function newCurse(curse: string = ""): string {
  let newArray: string[] = [...curses, curse];
  curses = newArray;
  return curses.join("-");
}

function multiplication(...n: number[]): number {
  let result: number = 0;
  n.forEach((number) => (result = number * number));

  return result;
}

console.log(newCurse("PHP"));
console.log(newCurse("Java"));
console.log(multiplication(1, 2, 3, 123, 34343, 10));
