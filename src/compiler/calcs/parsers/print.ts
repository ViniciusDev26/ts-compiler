import type { PrintStatement } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { parseExpression } from "./expression";

export function parsePrintStatement(ctx: ParseContext): PrintStatement {
  consume(ctx, "KEYWORD_PRINT");
  consume(ctx, "LPAREN");
  const expr = parseExpression(ctx);
  consume(ctx, "RPAREN");
  return { type: "PrintStatement", value: expr };
}
