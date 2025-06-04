import type {
  BinaryExpression,
  Statement,
  NumberLiteral,
  VariableDeclaration,
  PrintStatement,
} from "./ast-types";
import { consume, peek } from "./calcs";
import type { Token } from "./lexer";

export function parser(tokens: Token[]): Statement[] {
  let position = 0;

  function parseVariableDeclaration(): VariableDeclaration {
    consume(tokens[position++], "KEYWORD_VAR"); // ou "KEYWORD_LET" dependendo do lexer
    const name = consume(tokens[position++], "IDENTIFIER");
    consume(tokens[position++], "EQUALS");
    const value = parseExpression();
    consume(tokens[position++], "SEMICOLON");
    return { type: "VariableDeclaration", name: name.value, value };
  }

  function parsePrintStatement(): PrintStatement {
    consume(tokens[position++], "KEYWORD_PRINT"); // print
    consume(tokens[position++], "LPAREN"); // (
    const expr = parseExpression(); // result, or more complex
    consume(tokens[position++], "RPAREN"); // )
    consume(tokens[position++], "SEMICOLON"); // ;
    return { type: "PrintStatement", value: expr };
  }

  function parseExpression(): Statement {
    let left = parseTerm();

    while (peek(tokens, position) && peek(tokens, position)?.type === "PLUS") {
      consume(tokens[position++], "PLUS");
      const right = parseTerm();
      left = {
        type: "BinaryExpression",
        left,
        operator: "+",
        right,
      } as BinaryExpression;
    }

    while (peek(tokens, position) && peek(tokens, position)?.type === "MINUS") {
      consume(tokens[position++], "MINUS");
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

  function parseTerm(): Statement {
    const token = peek(tokens, position);
    if (!token) throw new Error("Unexpected end of input");

    if (token.type === "NUMBER") {
      consume(tokens[position++], "NUMBER");
      return {
        type: "NumberLiteral",
        value: Number.parseInt(token.value, 10),
      } as NumberLiteral;
    }

    if (token.type === "IDENTIFIER") {
      consume(tokens[position++], "IDENTIFIER");
      return {
        type: "Identifier",
        name: token.value,
      };
    }

    throw new Error(`Unexpected token in term: ${token.type}`);
  }

  const statements: Statement[] = [];

  while (peek(tokens, position)) {
    const token = peek(tokens, position);

    if (token?.type === "KEYWORD_VAR") {
      statements.push(parseVariableDeclaration());
    }

    if (token?.type === "KEYWORD_PRINT") {
      statements.push(parsePrintStatement());
    }
  }

  return statements;
}
