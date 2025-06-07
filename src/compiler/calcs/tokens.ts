export type KeywordType =
  | "KEYWORD_VAR"
  | "KEYWORD_CONST"
  | "KEYWORD_PRINT"
  | "KEYWORD_IF"
  | "KEYWORD_WHILE"
  | "KEYWORD_BREAK";
export type OperatorType =
  | "MODULO"
  | "PLUS"
  | "MINUS"
  | "MULTIPLY"
  | "DIVIDE"
  | "EQUALS"
  | "GREATER_THAN"
  | "GREATER_THAN_EQUALS"
  | "LESS_THAN"
  | "LESS_THAN_EQUALS";
export type BlockType = "LBRACE" | "RBRACE" | "LPAREN" | "RPAREN";
export type LiteralType = "NUMBER" | "STRING";
export type IdentifierType = "IDENTIFIER" | "ATTRIBUTE_ASSIGNMENT";

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
  [/^if\b/, "KEYWORD_IF"],
  [/^var\b/, "KEYWORD_VAR"],
  [/^const\b/, "KEYWORD_CONST"],
  [/^\bprint\b/, "KEYWORD_PRINT"],
  [/^while\b/, "KEYWORD_WHILE"],
  [/^break\b/, "KEYWORD_BREAK"],
];

const tokenSpecsBlock: [RegExp, TokenType | null][] = [
  [/^\(/, "LPAREN"],
  [/^\)/, "RPAREN"],
  [/^\{/, "LBRACE"],
  [/^}/, "RBRACE"],
];

const tokenSpecsLiteral: [RegExp, TokenType | null][] = [
  [/^\d+/, "NUMBER"],
  [/^"[^"]*"/, "STRING"],
];

const tokenSpecsIdentifier: [RegExp, TokenType | null][] = [
  [/^\=/, "ATTRIBUTE_ASSIGNMENT"],
  [/^[a-zA-Z_][a-zA-Z0-9_]*/, "IDENTIFIER"],
];

const tokenSpecsOperator: [RegExp, TokenType | null][] = [
  [/^\+/, "PLUS"],
  [/^-/, "MINUS"],
  [/^\*/, "MULTIPLY"],
  [/^<>/, "DIVIDE"],
  [/^\%/, "MODULO"],

  [/^\==/, "EQUALS"],
  [/^\>=/, "GREATER_THAN_EQUALS"],
  [/^\>/, "GREATER_THAN"],
  [/^\<=/, "LESS_THAN_EQUALS"],
  [/^\</, "LESS_THAN"],
];

export const tokenSpecs: [RegExp, TokenType | null][] = [
  ...tokenSpecsKeyword,
  ...tokenSpecsBlock,
  ...tokenSpecsIdentifier,
  ...tokenSpecsOperator,
  ...tokenSpecsLiteral,
];
