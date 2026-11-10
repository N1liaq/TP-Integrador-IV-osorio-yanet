// Tema 5: Interfaces y type
console.log("=======================================================================================");
function presentar(personaje) {
    return `#${personaje.id} ${personaje.nombre} (${personaje.manga})`;
}
const yuji = {
    id: 1,
    nombre: "Yuji Itadori",
    manga: "Jujutsu Kaisen",
};
console.log(presentar(yuji));
console.log(presentar({ id: 2, nombre: "Momo Ayase", manga: "Dandadan" }));
console.log("=======================================================================================");
let punto = { x: 10, y: 20, color: "rojo" };
console.log(`El punto está en (${punto.x}, ${punto.y}) y es de color ${punto.color}.`);
let edad = 15;
console.log(`Carlita tiene ${edad} años.`);
let estadoManga = "leyendo";
console.log(`Estado del manga: ${estadoManga}.`);
console.log("=======================================================================================");
const usuario1 = { nombre: "Carlita", email: "carlita@example.com" };
const usuario2 = { nombre: "Wang" };
console.log(`${usuario1.nombre} tiene email: ${usuario1.email ?? "no tiene"}.`);
console.log(`${usuario2.nombre} tiene email: ${usuario2.email ?? "no tiene"}.`);
const config1 = { apiUrl: "http://localhost:3000", timeout: 5000 };
const config2 = { apiUrl: "http://localhost:3000" };
console.log(`Config 1 -> ${config1.apiUrl}, timeout: ${config1.timeout ?? "por defecto"}.`);
console.log(`Config 2 -> ${config2.apiUrl}, timeout: ${config2.timeout ?? "por defecto"}.`);
// - En una clase
class Persona {
    nombre;
    apellido; // Propiedad opcional
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
const persona1 = new Persona("Carlita", "Wang");
const persona2 = new Persona("Ranma");
console.log(`Persona 1: ${persona1.nombre} ${persona1.apellido ?? "(sin apellido)"}.`);
console.log(`Persona 2: ${persona2.nombre} ${persona2.apellido ?? "(sin apellido)"}.`);
// - En un objeto literal
let user = { name: "John" };
console.log(`${user.name} tiene edad: ${user.age ?? "no especificada"}.`);
console.log("=======================================================================================");
class Gato {
    nombre = "Michi";
    hacerSonido() {
        return "Miau";
    }
}
const gato = new Gato();
console.log(`${gato.nombre} dice: ${gato.hacerSonido()}.`);
const perro = {
    nombre: "Firulais",
    dueño: "Carlita",
    hacerSonido: () => "Guau",
};
console.log(`${perro.nombre} (de ${perro.dueño}) dice: ${perro.hacerSonido()}.`);
let idUsuario = "abc-123";
let ubicacion = [-26.18, -58.17];
const cliente = { nombre: "Carlita", edad: 15 };
console.log(`Id: ${idUsuario}. Ubicación: ${ubicacion}. Cliente: ${cliente.nombre}.`);
const pedido = { producto: "Manga Dandadan", cantidad: 1 };
console.log(`Pedido: ${pedido.cantidad} x ${pedido.producto}. Comentario: ${pedido.comentario ?? "ninguno"}.`);
console.log("=======================================================================================");
export {};
//# sourceMappingURL=05-interfaces-type.js.map