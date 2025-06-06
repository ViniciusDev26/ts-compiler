import { describe, expect, it } from "vitest";
import { consume } from "../consume";
import type { Token } from "../tokens";

describe("consume", () => {
  it("should consume the next token", () => {
    const tokens: Token[] = [
      { type: "NUMBER", value: "1" },
      { type: "PLUS", value: "+" },
      { type: "NUMBER", value: "2" },
    ];
    const ctx = { tokens, position: 0 };
    const result = consume(ctx, "NUMBER");
    const result2 = consume(ctx, "PLUS");
    const result3 = consume(ctx, "NUMBER");

    expect(result).toEqual({ type: "NUMBER", value: "1" });
    expect(result2).toEqual({ type: "PLUS", value: "+" });
    expect(result3).toEqual({ type: "NUMBER", value: "2" });
    expect(ctx.position).toBe(3);
  });
});
