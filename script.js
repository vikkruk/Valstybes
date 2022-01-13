"use strict";


let countries = [
    { name: "Portugalija", area: 92212, people: 10.34},
    { name: "Vokietija", area: 357022, people: 83.19},
    { name: "Prancūzija", area: 640679, people: 67.41},
    { name: "Lietuva", area: 65300, people: 2.77},
    { name: "Suomija", area: 338455, people: 5.53}, 
];

function plotas (name, area, people) {
    let average = ((area * 1000000) / (people * 1000000)).toFixed(2);
    console.log(`Šalis: ${name}, joje gyvena ${people} mln. gyventojų.\nValstybės plotas: ${area} km², plotas tenkantis vienam gyventojui: ${average} m².`)
    console.log("---------------------------");
}

for (const x of countries) {
    plotas(x.name, x.area, x.people)
}

