import log, { clear, warn } from "./console.module";
import { inputNumber } from "./input.module";
import { diff, sum } from "./math.module";

async function main() {
  clear();

  log("Iniciando programa");

  const a = await inputNumber(
    "Introduce el primer número",
    "Introduce un número válido"
  );

  const b = await inputNumber(
    "Introduce el segundo número",
    "Introduce un número válido"
  );

  log(`Vamos a sumar ${a} + ${b}: `);
  const resSuma = sum(a, b);
  log("resultado: ", resSuma);

  log(`Veamos si ${a} - ${b} es negativo`);
  const resResta = diff(a, b);
  log("resultado: ", resResta);
  if (resResta < 0) warn("¡Cuidado es negativo!");
  warn;

  log("Fin programa");
}

main();
