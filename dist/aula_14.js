"use strict";
let namesArray = [];
const names = (name) => {
    namesArray.push(name);
    return namesArray;
};
console.log(names("João"));
console.log(names("Matheus"));
console.log(names("Bruno"));
