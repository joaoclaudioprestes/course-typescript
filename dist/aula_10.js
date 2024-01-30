"use strict";
//  NULL - UNDEFINED - UNKNOWN
// NULL
let vName = null;
vName = "João";
console.log(vName);
vName = null;
console.log(vName);
// UNDEFINED
let vLastName; // Salvou como "any", aceita qualquer tipo
console.log(vLastName);
vLastName = "Prestes";
console.log(vLastName);
vLastName = null;
console.log(vLastName);
// UNKNOWN - só pode ser atribuido a variaveis desconhecidas (unknown or any) - pode receber qualquer coisa
let vNum;
console.log(typeof vNum);
vNum = "Prestes";
console.log(typeof vNum);
