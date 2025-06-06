import type { Statement } from "../../ast-types";
import type { ParseContext } from "../../parser";

import { peek } from "../peek";
import { parseAssignment } from "./assignment";
import { parseConstantDeclaration } from "./constant-declaration";
import { parseIfDeclaration } from "./if";
import { parsePrintStatement } from "./print";
import { parseVariableDeclaration } from "./variable-declaration";

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

  if (token?.type === "KEYWORD_PRINT") {
    return parsePrintStatement(ctx);
  }

  if (token?.type === "IDENTIFIER") {
    return parseAssignment(ctx);
  }

  throw new Error(`Unknown statement: ${token?.type}`);
}
