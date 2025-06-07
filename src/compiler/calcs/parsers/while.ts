import type { WhileStatement } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { parseBlock } from "./block";
import { parseExpression } from "./expression";

export function parseWhileDeclaration(ctx: ParseContext): WhileStatement {
  consume(ctx, "KEYWORD_WHILE");
  const condition = parseExpression(ctx);

  const body = parseBlock(ctx);

  return {
    type: "WhileStatement",
    condition,
    body,
  };
}
