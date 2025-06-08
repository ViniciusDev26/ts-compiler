import type {
  FunctionDeclaration,
  IdentifierDeclaration,
} from "../../ast-types";
import type { ParseContext } from "../../parser";
import { consume } from "../consume";
import { peek } from "../peek";
import { parseBlock } from "./block";
import { parseTerm } from "./term";

export function parseFunctionDeclaration(
  ctx: ParseContext,
): FunctionDeclaration {
  consume(ctx, "KEYWORD_FUNCTION");
  const name = consume(ctx, "IDENTIFIER");
  consume(ctx, "LPAREN");
  const parameters: IdentifierDeclaration[] = [];

  while (peek(ctx)?.type !== "RPAREN") {
    const param = parseTerm(ctx);
    if (param.type === "Identifier") {
      parameters.push(param);
    } else {
      throw new Error("Expected identifier in function parameters");
    }
  }
  consume(ctx, "RPAREN");
  const body = parseBlock(ctx);
  return {
    type: "FunctionDeclaration",
    name: name.value,
    parameters,
    body,
  };
}
