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

export interface AssignmentExpression extends ASTNode {
  type: "AssignmentExpression";
  name: string;
  value: Statement;
}

export interface IfStatement extends ASTNode {
  type: "IfStatement";
  condition: Statement;
  body: Statement[];
  elseBody?: Statement[];
}

export interface WhileStatement extends ASTNode {
  type: "WhileStatement";
  condition: Statement;
  body: Statement[];
}

export interface BreakStatement extends ASTNode {
  type: "BreakStatement";
}

export type Statement =
  | VariableDeclaration
  | ConstantDeclaration
  | PrintStatement
  | IdentifierDeclaration
  | BinaryExpression
  | StringLiteral
  | NumberLiteral
  | ParenthesizedExpression
  | AssignmentExpression
  | IfStatement
  | WhileStatement
  | BreakStatement;
