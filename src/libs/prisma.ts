/*
Con esto, nosotros ya podemos llamar a la conexión con prisma
*/

import { PrismaClient } from "@prisma/client";

/*
Declaración de prisma en el ámbito global: Se declara una variable llamada prisma en el ámbito global utilizando declare global. Esto significa que prisma estará disponible en todo el código de la aplicación, lo que facilita el acceso a la instancia de PrismaClient desde cualquier parte del código.

Se usa VAR para tener acceso a prisma en el ámbito global
*/
declare global {
  var prisma: PrismaClient | undefined;
}

//Si en el objeto global hay una base de datos úsalo. Si no hay, crea uno nuevo.
export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE !== "production") {
  global.prisma = prisma;
}
