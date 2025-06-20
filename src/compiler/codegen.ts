import type { ASTNode, Statement } from "./ast-types";

/**
 * Evaluates the AST node
 * @param node - The AST node
 * @returns The evaluated value
 */
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

/**
 * Generates the JavaScript code from the AST
 * @param node - The AST node
 * @returns The generated JavaScript code
 */
export function generateJsCode(node: Statement | Statement[]): string {
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

      case "ParenthesizedExpression":
        code += `(${generateJsCode(statement.expression)})`;
        break;

      case "StringLiteral":
      case "NumberLiteral":
        return `${statement.value}`;

      case "PrintStatement":
        code += `console.log(${generateJsCode(statement.value)});`;
        break;

      case "AssignmentExpression":
        code += `${statement.name} = ${generateJsCode(statement.value)};`;
        break;

      case "IfStatement":
        code += `if (${generateJsCode(statement.condition)}) {
          ${generateJsCode(statement.body)}
        }`;
        break;

      case "WhileStatement":
        code += `while (${generateJsCode(statement.condition)}) {
          ${generateJsCode(statement.body)}
        }`;
        break;

      case "BreakStatement":
        code += "break;";
        break;

      case "FunctionDeclaration":
        code += `function ${statement.name}(${statement.parameters
          .map((param) => param.name)
          .join(",")}) {
          ${generateJsCode(statement.body)}
        }`;
        break;

      case "FunctionCall":
        code += `${statement.callee}(${statement.arguments
          .map((arg) => generateJsCode(arg))
          .join(",")})`;
        break;

      default:
        throw new Error(`Unknown node type: ${(statement as ASTNode).type}`);
    }
  }

  return code;
}
