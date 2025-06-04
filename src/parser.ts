import { Token } from './lexer';
import { Expression, BinaryExpression, NumberLiteral } from './ast-types';

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

  function parseExpression(): Expression {
    let left = parseTerm();

    while (peek() && peek()!.type === 'PLUS') {
      consume('PLUS');
      const right = parseTerm();
      left = {
        type: 'BinaryExpression',
        left,
        operator: '+',
        right,
      } as BinaryExpression;
    }

    while (peek() && peek()!.type === 'MINUS') {
      consume('MINUS');
      const right = parseTerm();
      left = {
        type: 'BinaryExpression',
        left,
        operator: '-',
        right,
      } as BinaryExpression;
    }

    return left;
  }

  function parseTerm(): Expression {
    const token = consume('NUMBER');
    return {
      type: 'NumberLiteral',
      value: parseInt(token.value, 10),
    } as NumberLiteral;
  }

  const expr = parseExpression();

  if (peek() && peek()!.type === 'SEMICOLON') {
    consume('SEMICOLON');
  } else {
    throw new Error('Missing semicolon at the end.');
  }

  return expr;
}
