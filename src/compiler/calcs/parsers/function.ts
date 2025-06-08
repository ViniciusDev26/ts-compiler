import type { FunctionDeclaration } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { parseBlock } from "./block";

export function parseFunctionDeclaration(
  ctx: ParseContext,
): FunctionDeclaration {
  consume(ctx, "KEYWORD_FUNCTION");
  const name = consume(ctx, "IDENTIFIER");
  consume(ctx, "LPAREN");
  consume(ctx, "RPAREN");
  const body = parseBlock(ctx);
  return {
    type: "FunctionDeclaration",
    name: name.value,
    parameters: [],
    body,
  };
}
