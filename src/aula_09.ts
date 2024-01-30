enum Days {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}

let days: Days = Days.Monday;

console.log(days);
console.log(Days.Monday);

enum Colors {
  white = "#fff",
  black = "#000",
  red = "#f00",
  blue = "#00f",
  green = "#0f0",
}

console.log(Colors.white);
console.log(Colors["black"]);
