import type { Statement } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";

export function parseBreakStatement(ctx: ParseContext): Statement {
  consume(ctx, "KEYWORD_BREAK");
  return { type: "BreakStatement" };
}
