"use strict";
const sum = (n1, n2) => {
    return n1 + n2;
};
const test = () => {
    // Quando :void ela não retornara NADA!
    console.log("OK");
};
const login = (user, password) => {
    if (user === "joao" && password === "123") {
        console.log("Login completed");
        return;
    }
    console.log("Login failed");
};
const isAdmin = (codAdmin) => {
    if (codAdmin === "e3e3e3") {
        return true;
    }
    return false;
};
const definedTypeUser = (isAdmin) => {
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
