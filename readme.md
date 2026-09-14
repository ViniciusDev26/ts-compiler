<p align="center">
    <img src="./docs/logo.png" align="center" width="22%">
</p>

<h1 align="center">Kat Compiler</h1>

<p align="center">
  <em>A hand-written compiler that turns the <code>.kat</code> language into plain JavaScript.</em>
</p>

<p align="center">
	<img src="https://img.shields.io/github/license/ViniciusDev26/ts-compiler?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/ViniciusDev26/ts-compiler?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/ViniciusDev26/ts-compiler?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/badge/tests-vitest-6E9F18?style=flat&logo=vitest&logoColor=white" alt="vitest">
	<img src="https://img.shields.io/badge/lint-biome-60A5FA?style=flat&logo=biome&logoColor=white" alt="biome">
</p>

---

## What is this?

This project is a **compiler written from scratch in TypeScript**, with no parser generators and no compiler libraries. It compiles **Kat** (`.kat`) — a language that **doesn't exist outside this repository**, invented for learning purposes and named after **Katarina, the League of Legends champion** — into **executable JavaScript**.

In other words: TypeScript is the language the compiler is *implemented in*; Kat is the language it *compiles*. This started as an academic project to study, hands-on, how a programming language comes to life — from reading raw characters all the way to generating code.

```
.kat (source code)  →  Lexer  →  Tokens  →  Parser  →  AST  →  Codegen  →  .js (JavaScript)
```

None of these stages rely on external magic: the lexer is a regex table walked by hand, the parser is classic *recursive descent*, and the code generator builds JavaScript strings straight from the syntax tree.

---

## Example: writing Kat

```kat
fn average_speed(distance_in_meters, time_in_seconds) {
  const meters_by_second = distance_in_meters <> time_in_seconds
  const speed_in_km = meters_by_second * 3.6

  print("SPEED IN M/S:")
  print(meters_by_second)

  print("SPEED IN KM/H")
  print(speed_in_km)
}

average_speed(10, 2)
```

This gets compiled into equivalent JavaScript and written to `output.js`, ready to run with `node`.

### Language features

| Category | Support |
| :--- | :--- |
| Variables | `var` (mutable) and `const` (immutable) |
| Output | `print(expression)` |
| Control flow | `if` / `else`, `while`, `break` |
| Functions | declared with `fn`, with parameters and calls |
| Arithmetic operators | `+` `-` `*` `%` and `<>` (division) |
| Relational operators | `>` `>=` `<` `<=` `==` |
| Literals | numbers, strings, and parenthesized expressions |

> Fun fact: in Kat, division is `<>`, not `/`. That's an intentional language-design quirk — check `src/compiler/calcs/tokens.ts` before assuming "standard" syntax.

---

## How the compiler works under the hood

| Stage | Where | What it does |
| :--- | :--- | :--- |
| 🔤 **Lexer** | `src/compiler/lexer.ts` | Scans the source text and turns it into a list of *tokens*, using regex specs (`tokens.ts`) |
| 🌳 **Parser** | `src/compiler/parser.ts` + `src/compiler/calcs/parsers/*` | Consumes the tokens via *recursive descent* and builds the **AST** (Abstract Syntax Tree) |
| 🧬 **AST** | `src/compiler/ast-types.ts` | Defines the tree's node types: declarations, expressions, literals, loops, functions |
| ⚙️ **Codegen** | `src/compiler/codegen.ts` | Walks the AST and generates the final equivalent JavaScript string |

Every language construct (`if`, `while`, `fn`, assignments, etc.) has its own dedicated parser inside `src/compiler/calcs/parsers/`, which keeps the grammar organized and easy to extend — want to add a new keyword? Just write a new parser and wire it into `statement.ts`.

---

## Getting Started

### Prerequisites

- **Node.js** + **npm**
- TypeScript (installed as a dev dependency)

### Installation

```sh
git clone https://github.com/ViniciusDev26/ts-compiler
cd ts-compiler
npm install
```

### Running the compiler

The compiler reads `src/input-source/index.kat`, compiles it, and writes the result to `output.js`:

```sh
npm run dev
```

This runs in *watch* mode: any change to the `.kat` file recompiles automatically. Then run the generated JavaScript:

```sh
node output.js
```

### Tests

```sh
npm test          # watch mode
npm run test:run  # single run (CI)
```

Tests live next to the code they cover, in `tests/` subfolders (e.g. `src/compiler/calcs/parsers/tests/`).

### Code quality

```sh
npm run check:types   # type checking (tsc --noEmit)
npm run lint          # lint + format with Biome
```

A Husky pre-commit hook runs tests and type checking automatically before every commit.

---

## Project structure

```
ts-compiler/
├── src/
│   ├── compiler/
│   │   ├── lexer.ts            # tokenization
│   │   ├── parser.ts           # orchestrates parsing
│   │   ├── ast-types.ts        # AST node types
│   │   ├── codegen.ts          # generates the final JavaScript
│   │   ├── run.ts              # pipeline entry point
│   │   └── calcs/
│   │       ├── tokens.ts       # token specs (regex)
│   │       ├── consume.ts      # consumes/validates the current token
│   │       ├── peek.ts         # peeks at the next token
│   │       └── parsers/        # one parser per language construct
│   └── input-source/
│       └── index.kat           # sample Kat program
├── output.js                   # compiler output
└── docs/logo.png
```

---

## Editor support

There's a minimal VSCode extension that adds syntax highlighting for `.kat` files — see [`editors/vscode-kat`](./editors/vscode-kat).

---

## Author

- Carlos Vinicius (2020808)
