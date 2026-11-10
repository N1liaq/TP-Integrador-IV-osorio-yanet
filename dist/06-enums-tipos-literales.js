// Tema 6: Enums y tipos literales
console.log("=======================================================================================");
// ¿Qué es un enum?
var Direction;
(function (Direction) {
    Direction[Direction["arriba"] = 0] = "arriba";
    Direction[Direction["abajo"] = 1] = "abajo";
    Direction[Direction["izquierda"] = 2] = "izquierda";
    Direction[Direction["derecha"] = 3] = "derecha";
})(Direction || (Direction = {}));
console.log(`Direction.arriba vale ${Direction.arriba}.`);
console.log(`Direction.abajo vale ${Direction.abajo}.`);
console.log(`Direction.izquierda vale ${Direction.izquierda}.`);
console.log(`Direction.derecha vale ${Direction.derecha}.`);
// Con inicializador, los siguientes continúan desde ese número
var Nivel;
(function (Nivel) {
    Nivel[Nivel["Bajo"] = 10] = "Bajo";
    Nivel[Nivel["Medio"] = 11] = "Medio";
    Nivel[Nivel["Alto"] = 12] = "Alto";
})(Nivel || (Nivel = {}));
console.log(`Nivel.Medio vale ${Nivel.Medio} y Nivel.Alto vale ${Nivel.Alto}.`);
// Enum basado en strings
var Rol;
(function (Rol) {
    Rol["Admin"] = "ADMIN";
    Rol["Usuario"] = "USUARIO";
    Rol["Invitado"] = "INVITADO";
})(Rol || (Rol = {}));
let miRol = Rol.Usuario;
console.log(`Mi rol es ${miRol}.`);
console.log("=======================================================================================");
// ¿Qué es un tipo literal?
let saludo = "hola";
console.log(`Saludo: ${saludo}.`);
let estadoManga = "leyendo";
console.log(`Estado del manga: ${estadoManga}.`);
let tirada = 4;
console.log(`Salió el número ${tirada} en el dado.`);
console.log("=======================================================================================");
// ¿En qué se parecen y en qué se diferencian?
var Color;
(function (Color) {
    Color["Rojo"] = "ROJO";
    Color["Verde"] = "VERDE";
})(Color || (Color = {}));
let color1 = Color.Rojo;
let color2 = "ROJO";
console.log(`Con enum: ${color1}. Con tipo literal: ${color2}.`);
console.log("Valores del enum Color:", Object.values(Color));
console.log("=======================================================================================");
// ¿En qué situaciones se puede usar cada uno?
// - Enum: para organizar constantes relacionadas y mejorar la legibilidad
var EstadoPedido;
(function (EstadoPedido) {
    EstadoPedido["Pendiente"] = "PENDIENTE";
    EstadoPedido["Enviado"] = "ENVIADO";
    EstadoPedido["Entregado"] = "ENTREGADO";
})(EstadoPedido || (EstadoPedido = {}));
function describirPedido(estado) {
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
function ejecutar(accion) {
    return `Ejecutando acción: ${accion}.`;
}
console.log(ejecutar("crear"));
console.log(ejecutar("eliminar"));
console.log("=======================================================================================");
export {};
//# sourceMappingURL=06-enums-tipos-literales.js.map