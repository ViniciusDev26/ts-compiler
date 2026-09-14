import { type Token, tokenSpecs } from "./calcs/tokens";

/**
 * Sticky (lastIndex-anchored) variants of tokenSpecs, so the lexer can scan
 * the input with a cursor instead of slicing a new string on every token.
 */
const stickyTokenSpecs = tokenSpecs.map(
  ([regex, type]) =>
    [new RegExp(regex.source.replace(/^\^/, ""), "y"), type] as const,
);

/**
 * Lexes the input string into a list of tokens
 * @param input - The input string
 * @returns The list of tokens
 */
export function lexer(input: string): Token[] {
  const tokens: Token[] = [];
  let cursor = 0;

  while (cursor < input.length) {
    let matched = false;

    for (const [regex, type] of stickyTokenSpecs) {
      regex.lastIndex = cursor;
      const match = regex.exec(input);
      if (match) {
        matched = true;
        if (type) {
          tokens.push({ type, value: match[0] });
        }
        cursor += match[0].length;
        break;
      }
    }

    if (!matched) {
      throw new Error(`Unexpected token: "${input[cursor]}"`);
    }
  }

  return tokens;
}
