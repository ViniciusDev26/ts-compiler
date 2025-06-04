export interface ASTNode {
  type: string;
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

export type Expression = BinaryExpression | NumberLiteral;
