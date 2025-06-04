import { evaluate } from "./codegen";
import { lexer } from "./lexer";
import { parser } from "./parser";

const input = "4 - 2;";

try {
  const tokens = lexer(input);
  const ast = parser(tokens);
  const result = evaluate(ast);

  console.log(`Input: ${input}`);
  console.log(`Result: ${result}`);
} catch (error) {
  console.error(`Compilation error: ${(error as Error).message}`);
}
