import type { NumberLiteral, Statement } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { peek } from "../peek";
import { parseExpression } from "./expression";
import { parseParenthesizedExpression } from "./parenthesesized-expression";

export function parseFunctionCall(ctx: ParseContext, name: string): Statement {
  consume(ctx, "LPAREN");
  const args: Statement[] = [];
  while (peek(ctx)?.type !== "RPAREN") {
    args.push(parseExpression(ctx));
    if (peek(ctx)?.type === "RPAREN") break;
    if (peek(ctx)?.type === "COMMA") {
      consume(ctx, "COMMA");
    } else {
      throw new Error("Expected ',' or ')' in function call arguments");
    }
  }
  consume(ctx, "RPAREN");
  return {
    type: "FunctionCall",
    callee: name,
    arguments: args,
  };
}
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
    const nameToken = consume(ctx, "IDENTIFIER");

    if (peek(ctx)?.type === "LPAREN")
      return parseFunctionCall(ctx, nameToken.value);

    return {
      type: "Identifier",
      name: nameToken.value,
    };
  }

  if (token.type === "COMMA") {
    consume(ctx, "COMMA");
    return parseTerm(ctx);
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
