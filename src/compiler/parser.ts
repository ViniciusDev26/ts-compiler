import { parseAssignment } from "@parsers/assignment";
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
export function parser(tokens: Token[]): Statement {
  const ctx: ParseContext = {
    tokens,
    position: 0,
  };
  const program: Statement = {
    type: "Program",
    body: [],
  };

  while (peek(ctx)) {
    const token = peek(ctx);

    if (token?.type === "KEYWORD_VAR") {
      program.body.push(parseVariableDeclaration(ctx));
    }

    if (token?.type === "KEYWORD_CONST") {
      program.body.push(parseConstantDeclaration(ctx));
    }

    if (token?.type === "KEYWORD_PRINT") {
      program.body.push(parsePrintStatement(ctx));
    }

    if (token?.type === "IDENTIFIER") {
      program.body.push(parseAssignment(ctx));
    }
  }

  return program;
}
