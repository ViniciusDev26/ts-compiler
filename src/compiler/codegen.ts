import type { ASTNode, Statement } from "./ast-types";

export function evaluate(node: Statement): number {
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

export function generateJsCode(node: Statement[] | Statement): string {
  const input = Array.isArray(node) ? node : [node];
  let code = "";

  for (const statement of input) {
    switch (statement.type) {
      case "Identifier":
        code += statement.name;
        break;

      case "VariableDeclaration":
        code += `let ${statement.name} = ${generateJsCode(statement.value)};`;
        break;

      case "ConstantDeclaration":
        code += `const ${statement.name} = ${generateJsCode(statement.value)};`;
        break;

      case "BinaryExpression": {
        code += `${generateJsCode(statement.left)} ${statement.operator} ${generateJsCode(statement.right)}`;
        break;
      }

      case "NumberLiteral":
        return `${statement.value}`;

      case "PrintStatement":
        code += `console.log(${generateJsCode(statement.value)});`;
        break;

      default:
        throw new Error(`Unknown node type: ${(statement as ASTNode).type}`);
    }
  }

  return code;
}
