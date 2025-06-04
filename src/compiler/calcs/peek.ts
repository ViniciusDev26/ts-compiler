import type { Token } from "../lexer";
import type { ParseContext } from "../parser";

export function peek(ctx: ParseContext): Token | undefined {
  return ctx.tokens[ctx.position];
}
