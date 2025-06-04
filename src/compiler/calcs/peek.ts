import type { Token } from "../lexer";
import type { ParseContext } from "../parser";

/**
 * Peeks the next token from the parse context
 * @param ctx - The parse context
 * @returns The next token
 */
export function peek(ctx: ParseContext): Token | undefined {
  return ctx.tokens[ctx.position];
}
