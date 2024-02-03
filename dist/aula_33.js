"use strict";
// Definindo um array
const frutas = ['Maçã', 'Banana', 'Morango'];
// Desestruturação de arrays
const [fruta1, fruta2, fruta3] = frutas;
// Utilizando os valores extraídos
console.log(`Fruta 1: ${fruta1}, Fruta 2: ${fruta2}, Fruta 3: ${fruta3}`);
// Definindo um objeto
const pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo',
};
// Desestruturação de objetos
const { nome, idade, cidade } = pessoa;
// Utilizando os valores extraídos
console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);
