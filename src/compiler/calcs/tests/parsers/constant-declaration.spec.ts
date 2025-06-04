import { describe, it, expect } from "vitest";
import type { Token } from "../../../lexer";
import { parseConstantDeclaration } from "../../parsers/constant-declaration";

describe("constant declaration", () => {
  it("should parse a constant declaration", () => {
    const tokens: Token[] = [
      { type: "KEYWORD_CONST", value: "const" },
      { type: "IDENTIFIER", value: "x" },
      { type: "EQUALS", value: "=" },
      { type: "NUMBER", value: "1" },
    ];
    const ctx = { tokens, position: 0 };
    const result = parseConstantDeclaration(ctx);
    expect(result).toEqual({
      type: "ConstantDeclaration",
      name: "x",
      value: { type: "NumberLiteral", value: 1 },
    });
  });
});
