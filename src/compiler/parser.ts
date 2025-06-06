import { parseStatement } from "@parsers/statement";
import type { Statement } from "./ast-types";
import { type Token, peek } from "./calcs";

export interface ParseContext {
  tokens: Token[];
  position: number;
}

/**
 * Parses the tokens into a list of statements
 * @param tokens - The tokens to parse
 * @returns The parsed statements
 */
export function parser(tokens: Token[]): Statement[] {
  const ctx: ParseContext = {
    tokens,
    position: 0,
  };
  const body: Statement[] = [];

  while (peek(ctx)) {
    body.push(parseStatement(ctx));
  }

  return body;
}
