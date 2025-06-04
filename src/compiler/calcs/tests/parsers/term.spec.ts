import { describe, it, expect } from "vitest";
import type { Token } from "../../../lexer";
import { parseTerm } from "../../parsers/term";

describe("term", () => {
  it("should parse a number", () => {
    const tokens: Token[] = [{ type: "NUMBER", value: "1" }];
    const ctx = { tokens, position: 0 };
    const result = parseTerm(ctx);
    expect(result).toEqual({ type: "NumberLiteral", value: 1 });
  });
});
