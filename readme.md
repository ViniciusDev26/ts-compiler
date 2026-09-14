<p align="center">
    <img src="./docs/logo.png" align="center" width="20%">
</p>

<h1 align="center">🗡️ Kat Compiler</h1>

<p align="center">
  <em>A hand-written compiler that turns the <code>.kat</code> language into plain JavaScript.</em>
</p>

<p align="center">
	<img src="https://img.shields.io/github/license/ViniciusDev26/ts-compiler?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/ViniciusDev26/ts-compiler?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/ViniciusDev26/ts-compiler?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/badge/tests-vitest-6E9F18?style=flat&logo=vitest&logoColor=white" alt="vitest">
	<img src="https://img.shields.io/badge/lint-biome-60A5FA?style=flat&logo=biome&logoColor=white" alt="biome">
	<img src="https://img.shields.io/badge/type--safe-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="typescript">
</p>

<p align="center">
  <a href="#-what-is-this">What is this</a> ·
  <a href="#-example-writing-kat">Example</a> ·
  <a href="#-how-the-compiler-works-under-the-hood">Architecture</a> ·
  <a href="#-getting-started">Getting started</a> ·
  <a href="#-project-structure">Structure</a> ·
  <a href="#-editor-support">Editor support</a>
</p>

---

## 📖 What is this?

**Kat Compiler** is a compiler **written from scratch in TypeScript** — no parser generators, no compiler-construction libraries, no shortcuts. It compiles **Kat** (`.kat`), a language that **doesn't exist anywhere outside this repository**, into **plain, executable JavaScript**.

> **Why "Kat"?** The language is named after **Katarina**, the assassin champion from *League of Legends*. No deep lore beyond that — it just sounded like a good name for a small, sharp language.

Don't confuse the two: **TypeScript** is the language this compiler is *written in*. **Kat** is the language this compiler *compiles*. One builds the other.

This project exists to answer a question hands-on: how does a programming language actually come to life — from raw characters on a screen, all the way to running code?

```
   .kat source            Lexer            Parser             Codegen           output.js
┌───────────────┐     ┌───────────┐    ┌─────────────┐     ┌─────────────┐    ┌───────────┐
│ fn speed(a,b) │ ──▶ │  tokens   │ ─▶ │     AST      │ ──▶ │  JS string  │ ─▶ │  node.js  │
│  print(a<>b)  │     │ [IDENT,   │    │ FunctionDecl │     │ function... │    │  ready to │
└───────────────┘     │  LPAREN…] │    │  └ PrintStmt │     └─────────────┘    │    run    │
                       └───────────┘    └─────────────┘                       └───────────┘
```

No black boxes: the lexer is a regex table walked by hand, the parser is textbook *recursive descent*, and the code generator builds JavaScript strings directly from the syntax tree. Everything is inspectable, and every stage has its own test suite.

---

## ✍️ Example: writing Kat

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

Run `npm run dev` and this becomes real, runnable JavaScript in `output.js` — ready for `node`.

### Language cheat sheet

| Category | Support |
| :--- | :--- |
| Variables | `var` (mutable) and `const` (immutable) |
| Output | `print(expression)` |
| Control flow | `if`, `while`, `break` |
| Functions | declared with `fn`, with parameters and calls |
| Arithmetic | `+` `-` `*` `%` and `<>` (yes — that's *division*) |
| Comparisons | `>` `>=` `<` `<=` `==` |
| Literals | numbers, strings, and parenthesized expressions |

> 🩸 **Sharp edge, on purpose:** division in Kat is `<>`, not `/`. It's an intentional quirk of the language design — always check `src/compiler/calcs/tokens.ts` before assuming "normal" syntax rules apply.

---

## 🧠 How the compiler works under the hood

| Stage | Where | What it does |
| :--- | :--- | :--- |
| 🔤 **Lexer** | `src/compiler/lexer.ts` | Scans the raw source text and turns it into a flat list of *tokens*, driven by the regex table in `tokens.ts` |
| 🌳 **Parser** | `src/compiler/parser.ts` + `src/compiler/calcs/parsers/*` | Walks the tokens via *recursive descent* and assembles the **AST** (Abstract Syntax Tree) |
| 🧬 **AST** | `src/compiler/ast-types.ts` | The node types that make up the tree: declarations, expressions, literals, loops, functions |
| ⚙️ **Codegen** | `src/compiler/codegen.ts` | Walks the AST and emits the equivalent JavaScript source, as a plain string |

Every language construct — `if`, `while`, `fn`, assignments, and so on — has its **own dedicated parser file** inside `src/compiler/calcs/parsers/`. That keeps the grammar modular and easy to extend: adding a new keyword to Kat means writing one new parser and wiring it into `statement.ts`, the dispatcher that decides which parser handles which token.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** + **npm**
- TypeScript (already listed as a dev dependency — `npm install` handles it)

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

This runs in **watch mode** — edit the `.kat` file and it recompiles instantly. Then run the generated JavaScript:

```sh
node output.js
```

### Tests

```sh
npm test          # watch mode
npm run test:run  # single run (CI-style)
```

Tests live right next to the code they cover, inside `tests/` subfolders (e.g. `src/compiler/calcs/parsers/tests/`) — one spec file per parser.

### Code quality

```sh
npm run check:types   # type checking (tsc --noEmit)
npm run lint          # lint + format with Biome
```

A Husky pre-commit hook runs the test suite and type checker automatically before every commit — broken code never gets committed.

---

## 🗂️ Project structure

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
├── editors/
│   └── vscode-kat/              # VSCode syntax-highlighting extension
├── output.js                   # compiler output
└── docs/logo.png
```

---

## 🎨 Editor support

Writing Kat in plain text gets old fast, so there's a minimal **VSCode extension** that adds syntax highlighting for `.kat` files — keywords, strings, numbers, operators (including that `<>` division), function declarations and calls.

👉 See [`editors/vscode-kat`](./editors/vscode-kat) for install instructions.

<p align="center">
  <sub>Full language server support (real-time errors, autocomplete) is a natural next step — the lexer and parser are already there, ready to be reused.</sub>
</p>

---

## 👤 Author

Built by **Carlos Vinicius** (2020808) as a hands-on dive into compiler construction.
