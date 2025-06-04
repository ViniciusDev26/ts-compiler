import type { VariableDeclaration } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { parseExpression } from "./expression";

export function parseVariableDeclaration(
  ctx: ParseContext,
): VariableDeclaration {
  consume(ctx, "KEYWORD_VAR");
  const name = consume(ctx, "IDENTIFIER");
  consume(ctx, "EQUALS");
  const value = parseExpression(ctx);

  return { type: "VariableDeclaration", name: name.value, value };
}
