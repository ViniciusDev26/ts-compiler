import type { BinaryExpression, Statement } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { peek } from "../peek";
import { parseTerm } from "./term";

/**
 * expression = term (("+" | "-" | "%") term)*
 * @param ctx - The parse context
 * @returns The parsed expression
 */
export function parseExpression(ctx: ParseContext): Statement {
  let left = parseTerm(ctx);

  while (peek(ctx) && peek(ctx)?.type === "PLUS") {
    consume(ctx, "PLUS");
    const right = parseTerm(ctx);
    left = {
      type: "BinaryExpression",
      left,
      operator: "+",
      right,
    } as BinaryExpression;
  }

  while (peek(ctx) && peek(ctx)?.type === "MINUS") {
    consume(ctx, "MINUS");
    const right = parseTerm(ctx);
    left = {
      type: "BinaryExpression",
      left,
      operator: "-",
      right,
    } as BinaryExpression;
  }

  while (peek(ctx) && peek(ctx)?.type === "MODULO") {
    consume(ctx, "MODULO");
    const right = parseTerm(ctx);
    left = {
      type: "BinaryExpression",
      left,
      operator: "%",
      right,
    } as BinaryExpression;
  }

  return left;
}
