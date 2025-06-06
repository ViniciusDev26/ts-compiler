import { describe, expect, it } from "vitest";
import { peek } from "../peek";
import type { Token } from "../tokens";

describe("peek", () => {
  it("should peek the next token", () => {
    const tokens: Token[] = [{ type: "NUMBER", value: "1" }];
    const ctx = { tokens, position: 0 };
    const result = peek(ctx);
    expect(result).toEqual({ type: "NUMBER", value: "1" });
  });
});
