import type { ParseContext } from "../parser";
import type { Token } from "./tokens";

/**
 * Peeks the next token from the parse context
 * @param ctx - The parse context
 * @returns The next token
 */
export function peek(ctx: ParseContext): Token | undefined {
  return ctx.tokens[ctx.position];
}
