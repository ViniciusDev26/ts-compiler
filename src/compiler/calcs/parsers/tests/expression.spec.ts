import { describe, expect, it } from "vitest";
import type { Token } from "../../tokens";
import {
  parseBinaryOperation,
  parseExpression,
  solveExpression,
} from "../expression";

describe("expression", () => {
  it("should parse a number", () => {
    const tokens: Token[] = [{ type: "NUMBER", value: "1" }];
    const ctx = { tokens, position: 0 };
    const result = parseExpression(ctx);
    expect(result).toEqual({ type: "NumberLiteral", value: 1 });
  });

  it("should parse a binary expression", () => {
    const tokens: Token[] = [
      { type: "NUMBER", value: "1" },
      { type: "PLUS", value: "+" },
      { type: "NUMBER", value: "2" },
    ];
    const ctx = { tokens, position: 0 };
    const result = parseExpression(ctx);
    expect(result).toEqual({
      type: "BinaryExpression",
      left: { type: "NumberLiteral", value: 1 },
      operator: "+",
      right: { type: "NumberLiteral", value: 2 },
    });
  });

  describe("solveExpression()", () => {
    it("should add two numbers", () => {
      const result = solveExpression(
        { type: "NumberLiteral", value: 1 },
        { type: "NumberLiteral", value: 2 },
        "PLUS",
      );
      expect(result).toEqual({
        type: "BinaryExpression",
        left: { type: "NumberLiteral", value: 1 },
        operator: "+",
        right: { type: "NumberLiteral", value: 2 },
      });
    });

    it("should subtract two numbers", () => {
      const result = solveExpression(
        { type: "NumberLiteral", value: 1 },
        { type: "NumberLiteral", value: 2 },
        "MINUS",
      );
      expect(result).toEqual({
        type: "BinaryExpression",
        left: { type: "NumberLiteral", value: 1 },
        operator: "-",
        right: { type: "NumberLiteral", value: 2 },
      });
    });

    it("should multiply two numbers", () => {
      const result = solveExpression(
        { type: "NumberLiteral", value: 1 },
        { type: "NumberLiteral", value: 2 },
        "MULTIPLY",
      );
      expect(result).toEqual({
        type: "BinaryExpression",
        left: { type: "NumberLiteral", value: 1 },
        operator: "*",
        right: { type: "NumberLiteral", value: 2 },
      });
    });

    it("should divide two numbers", () => {
      const result = solveExpression(
        { type: "NumberLiteral", value: 5 },
        { type: "NumberLiteral", value: 2 },
        "DIVIDE",
      );

      expect(result).toEqual({
        type: "BinaryExpression",
        operator: "/",
        left: { type: "NumberLiteral", value: 5 },
        right: { type: "NumberLiteral", value: 2 },
      });
    });

    it("should modulo two numbers", () => {
      const result = solveExpression(
        { type: "NumberLiteral", value: 5 },
        { type: "NumberLiteral", value: 2 },
        "MODULO",
      );
      expect(result).toEqual({
        type: "BinaryExpression",
        operator: "%",
        left: { type: "NumberLiteral", value: 5 },
        right: { type: "NumberLiteral", value: 2 },
      });
    });

    it("should compare two numbers", () => {
      const result = solveExpression(
        { type: "NumberLiteral", value: 1 },
        { type: "NumberLiteral", value: 2 },
        "EQUALS",
      );
      expect(result).toEqual({
        type: "BinaryExpression",
        operator: "==",
        left: { type: "NumberLiteral", value: 1 },
        right: { type: "NumberLiteral", value: 2 },
      });
    });
  });

  describe("parseBinaryOperation()", () => {
    it("should parse a binary expression", () => {
      const tokens: Token[] = [
        { type: "PLUS", value: "+" },
        { type: "NUMBER", value: "2" },
      ];
      const ctx = { tokens, position: 0 };
      const result = parseBinaryOperation(ctx, {
        type: "NumberLiteral",
        value: 1,
      });

      expect(result).toEqual({
        type: "BinaryExpression",
        left: { type: "NumberLiteral", value: 1 },
        operator: "+",
        right: { type: "NumberLiteral", value: 2 },
      });
    });
  });
});
