import { describe, expect, it } from "vitest";
import type { Token } from "../../lexer";
import { peek } from "../peek";

describe("peek", () => {
  it("should peek the next token", () => {
    const tokens: Token[] = [{ type: "NUMBER", value: "1" }];
    const ctx = { tokens, position: 0 };
    const result = peek(ctx);
    expect(result).toEqual({ type: "NUMBER", value: "1" });
  });
});
