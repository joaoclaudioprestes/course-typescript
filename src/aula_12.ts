const sum = (n1: number, n2: number): number => {
  return n1 + n2;
};

const test = (): void => {
  // Quando :void ela não retornara NADA!
  console.log("OK");
};

const login = (user: string, password: string): void => {
  if (user === "joao" && password === "123") {
    console.log("Login completed");
    return;
  }
  console.log("Login failed");
};

const isAdmin = (codAdmin: string): boolean => {
  if (codAdmin === "e3e3e3") {
    return true;
  }

  return false;
};

const definedTypeUser = (isAdmin: boolean): string => {
  if (isAdmin) {
    return "Is admin";
  }

  return "Is not admin";
};

test();
console.log(sum(20, 43));
login("joao", "123");
login("matheus", "123");
console.log(isAdmin("e3e3e3"));
console.log(definedTypeUser(true));
