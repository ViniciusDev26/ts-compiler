import type { Statement } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { parseExpression } from "./expression";

export function parseAssignment(ctx: ParseContext): Statement {
  const nameToken = consume(ctx, "IDENTIFIER");
  consume(ctx, "ATTRIBUTE_ASSIGNMENT");
  const value = parseExpression(ctx);

  return {
    type: "AssignmentExpression",
    name: nameToken.value,
    value,
  };
}
