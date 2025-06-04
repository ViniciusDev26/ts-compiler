import type { Token } from "../lexer";

export function consume(next_token: Token, expected?: string): Token {
  if (expected && next_token.type !== expected) {
    throw new Error(`Expected ${expected}, got ${next_token.type}`);
  }

  return next_token;
}
