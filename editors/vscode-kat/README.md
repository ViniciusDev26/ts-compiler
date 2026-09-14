# Kat Language (VSCode extension)

Syntax highlighting for `.kat` files — the language compiled by this repository's compiler (`src/compiler`).

## Install locally

1. Open the Extensions view in VSCode (`Cmd+Shift+X`).
2. Click the `...` menu → **Install from Location...**
3. Select this folder: `editors/vscode-kat`.
4. Open any `.kat` file (e.g. `src/input-source/index.kat`) — it should now be highlighted.

Alternatively, symlink this folder into your extensions directory:

```sh
ln -s "$(pwd)/editors/vscode-kat" ~/.vscode/extensions/kat-language-0.1.0
```

Then reload VSCode.

## What's covered

Highlighting for keywords (`var`, `const`, `if`, `while`, `break`, `fn`, `return`), the `print` builtin, function declarations/calls, strings, numbers, and operators (including Kat's `<>` division operator). This is TextMate-based highlighting only — no error checking, autocomplete, or language server. See the root `readme.md` for a note on a possible LSP upgrade path.
