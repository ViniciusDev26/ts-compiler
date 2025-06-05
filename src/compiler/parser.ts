import type { Statement } from "./ast-types";
import {
  type Token,
  parseConstantDeclaration,
  parsePrintStatement,
  parseVariableDeclaration,
  peek,
} from "./calcs";

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
  const statements: Statement[] = [];

  while (peek(ctx)) {
    const token = peek(ctx);

    if (token?.type === "KEYWORD_VAR") {
      statements.push(parseVariableDeclaration(ctx));
    }

    if (token?.type === "KEYWORD_CONST") {
      statements.push(parseConstantDeclaration(ctx));
    }

    if (token?.type === "KEYWORD_PRINT") {
      statements.push(parsePrintStatement(ctx));
    }
  }

  return statements;
}
