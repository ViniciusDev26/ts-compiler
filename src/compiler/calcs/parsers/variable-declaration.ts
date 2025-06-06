import type { VariableDeclaration } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { parseExpression } from "./expression";

/**
 * var identifier = expression
 * @param ctx - The parse context
 * @returns The parsed variable declaration
 */
export function parseVariableDeclaration(
  ctx: ParseContext,
): VariableDeclaration {
  consume(ctx, "KEYWORD_VAR");
  const name = consume(ctx, "IDENTIFIER");
  consume(ctx, "ATTRIBUTE_ASSIGNMENT");
  const value = parseExpression(ctx);

  return { type: "VariableDeclaration", name: name.value, value };
}
