# Glosario

Crear un GLOSARIO.md con al menos 10 términos de los temas investigados. Cada término debe incluir una definición breve y clara, y un ejemplo simple en TypeScript.

## Symbol

Es tipo primitivo que crea identificadores únicos, útil como clave de propiedades.

```typescript
const id: symbol = Symbol("id");
const obj = { [id]: "valor secreto" };
console.log(obj[id]);
```

## Unknown

Es como any, acepta cualquier valor, pero obliga a comprobar el tipo antes de usarlo. Es la alternativa segura a any.

```typescript
let dato: unknown = "hola";
// dato.toUpperCase(); // Error: no se sabe qué tipo es
if (typeof dato === "string") {
  console.log(dato.toUpperCase()); // OK
}
```

## Never

Representa algo que nunca ocurre y se usa en funciones que lanzan un error o nunca terminan.

```typescript
function fallar(mensaje: string): never {
  throw new Error(mensaje);
}
```

## Void

Es un tipo de retorno de una función que no devuelve ningún valor.

```typescript
function saludar(nombre: string): void {
  console.log(`Hola ${nombre}`);
}
```

## Inferencia de tipos

TypeScript deduce el tipo a partir del valor asignado, sin que lo escribas.

```typescript
let ciudad = "Formosa"; // TypeScript infiere: string
// ciudad = 5; // Error: number no es asignable a string
```

## Genéricos

Permiten crear código reutilizable donde el tipo de una variable es (<T>) que se define al usarlo.

```typescript
function primero<T>(lista: T[]): T {
  return lista[0];
}
const n = primero([10, 20, 30]); // T = number
const s = primero(["a", "b"]); // T = string
```

## Restricción genérica (extends)

Limita qué tipos puede aceptar un genérico.

```typescript
function largo<T extends { length: number }>(x: T): number {
  return x.length;
}
console.log(largo("hola")); // 4
console.log(largo([1, 2, 3])); // 3
// largo(5); // Error: number no tiene length
```

## Encadenamiento opcional (?.)

Accede a una propiedad solo si el valor anterior existe, si es null o undefined, devuelve undefined en vez de dar error.

```typescript
interface Usuario {
  nombre: string;
  direccion?: { calle: string };
}
const u: Usuario = { nombre: "Ana" };
console.log(u.direccion?.calle); // undefined, sin error
```

## Asserts

Lanza un error si una condición no se cumple, y no lo lanza, TypeScript asume que se cumplió.

```typescript
function asegurarString(x: unknown): asserts x is string {
  if (typeof x !== "string") throw new Error("No es un string");
}

let v: unknown = "hola";
asegurarString(v);
console.log(v.toUpperCase()); // v ya es string
```

## Clase abstracta

Una clase que no se puede instanciar directamente y obliga a las subclases a implementar ciertos métodos.

```typescript
abstract class Figura {
  abstract area(): number;
  describir(): void {
    console.log(`Área: ${this.area()}`);
  }
}

class Cuadrado extends Figura {
  constructor(private lado: number) {
    super();
  }
  area(): number {
    return this.lado ** 2;
  }
}

new Cuadrado(3).describir(); // Área: 9
// new Figura(); // Error: es abstracta
```

## Implements

Obliga a una clase a cumplir con la forma de una interfaz.

```typescript
interface Volador {
  volar(): void;
}

class Pajaro implements Volador {
  volar(): void {
    console.log("Volando");
  }
}
```

## Override

Marca que un método reemplaza a uno de la clase padre. Si el método no existe, da error.

```typescript
class Animal {
  hablar(): void {
    console.log("...");
  }
}

class Perro extends Animal {
  override hablar(): void {
    console.log("Guau");
  }
}
```
