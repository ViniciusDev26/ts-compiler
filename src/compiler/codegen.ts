import type { ASTNode, Expression } from "./ast-types";

export function evaluate(node: Expression): number {
  switch (node.type) {
    case "NumberLiteral":
      return node.value;
    case "BinaryExpression": {
      const left = evaluate(node.left);
      const right = evaluate(node.right);
      if (node.operator === "+") {
        return left + right;
      }

      if (node.operator === "-") {
        return left - right;
      }

      throw new Error(`Unsupported operator: ${node.operator}`);
    }
    case "VariableDeclaration": {
      const value = evaluate(node.value);
      return value;
    }
    default:
      throw new Error(`Unknown node type: ${(node as ASTNode).type}`);
  }
}

export function generateJsCode(node: Expression): string {
  switch (node.type) {
    case "VariableDeclaration":
      return `let ${node.name} = ${generateJsCode(node.value)};`;

    case "BinaryExpression":
      return `${generateJsCode(node.left)} ${node.operator} ${generateJsCode(node.right)}`;

    case "NumberLiteral":
      return `${node.value}`;

    default:
      throw new Error(`Unknown node type: ${(node as ASTNode).type}`);
  }
}
