import { describe, expect, it } from "vitest";
import type { Token } from "../../tokens";
import { parseTerm } from "../term";

describe("term", () => {
  it("should parse a number", () => {
    const tokens: Token[] = [{ type: "NUMBER", value: "1" }];
    const ctx = { tokens, position: 0 };
    const result = parseTerm(ctx);
    expect(result).toEqual({ type: "NumberLiteral", value: 1 });
  });

  it("should parse a string", () => {
    const tokens: Token[] = [{ type: "STRING", value: '"Hello, world!"' }];
    const ctx = { tokens, position: 0 };
    const result = parseTerm(ctx);
    expect(result).toEqual({ type: "StringLiteral", value: '"Hello, world!"' });
  });
});
