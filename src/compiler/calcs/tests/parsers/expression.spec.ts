import { describe, it, expect } from "vitest";
import type { Token } from "../../../lexer";
import { parseExpression } from "../../parsers/expression";

describe("expression", () => {
  it("should parse a number", () => {
    const tokens: Token[] = [{ type: "NUMBER", value: "1" }];
    const ctx = { tokens, position: 0 };
    const result = parseExpression(ctx);
    expect(result).toEqual({ type: "NumberLiteral", value: 1 });
  });
});
