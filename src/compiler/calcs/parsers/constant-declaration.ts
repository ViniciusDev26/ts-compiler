import type { ConstantDeclaration } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { parseExpression } from "./expression";

/**
 * const identifier = expression
 * @param ctx - The parse context
 * @returns The parsed constant declaration
 */
export function parseConstantDeclaration(
  ctx: ParseContext,
): ConstantDeclaration {
  consume(ctx, "KEYWORD_CONST");
  const name = consume(ctx, "IDENTIFIER");
  consume(ctx, "EQUALS");
  const value = parseExpression(ctx);

  return { type: "ConstantDeclaration", name: name.value, value };
}
