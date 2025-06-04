import type { ParenthesizedExpression } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { parseExpression } from "./expression";

/**
 * parseParenthesizedExpression = "(" expression ")"
 * @param ctx - The parse context
 * @returns The parsed parenthesized expression
 */
export function parseParenthesizedExpression(
  ctx: ParseContext,
): ParenthesizedExpression {
  consume(ctx, "LPAREN");
  const expression = parseExpression(ctx);
  consume(ctx, "RPAREN");
  return {
    type: "ParenthesizedExpression",
    expression,
  };
}
