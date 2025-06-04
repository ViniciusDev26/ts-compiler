import type { NumberLiteral, Statement } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { peek } from "../peek";
import { parseParenthesizedExpression } from "./parenthesesized-expression";

/**
 * term = number | identifier | string
 * @param ctx - The parse context
 * @returns The parsed term
 */
export function parseTerm(ctx: ParseContext): Statement {
  const token = peek(ctx);
  if (!token) throw new Error("Unexpected end of input");

  if (token.type === "NUMBER") {
    consume(ctx, "NUMBER");
    return {
      type: "NumberLiteral",
      value: Number.parseFloat(token.value),
    } as NumberLiteral;
  }

  if (token.type === "IDENTIFIER") {
    consume(ctx, "IDENTIFIER");
    return {
      type: "Identifier",
      name: token.value,
    };
  }

  if (token.type === "STRING") {
    consume(ctx, "STRING");
    return {
      type: "StringLiteral",
      value: token.value,
    };
  }

  if (token.type === "LPAREN") {
    return parseParenthesizedExpression(ctx);
  }

  throw new Error(`Unexpected token in term: ${token.type}`);
}
