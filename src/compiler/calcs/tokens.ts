export type KeywordType =
  | "KEYWORD_VAR"
  | "KEYWORD_CONST"
  | "KEYWORD_PRINT"
  | "KEYWORD_IF";
export type OperatorType =
  | "MODULO"
  | "PLUS"
  | "MINUS"
  | "MULTIPLY"
  | "DIVIDE"
  | "EQUALS";
export type BlockType = "LBRACE" | "RBRACE" | "LPAREN" | "RPAREN";
export type LiteralType = "NUMBER" | "STRING";
export type IdentifierType = "IDENTIFIER";

export type TokenType =
  | KeywordType
  | OperatorType
  | BlockType
  | IdentifierType
  | LiteralType;

export interface Token {
  type: TokenType;
  value: string;
}

const tokenSpecsKeyword: [RegExp, TokenType | null][] = [
  [/^\s+/, null],
  [/^var\b/, "KEYWORD_VAR"],
  [/^const\b/, "KEYWORD_CONST"],
  [/^\bprint\b/, "KEYWORD_PRINT"],
];

const tokenSpecsBlock: [RegExp, TokenType | null][] = [
  [/^\(/, "LPAREN"],
  [/^\)/, "RPAREN"],
  [/^\{/, "LBRACE"],
  [/\}/, "RBRACE"],
];

const tokenSpecsLiteral: [RegExp, TokenType | null][] = [
  [/^\d+/, "NUMBER"],
  [/^"[^"]*"/, "STRING"],
];

const tokenSpecsIdentifier: [RegExp, TokenType | null][] = [
  [/^[a-zA-Z_][a-zA-Z0-9_]*/, "IDENTIFIER"],
];

const tokenSpecsOperator: [RegExp, TokenType | null][] = [
  [/^\+/, "PLUS"],
  [/^-/, "MINUS"],
  [/^\*/, "MULTIPLY"],
  [/^<>/, "DIVIDE"],
  [/^\=/, "EQUALS"],
  [/^\%/, "MODULO"],
];

export const tokenSpecs: [RegExp, TokenType | null][] = [
  ...tokenSpecsKeyword,
  ...tokenSpecsBlock,
  ...tokenSpecsIdentifier,
  ...tokenSpecsOperator,
  ...tokenSpecsLiteral,
];
