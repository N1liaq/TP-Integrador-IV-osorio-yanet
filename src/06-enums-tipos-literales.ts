// Tema 6: Enums y tipos literales

console.log(
  "=======================================================================================",
);

// ¿Qué es un enum?
enum Direction {
  arriba,
  abajo,
  izquierda,
  derecha,
}

console.log(`Direction.arriba vale ${Direction.arriba}.`);
console.log(`Direction.abajo vale ${Direction.abajo}.`);
console.log(`Direction.izquierda vale ${Direction.izquierda}.`);
console.log(`Direction.derecha vale ${Direction.derecha}.`);

// Con inicializador, los siguientes continúan desde ese número
enum Nivel {
  Bajo = 10,
  Medio,
  Alto,
}

console.log(`Nivel.Medio vale ${Nivel.Medio} y Nivel.Alto vale ${Nivel.Alto}.`);

// Enum basado en strings
enum Rol {
  Admin = "ADMIN",
  Usuario = "USUARIO",
  Invitado = "INVITADO",
}

let miRol: Rol = Rol.Usuario;
console.log(`Mi rol es ${miRol}.`);

console.log(
  "=======================================================================================",
);

// ¿Qué es un tipo literal?

let saludo: "hola" = "hola";
console.log(`Saludo: ${saludo}.`);

// Combinados con una unión (|) permiten definir un conjunto de valores válidos
type Estado = "pendiente" | "leyendo" | "terminado";

let estadoManga: Estado = "leyendo";
console.log(`Estado del manga: ${estadoManga}.`);

// También existen literales numéricos y booleanos
type Dado = 1 | 2 | 3 | 4 | 5 | 6;
let tirada: Dado = 4;
console.log(`Salió el número ${tirada} en el dado.`);

console.log(
  "=======================================================================================",
);

// ¿En qué se parecen y en qué se diferencian?

enum Color {
  Rojo = "ROJO",
  Verde = "VERDE",
}
type ColorLiteral = "ROJO" | "VERDE";

let color1: Color = Color.Rojo;
let color2: ColorLiteral = "ROJO";

console.log(`Con enum: ${color1}. Con tipo literal: ${color2}.`);

console.log("Valores del enum Color:", Object.values(Color));

console.log(
  "=======================================================================================",
);

// ¿En qué situaciones se puede usar cada uno?

// - Enum: para organizar constantes relacionadas y mejorar la legibilidad
enum EstadoPedido {
  Pendiente = "PENDIENTE",
  Enviado = "ENVIADO",
  Entregado = "ENTREGADO",
}

function describirPedido(estado: EstadoPedido): string {
  switch (estado) {
    case EstadoPedido.Pendiente:
      return "El pedido todavía no salió.";
    case EstadoPedido.Enviado:
      return "El pedido está en camino.";
    case EstadoPedido.Entregado:
      return "El pedido ya llegó.";
  }
}

console.log(describirPedido(EstadoPedido.Enviado));

// - Tipo literal: para restringir una variable o parámetro a valores válidos,
type Accion = "crear" | "editar" | "eliminar";

function ejecutar(accion: Accion): string {
  return `Ejecutando acción: ${accion}.`;
}

console.log(ejecutar("crear"));
console.log(ejecutar("eliminar"));

console.log(
  "=======================================================================================",
);
