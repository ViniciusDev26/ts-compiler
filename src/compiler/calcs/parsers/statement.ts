import type { Statement } from "../../ast-types";
import type { ParseContext } from "../../parser";

import { peek } from "../peek";
import { parseAssignment } from "./assignment";
import { parseBreakStatement } from "./break";
import { parseConstantDeclaration } from "./constant-declaration";
import { parseFunctionDeclaration } from "./function";
import { parseIfDeclaration } from "./if";
import { parsePrintStatement } from "./print";
import { parseTerm } from "./term";
import { parseVariableDeclaration } from "./variable-declaration";
import { parseWhileDeclaration } from "./while";

export function parseStatement(ctx: ParseContext): Statement {
  const token = peek(ctx);

  if (token?.type === "KEYWORD_IF") {
    return parseIfDeclaration(ctx);
  }

  if (token?.type === "KEYWORD_VAR") {
    return parseVariableDeclaration(ctx);
  }

  if (token?.type === "KEYWORD_CONST") {
    return parseConstantDeclaration(ctx);
  }

  if (token?.type === "KEYWORD_WHILE") {
    return parseWhileDeclaration(ctx);
  }

  if (token?.type === "KEYWORD_PRINT") {
    return parsePrintStatement(ctx);
  }

  if (token?.type === "KEYWORD_FUNCTION") {
    return parseFunctionDeclaration(ctx);
  }

  if (token?.type === "IDENTIFIER") {
    const next = ctx.tokens[ctx.position + 1];
    if (next && next.type === "LPAREN") {
      return parseTerm(ctx);
    }

    return parseAssignment(ctx);
  }

  if (token?.type === "KEYWORD_BREAK") {
    return parseBreakStatement(ctx);
  }

  throw new Error(`Unknown statement: ${token?.type}`);
}
