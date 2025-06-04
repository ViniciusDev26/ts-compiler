import type { Token } from "../lexer";
import type { ParseContext } from "../parser";

export function consume(ctx: ParseContext, expected?: string): Token {
  const next_token = ctx.tokens[ctx.position++];

  if (expected && next_token.type !== expected) {
    throw new Error(`Expected ${expected}, got ${next_token.type}`);
  }

  return next_token;
}
