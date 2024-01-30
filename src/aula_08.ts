let user = { // Não precisamos especificar que é um object
  firtsName: "João",
  lastName: "Prestes",
  age: 19,
  studying: true,
  hello: () => console.log(`Olá, ${user.firtsName}`)
};

user.age = 18; 

