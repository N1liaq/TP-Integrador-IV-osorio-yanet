//¿Cómo se indican los tipos de los parámetros?
console.log(
  "=======================================================================================",
);
function calcularAreaRectangulo(base: number, altura: number): number {
  return base * altura;
}

console.log(`El área del rectángulo es: ${calcularAreaRectangulo(5, 3)}`);

console.log(
  "=======================================================================================",
);
//¿Cómo se indica el tipo de retorno?
function esMayorDeEdad(edad: number): boolean {
  return edad >= 18;
}

console.log(`¿Con 20 años es mayor de edad? ${esMayorDeEdad(20)}`);
console.log(`¿Con 15 años es mayor de edad? ${esMayorDeEdad(15)}`);

console.log(
  "=======================================================================================",
);
// ¿Qué es un parámetro opcional?
function saludar(nombre: string, titulo?: string): string {
  if (titulo) {
    return `Hola, ${titulo} ${nombre}`;
  }
  return `Hola, ${nombre}`;
}

console.log(saludar("Ana", "Lic."));
console.log(saludar("Ana"));

console.log(
  "=======================================================================================",
);
// ¿Qué es un parámetro por defecto?
function calcularPrecioConEnvio(
  precio: number,
  costoEnvio: number = 500,
): number {
  return precio + costoEnvio;
}

console.log(`Con envío por defecto: $${calcularPrecioConEnvio(1000)}`);
console.log(`Con envío de 200: $${calcularPrecioConEnvio(1000, 200)}`);

console.log(
  "=======================================================================================",
);
