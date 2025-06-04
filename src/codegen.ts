import { Expression } from './ast-types';

export function evaluate(node: Expression): number {
  switch (node.type) {
    case 'NumberLiteral':
      return node.value;
    case 'BinaryExpression':
      const left = evaluate(node.left);
      const right = evaluate(node.right);
      if (node.operator === '+') {
        return left + right;
      }

      if (node.operator === '-') {
        return left - right;
      }

      throw new Error(`Unsupported operator: ${node.operator}`);
    default:
      throw new Error(`Unknown node type: ${(node as any).type}`);
  }
}
