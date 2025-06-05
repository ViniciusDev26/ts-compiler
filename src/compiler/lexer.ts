import { type Token, tokenSpecs } from "./calcs/tokens";

/**
 * Lexes the input string into a list of tokens
 * @param input - The input string
 * @returns The list of tokens
 */
export function lexer(input: string): Token[] {
  const tokens: Token[] = [];
  let current = input;

  while (current.length > 0) {
    let matched = false;

    for (const [regex, type] of tokenSpecs) {
      const match = regex.exec(current);
      if (match) {
        matched = true;
        if (type) {
          tokens.push({ type, value: match[0] });
        }
        current = current.slice(match[0].length);
        break;
      }
    }

    if (!matched) {
      throw new Error(`Unexpected token: "${current[0]}"`);
    }
  }

  return tokens;
}
