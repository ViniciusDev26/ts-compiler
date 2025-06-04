import { describe, it, expect } from "vitest";
import type { Token } from "../../../lexer";
import { parsePrintStatement } from "../../parsers/print";

describe("print", () => {
  it("should parse a print statement", () => {
    const tokens: Token[] = [
      { type: "KEYWORD_PRINT", value: "print" },
      { type: "LPAREN", value: "(" },
      { type: "NUMBER", value: "1" },
      { type: "RPAREN", value: ")" },
    ];
    const ctx = { tokens, position: 0 };
    const result = parsePrintStatement(ctx);
    expect(result).toEqual({
      type: "PrintStatement",
      value: { type: "NumberLiteral", value: 1 },
    });
  });
});
