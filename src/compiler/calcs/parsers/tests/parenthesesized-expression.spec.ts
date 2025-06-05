import { describe, expect, it } from "vitest";
import type { ParseContext } from "../../../parser";
import { parseParenthesizedExpression } from "../parenthesesized-expression";

describe("parseParenthesizedExpression", () => {
  it("should parse a parenthesized expression", () => {
    const ctx: ParseContext = {
      tokens: [
        { type: "LPAREN", value: "(" },
        { type: "NUMBER", value: "1" },
        { type: "PLUS", value: "+" },
        { type: "NUMBER", value: "2" },
        { type: "RPAREN", value: ")" },
      ],
      position: 0,
    };
    const result = parseParenthesizedExpression(ctx);
    expect(result).toEqual({
      type: "ParenthesizedExpression",
      expression: {
        type: "BinaryExpression",
        left: { type: "NumberLiteral", value: 1 },
        operator: "+",
        right: { type: "NumberLiteral", value: 2 },
      },
    });
  });
});
