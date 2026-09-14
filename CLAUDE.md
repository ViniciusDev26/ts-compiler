# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A hand-written compiler for a small custom language (files with `.kat` extension, referred to internally as "Kat"). It compiles `.kat` source into plain JavaScript through the classic lexer → parser → codegen pipeline. There is no runtime interpreter for the final program — the generated JS is written to `output.js` and executed by Node like any other JS file.

## Commands

- `npm run dev` — compiles `src/input-source/index.kat` via `src/compiler/run.ts`, watching that file for changes (uses `tsx watch`). This is the main way to exercise the compiler end-to-end; it writes the result to `output.js`.
- `npm test` — runs the Vitest suite in watch mode.
- `npm run test:run` — runs the Vitest suite once (CI-style).
- `npm run check:types` — runs `tsc --noEmit` for type checking.
- `npm run lint` — runs Biome (`biome check --write`) to lint/format.
- `npm run lint:fix` — same, but applies unsafe fixes too.

To run a single test file: `npx vitest run src/compiler/calcs/parsers/tests/expression.spec.ts` (swap in the relevant path). Tests live alongside the code they cover, in `tests/` subfolders (e.g. `src/compiler/calcs/tests/`, `src/compiler/calcs/parsers/tests/`), named `*.spec.ts`.

A Husky pre-commit hook (`.husky/pre-commit`) runs `npm run test:run` and `npm run check:types` — both must pass before a commit succeeds.

## Architecture

The pipeline (see `src/compiler/run.ts`) is: **source text → `lexer()` → tokens → `parser()` → AST (`Statement[]`) → `generateJsCode()` → JS source string**.

- **Lexer** (`src/compiler/lexer.ts` + `src/compiler/calcs/tokens.ts`): a simple regex-table scanner. `tokenSpecs` is an ordered list of `[RegExp, TokenType | null]` pairs (grouped by keyword/block/identifier/operator/literal in `tokens.ts`); the lexer tries each regex against the remaining input in order and consumes the first match. Order matters — e.g. keywords must be matched before the generic `IDENTIFIER` pattern. A `null` token type (e.g. whitespace) is matched and consumed but not emitted.

- **Parser** (`src/compiler/parser.ts` + `src/compiler/calcs/`): a hand-rolled recursive-descent parser operating over a shared `ParseContext { tokens, position }`. Each grammar construct has its own file under `src/compiler/calcs/parsers/` (`statement.ts`, `expression.ts`, `term.ts`, `if.ts`, `while.ts`, `function.ts`, `block.ts`, `assignment.ts`, `break.ts`, `variable-declaration.ts`, `constant-declaration.ts`, `print.ts`, `parenthesesized-expression.ts`). `parseStatement()` (`statement.ts`) is the dispatcher: it peeks at the current token and routes to the matching sub-parser. `consume()` and `peek()` (`src/compiler/calcs/consume.ts`, `peek.ts`) are the shared primitives every parser uses to read/advance through `ParseContext.position`; `consume` throws if the next token doesn't match the expected type.
  - Note: `src/compiler/calcs/parsers/index.ts` only re-exports a subset of parsers (constant-declaration, expression, print, term, variable-declaration) — newer parsers (if/while/function/block/assignment/break) are imported directly from their files rather than through this barrel.

- **AST** (`src/compiler/ast-types.ts`): all node interfaces extend `ASTNode { type: string }`; the parser's output type is the `Statement` union of every node kind (declarations, expressions, literals, control flow, functions/calls).

- **Codegen** (`src/compiler/codegen.ts`): `generateJsCode()` walks the `Statement`/`Statement[]` AST and string-concatenates equivalent JavaScript (e.g. `VariableDeclaration` → `let x = ...;`, `IfStatement` → `if (...) { ... }`). It's a direct, non-optimizing source-to-source transform — no separate IR. There is also an `evaluate()` function that directly interprets a small subset of node types (numbers, binary +/-, variable declarations) rather than generating code; it's not part of the main `run.ts` pipeline.

- **Path aliases**: `tsconfig.json` defines `@parsers/*` → `src/compiler/calcs/parsers/*` (and unused `@parser/*`, `@lexer/*`, `@codegen/*` aliases pointing at directories that don't exist yet). Code should use `@parsers/*` for parser imports rather than long relative paths.

- **Language surface** (inferred from `tokens.ts`/`ast-types.ts`/`src/input-source/index.kat`): `var`/`const` declarations, `print(...)`, `if`, `while`, `break`, `fn` function declarations with calls, arithmetic (`+ - * %`, and `<>` for divide), comparisons (`> >= < <= ==`), parenthesized expressions, string and number literals. Note the lexer has a stray `[/^\==/, "EQUALS"]` pattern (redundant leading `\`) and `<>` (not `/`) is used for division — check `tokens.ts` directly rather than assuming standard C-like syntax.
