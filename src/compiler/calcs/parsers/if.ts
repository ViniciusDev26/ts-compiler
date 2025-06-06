import type { IfStatement, Statement } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { peek } from "../peek";
import { parseExpression } from "./expression";
import { parseStatement } from "./statement";

export function parseIfDeclaration(ctx: ParseContext): IfStatement {
  consume(ctx, "KEYWORD_IF");
  consume(ctx, "LPAREN");
  const condition = parseExpression(ctx);
  consume(ctx, "RPAREN");

  consume(ctx, "LBRACE");
  const body: Statement[] = [];

  while (peek(ctx)?.type !== "RBRACE") {
    body.push(parseStatement(ctx));
  }
  consume(ctx, "RBRACE");

  return { type: "IfStatement", condition, body };
}
