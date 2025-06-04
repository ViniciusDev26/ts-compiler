import type { NumberLiteral, Statement } from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { peek } from "../peek";

export function parseTerm(ctx: ParseContext): Statement {
  const token = peek(ctx);
  if (!token) throw new Error("Unexpected end of input");

  if (token.type === "NUMBER") {
    consume(ctx, "NUMBER");
    return {
      type: "NumberLiteral",
      value: Number.parseInt(token.value, 10),
    } as NumberLiteral;
  }

  if (token.type === "IDENTIFIER") {
    consume(ctx, "IDENTIFIER");
    return {
      type: "Identifier",
      name: token.value,
    };
  }

  throw new Error(`Unexpected token in term: ${token.type}`);
}
