import { describe, expect, it } from "vitest";
import type { Token } from "../../tokens";
import { parseVariableDeclaration } from "../variable-declaration";

describe("variable declaration", () => {
  it("should parse a variable declaration", () => {
    const tokens: Token[] = [
      { type: "KEYWORD_VAR", value: "var" },
      { type: "IDENTIFIER", value: "x" },
      { type: "EQUALS", value: "=" },
      { type: "NUMBER", value: "1" },
    ];
    const ctx = { tokens, position: 0 };
    const result = parseVariableDeclaration(ctx);
    expect(result).toEqual({
      type: "VariableDeclaration",
      name: "x",
      value: { type: "NumberLiteral", value: 1 },
    });
  });
});
