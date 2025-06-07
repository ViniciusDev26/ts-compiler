import type { Statement } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { peek } from "../peek";
import { parseStatement } from "./statement";

export function parseBlock(ctx: ParseContext): Statement[] {
  consume(ctx, "LBRACE");
  const body: Statement[] = [];

  while (peek(ctx)?.type !== "RBRACE") {
    body.push(parseStatement(ctx));
  }
  consume(ctx, "RBRACE");

  return body;
}
