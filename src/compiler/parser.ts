import type {
  BinaryExpression,
  Expression,
  NumberLiteral,
  VariableDeclaration,
} from "./ast-types";
import type { Token } from "./lexer";

export function parser(tokens: Token[]): Expression {
  let position = 0;

  function peek(): Token | undefined {
    return tokens[position];
  }

  function consume(expected?: string): Token {
    const token = tokens[position++];
    if (expected && token.type !== expected) {
      throw new Error(`Expected ${expected}, got ${token.type}`);
    }
    return token;
  }

  function parseVariableDeclaration(): VariableDeclaration {
    consume("KEYWORD_VAR"); // ou "KEYWORD_LET" dependendo do lexer
    const name = consume("IDENTIFIER");
    consume("EQUALS");
    const value = parseExpression();
    consume("SEMICOLON");
    return { type: "VariableDeclaration", name: name.value, value };
  }

  function parseExpression(): Expression {
    let left = parseTerm();

    while (peek() && peek()?.type === "PLUS") {
      consume("PLUS");
      const right = parseTerm();
      left = {
        type: "BinaryExpression",
        left,
        operator: "+",
        right,
      } as BinaryExpression;
    }

    while (peek() && peek()?.type === "MINUS") {
      consume("MINUS");
      const right = parseTerm();
      left = {
        type: "BinaryExpression",
        left,
        operator: "-",
        right,
      } as BinaryExpression;
    }

    return left;
  }

  function parseTerm(): Expression {
    const token = peek();
    if (!token) throw new Error("Unexpected end of input");

    if (token.type === "NUMBER") {
      consume("NUMBER");
      return {
        type: "NumberLiteral",
        value: Number.parseInt(token.value, 10),
      } as NumberLiteral;
    }

    if (token.type === "IDENTIFIER") {
      consume("IDENTIFIER");
      return {
        type: "Identifier",
        name: token.value,
      };
    }

    throw new Error(`Unexpected token in term: ${token.type}`);
  }

  if (peek()?.type === "KEYWORD_VAR") {
    return parseVariableDeclaration();
  }

  consume("SEMICOLON");

  if (peek()?.type === "KEYWORD_VAR") {
    return parseVariableDeclaration();
  }

  const expr = parseExpression();
  consume("SEMICOLON");
  return expr;
}
