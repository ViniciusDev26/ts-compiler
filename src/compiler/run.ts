import { readFile, writeFile } from "node:fs/promises";
import { drawEasterEgg } from "./calcs/draw-easter-egg";
import { generateJsCode } from "./codegen";
import { lexer } from "./lexer";
import { parser } from "./parser";

async function bootstrap() {
  const input = await readFile("src/input-source/index.kat", "utf-8");

  const tokens = lexer(input);
  const ast = parser(tokens);
  const JS = generateJsCode(ast);

  await writeFile(
    "./output.js",
    `
  ${JS}
  ${drawEasterEgg()}
  `,
  );

  console.log("Compiled successfully");
}
void bootstrap();
