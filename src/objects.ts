// Type é básicamente um objeto

type Order = {
  productId: string;
  price: number;
};

type User = {
  // Definimos o tipo de cada informação de nosso objeto...
  firstName: string;
  age: number;
  email: string;
  password?: string; // ? define como opcional...
  orders?: Order[]; // Array de Orders
  register?(): boolean;
};

const user: User = {
  firstName: "John",
  age: 19,
  email: "john@example.com",
  password: "1232dweep",
  orders: [{ productId: "13434ew", price: 1 }],
  register() {
    return true;
  },
};

const printLog = (message?: string): string => {
  // Podemos definir uma propriedade opcional
  if (message) {
    return message;
  } else {
    return "Mensagem padrão!";
  }
};

console.log(printLog("Olá"));
printLog(user.password!); // Ao colocar "!" dizemos ao TS que existe um conteudo sim!!! Deixando de ser undefinid

// Unios
type Author = {
  books: string[];
};

const author: Author & User = {
  // Definimos que a variável tem o type de Author e também de user - pois e usuário e também um author!
  age: 19,
  books: ["1"],
  email: "author@example.com",
  firstName: "Johny",
  orders: [{ productId: "1", price: 23 }],
};

// Interfaces - utilizar mais
interface UserInterface {
  readonly firstName: string; // Após definido não podemos redefinir, somente poderemos realizar a leitura!
  email: string;
}

const emailUser: UserInterface = {
  email: "felix@example.com",
  firstName: "Felipe",
};

type Grade = number | string;
const grade: Grade = 12;
