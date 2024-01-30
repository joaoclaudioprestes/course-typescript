let namesArray: string[] = [];

const names = (name: string): string[] => {
  namesArray.push(name);
  return namesArray;
};

console.log(names("João"));
console.log(names("Matheus"));
console.log(names("Bruno"));
