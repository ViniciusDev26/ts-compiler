export interface ASTNode {
  type: string;
}

export interface IdentifierDeclaration extends ASTNode {
  type: "Identifier";
  name: string;
}

export interface VariableDeclaration extends ASTNode {
  type: "VariableDeclaration";
  name: string;
  value: Statement;
}

export interface ConstantDeclaration extends ASTNode {
  type: "ConstantDeclaration";
  name: string;
  value: Statement;
}

export interface PrintStatement extends ASTNode {
  type: "PrintStatement";
  value: Statement;
}

export interface BinaryExpression extends ASTNode {
  type: "BinaryExpression";
  left: Statement;
  operator: string;
  right: Statement;
}

export interface StringLiteral extends ASTNode {
  type: "StringLiteral";
  value: string;
}

export interface NumberLiteral extends ASTNode {
  type: "NumberLiteral";
  value: number;
}

export interface ParenthesizedExpression extends ASTNode {
  type: "ParenthesizedExpression";
  expression: Statement;
}

export interface Program extends ASTNode {
  type: "Program";
  body: Statement[];
}

export type Statement =
  | Program
  | VariableDeclaration
  | ConstantDeclaration
  | PrintStatement
  | IdentifierDeclaration
  | BinaryExpression
  | StringLiteral
  | NumberLiteral
  | ParenthesizedExpression;
