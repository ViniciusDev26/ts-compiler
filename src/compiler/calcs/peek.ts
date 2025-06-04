import type { Token } from "../lexer";

export function peek(tokens: Token[], position: number): Token | undefined {
  return tokens[position];
}
