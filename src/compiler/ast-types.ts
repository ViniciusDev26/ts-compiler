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
  value: Expression;
}

export interface BinaryExpression extends ASTNode {
  type: "BinaryExpression";
  left: Expression;
  operator: string;
  right: Expression;
}

export interface NumberLiteral extends ASTNode {
  type: "NumberLiteral";
  value: number;
}

export type Expression =
  | VariableDeclaration
  | IdentifierDeclaration
  | BinaryExpression
  | NumberLiteral;
