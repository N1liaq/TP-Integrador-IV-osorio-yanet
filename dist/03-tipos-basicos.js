// ¿Qué son los tipos string, number y boolean?
console.log("=======================================================================================");
// tipo de dato String
//comillas dobles
let nombre = "Carlita";
//comillas simples
let apellido = "Wang";
//comillas invertidas o también backticks se utilizan para agregar una expresión junto lo que se quiera escribir textualmente.
//Expresión: produce un valor y puede escribirse donde se espere un valor.
console.log(`Hola, me llamó ${nombre}, mi apellido es ${apellido} y soy de Argentina.`);
/// tipo de dato Number
let edad = 15;
console.log(`La edad de ${nombre} es de ${edad} años.`);
/// tipo de dato Boolean
let trabajo = false;
console.log(`${nombre} tiene trabajo? ${trabajo}. Tiene ${edad} años, no trabaja.`);
console.log("=======================================================================================");
// ¿Cómo se declara un array con tipo?
const mangas = [
    "Jujutsu Kaisen",
    " Ranma 1/2",
    " Dandadan",
    " Inuyasha",
    " Kimetsu no Yaiba",
];
console.log(`Mangas por leer: ${mangas}.`);
console.log("=======================================================================================");
// ¿Qué es un tipo unión?
let doritos;
doritos = 67;
console.log(`tengo ${doritos} doritos :D.`);
doritos = false;
console.log(`tengo ${doritos} doritos. Ya no tengo :(`);
console.log("=======================================================================================");
export {};
//# sourceMappingURL=03-tipos-basicos.js.map