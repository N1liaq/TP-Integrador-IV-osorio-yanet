// Tema 5: Interfaces y type

console.log(
  "=======================================================================================",
);

// ¿Qué es una interfaz y para qué sirve?

interface Personaje {
  id: number;
  nombre: string;
  manga: string;
}

function presentar(personaje: Personaje): string {
  return `#${personaje.id} ${personaje.nombre} (${personaje.manga})`;
}

const yuji: Personaje = {
  id: 1,
  nombre: "Yuji Itadori",
  manga: "Jujutsu Kaisen",
};

console.log(presentar(yuji));
console.log(presentar({ id: 2, nombre: "Momo Ayase", manga: "Dandadan" }));

console.log(
  "=======================================================================================",
);

// ¿Qué es un type?
type Coordenada = {
  x: number;
  y: number;
};

// Intersección (&): combina tipos en uno nuevo
type Punto = Coordenada & { color: string };

let punto: Punto = { x: 10, y: 20, color: "rojo" };

console.log(
  `El punto está en (${punto.x}, ${punto.y}) y es de color ${punto.color}.`,
);

// Alias de un tipo primitivo
type Edad = number;
let edad: Edad = 15;
console.log(`Carlita tiene ${edad} años.`);

// Unión (|): solo se puede hacer con type
type Estado = "pendiente" | "leyendo" | "terminado";
let estadoManga: Estado = "leyendo";
console.log(`Estado del manga: ${estadoManga}.`);

console.log(
  "=======================================================================================",
);

// ¿Cómo se declara una propiedad opcional?

interface Usuario {
  nombre: string;
  email?: string; // Propiedad opcional
}

const usuario1: Usuario = { nombre: "Carlita", email: "carlita@example.com" };
const usuario2: Usuario = { nombre: "Wang" };

console.log(`${usuario1.nombre} tiene email: ${usuario1.email ?? "no tiene"}.`);
console.log(`${usuario2.nombre} tiene email: ${usuario2.email ?? "no tiene"}.`);

// - En un type
type Config = {
  apiUrl: string;
  timeout?: number; // Propiedad opcional
};

const config1: Config = { apiUrl: "http://localhost:3000", timeout: 5000 };
const config2: Config = { apiUrl: "http://localhost:3000" };

console.log(
  `Config 1 -> ${config1.apiUrl}, timeout: ${config1.timeout ?? "por defecto"}.`,
);
console.log(
  `Config 2 -> ${config2.apiUrl}, timeout: ${config2.timeout ?? "por defecto"}.`,
);

// - En una clase
class Persona {
  nombre: string;
  apellido?: string; // Propiedad opcional

  constructor(nombre: string, apellido?: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

const persona1 = new Persona("Carlita", "Wang");
const persona2 = new Persona("Ranma");

console.log(
  `Persona 1: ${persona1.nombre} ${persona1.apellido ?? "(sin apellido)"}.`,
);
console.log(
  `Persona 2: ${persona2.nombre} ${persona2.apellido ?? "(sin apellido)"}.`,
);

// - En un objeto literal
let user: { name: string; age?: number } = { name: "John" };

console.log(`${user.name} tiene edad: ${user.age ?? "no especificada"}.`);

console.log(
  "=======================================================================================",
);

// ¿Cuándo conviene usar cada uno?

interface Animal {
  nombre: string;
  hacerSonido(): string;
}

class Gato implements Animal {
  nombre = "Michi";
  hacerSonido(): string {
    return "Miau";
  }
}

const gato = new Gato();
console.log(`${gato.nombre} dice: ${gato.hacerSonido()}.`);

// Las interfaces también se pueden extender
interface Mascota extends Animal {
  dueño: string;
}

const perro: Mascota = {
  nombre: "Firulais",
  dueño: "Carlita",
  hacerSonido: () => "Guau",
};
console.log(
  `${perro.nombre} (de ${perro.dueño}) dice: ${perro.hacerSonido()}.`,
);

// - Type: para lo que la interfaz no puede: uniones, tuplas y tipos calculados.

type Id = number | string; // unión
type Coordenadas = [number, number]; // tupla
type Cliente = { nombre: string; edad: number };
type ClienteSoloLectura = Readonly<Cliente>; // tipo calculado

let idUsuario: Id = "abc-123";
let ubicacion: Coordenadas = [-26.18, -58.17];
const cliente: ClienteSoloLectura = { nombre: "Carlita", edad: 15 };

console.log(
  `Id: ${idUsuario}. Ubicación: ${ubicacion}. Cliente: ${cliente.nombre}.`,
);

// - Propiedad opcional: cuando no es necesario asignar un valor al crear el objeto.
interface Pedido {
  producto: string;
  cantidad: number;
  comentario?: string; // no siempre se necesita
}

const pedido: Pedido = { producto: "Manga Dandadan", cantidad: 1 };
console.log(
  `Pedido: ${pedido.cantidad} x ${pedido.producto}. Comentario: ${pedido.comentario ?? "ninguno"}.`,
);

console.log(
  "=======================================================================================",
);
