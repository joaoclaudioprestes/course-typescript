"use strict";
function sub(n1 = 0, n2) {
    // Passamos valores padrões
    return n1 - n2;
}
function newUser(username = "João", password) {
    // Quando utilizado ? definimos como não definido se teremos ou não
    console.log(`Usuário logado com sucesso: Bem vindo, ${username}!`);
    if (password) {
        console.log(`Sua senha é ${password}`);
    }
}
console.log(sub(20, 1222));
newUser("Matheus", "2323d3e3");
newUser();
