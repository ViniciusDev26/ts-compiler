import type { Statement } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { peek } from "../peek";
import type { OperatorType } from "../tokens";
import { parseTerm } from "./term";

export function solveExpression(
  left: Statement,
  right: Statement,
  operator: OperatorType,
): Statement {
  const map: Record<OperatorType, string> = {
    PLUS: "+",
    MINUS: "-",
    MODULO: "%",
    MULTIPLY: "*",
    DIVIDE: "/",
    EQUALS: "==",
  };

  return {
    type: "BinaryExpression",
    left,
    right,
    operator: map[operator],
  };
}

export function parseBinaryOperation(
  ctx: ParseContext,
  left: Statement,
): Statement {
  let left_clone = left;
  const valid_operations: readonly OperatorType[] = [
    "PLUS",
    "MINUS",
    "MULTIPLY",
    "DIVIDE",
    "MODULO",
  ] as const;

  while (peek(ctx) && valid_operations.includes(peek(ctx)?.type)) {
    const operator = peek(ctx)?.type;
    consume(ctx, operator);
    const right = parseTerm(ctx);
    left_clone = solveExpression(left_clone, right, operator as OperatorType);
  }

  return left_clone;
}

/**
 * expression = term (("+" | "-" | "%") term)*
 * @param ctx - The parse context
 * @returns The parsed expression
 */
export function parseExpression(ctx: ParseContext): Statement {
  const left = parseTerm(ctx);

  return parseBinaryOperation(ctx, left);
}
