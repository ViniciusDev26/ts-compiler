<p align="center">
    <img src="./docs/logo.png" align="center" width="30%">
</p>
<p align="center"><h1 align="center">TS-COMPILER</h1></p>
<p align="center">
	<em>Empowering code transformation with precision and speed.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/ViniciusDev26/ts-compiler?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/ViniciusDev26/ts-compiler?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/ViniciusDev26/ts-compiler?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/ViniciusDev26/ts-compiler?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

The ts-compiler project simplifies TypeScript development by managing dependencies, defining project configurations, and generating JavaScript code. It ensures consistency, enhances workflow efficiency, and improves code quality. Ideal for developers seeking streamlined TypeScript compilation and project management, it empowers teams to work seamlessly with standardized tools and configurations.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Utilizes **TypeScript** for strong typing and enhanced developer experience.</li><li>Employs a modular structure with separate modules for lexer, parser, and code generator in the `src/compiler` directory.</li><li>Follows a compiler design pattern with clear separation of concerns for lexing, parsing, and code generation.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Enforces strict type checking and coding standards through **TypeScript** and linting configurations in `biome.json`.</li><li>Includes comprehensive unit tests for critical modules like lexer, parser, and code generator in the `src/compiler` directory.</li><li>Leverages **Husky** for pre-commit hooks to ensure code quality and consistency.</li></ul> |
| 📄 | **Documentation** | <ul><li>Extensive documentation written in **TypeScript** with a mix of JSON, JavaScript, and Kat files.</li><li>Provides detailed explanations of project setup, usage, and testing in `README.md`.</li><li>Includes inline comments in critical code files like `src/compiler/codegen.ts` for better code understanding.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates with **npm** for package management, with commands for installation, testing, and running the project.</li><li>Utilizes **Vitest** for testing and ensuring code reliability.</li><li>Includes **Git hooks** for automated checks and processes during development.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Organizes codebase into separate modules like lexer, parser, and code generator for clear separation of concerns.</li><li>Utilizes `src/compiler/calcs/index.ts` to export key functionalities for easy access and maintainability.</li><li>Encourages code reusability and maintainability through modular design principles.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Includes unit tests for critical modules like lexer, parser, and code generator in the `src/compiler` directory.</li><li>Employs **Vitest** for testing, ensuring comprehensive test coverage and code reliability.</li><li>Tests cover edge cases and expected behaviors of the compiler functionalities.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimizes code generation in `src/compiler/codegen.ts` for efficient compilation and execution.</li><li>Utilizes **TypeScript** for type safety and performance improvements during compilation.</li><li>Ensures minimal overhead and efficient processing of input source code.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Implements secure coding practices through strict type checking and validation in critical modules.</li><li>Utilizes linting configurations in `biome.json` to enforce code correctness and security standards.</li><li>Follows best practices for handling user input and executing compiled code securely.</li></ul> |

---

##  Project Structure

```sh
└── ts-compiler/
    ├── biome.json
    ├── output.js
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── compiler
    │   └── input-source
    └── tsconfig.json
```


###  Project Index
<details open>
	<summary><b><code>TS-COMPILER/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `package-lock.json` file in the project structure contains essential metadata about dependencies and versions used in the project<br>- It ensures consistency and reproducibility by locking the versions of packages<br>- This file plays a crucial role in managing the project's dependencies and ensuring that all team members are working with the same versions of libraries and tools.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/package.json'>package.json</a></b></td>
				<td>- Facilitates project management and development tasks by defining scripts for testing, linting, and running the project<br>- Manages dependencies and configurations for TypeScript, testing, linting, and Git hooks<br>- Enhances developer workflow efficiency and code quality through automated processes.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/output.js'>output.js</a></b></td>
				<td>- The `output.js` file in the project architecture contains code that performs simple arithmetic operations and outputs a message to the console<br>- It contributes to the project by demonstrating basic computation and logging functionality.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- Defines TypeScript compiler options for the project, specifying target version, module resolution, and path aliases for parsers, lexer, and code generation modules<br>- Ensures strict type checking and interoperability while enabling ESNext features<br>- This configuration enhances code quality and maintainability across the codebase architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/biome.json'>biome.json</a></b></td>
				<td>- Defines project configuration settings for linting, formatting, and VCS integration<br>- Specifies rules for linter, formatter, and JavaScript settings<br>- Organizes imports and enforces code correctness<br>- Configures indentation style and width<br>- Utilizes a schema for validation.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<details>
				<summary><b>compiler</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/codegen.ts'>codegen.ts</a></b></td>
						<td>- The code in src/compiler/codegen.ts evaluates and generates JavaScript code from an Abstract Syntax Tree (AST)<br>- It interprets and transforms AST nodes representing mathematical expressions and variable declarations into executable JavaScript code<br>- This functionality is crucial for compiling and executing code within the project's architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/ast-types.ts'>ast-types.ts</a></b></td>
						<td>- Defines abstract syntax tree (AST) node interfaces for various language constructs like identifiers, declarations, expressions, and literals<br>- Establishes a common structure for representing code elements within the compiler, enabling consistent handling and manipulation of program components.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/lexer.ts'>lexer.ts</a></b></td>
						<td>- Lexes input string into tokens using token specifications<br>- It iterates through the input, matches tokens based on regex, and builds a list of tokens<br>- If no match is found, it throws an error<br>- This function plays a crucial role in the project's compiler module by breaking down input into manageable units for further processing.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/parser.ts'>parser.ts</a></b></td>
						<td>- Parses tokens into a list of statements for the project's compiler<br>- The function processes different types of tokens to generate the corresponding statements, such as variable declarations, constant declarations, and print statements<br>- This functionality is crucial for transforming raw input into structured data for further processing within the compiler.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/run.ts'>run.ts</a></b></td>
						<td>- Generates JavaScript code by compiling input source file, utilizing lexer, parser, and code generator<br>- Includes an Easter egg drawing function.</td>
					</tr>
					</table>
					<details>
						<summary><b>calcs</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/calcs/consume.ts'>consume.ts</a></b></td>
								<td>- The `consume.ts` file in the `compiler/calcs` directory defines a function that retrieves and validates the next token from the parse context<br>- It ensures the token type matches the expected type, throwing an error if not<br>- This function plays a crucial role in the parsing process of the codebase, facilitating the consumption of tokens during compilation.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/calcs/peek.ts'>peek.ts</a></b></td>
								<td>Enables peeking at the next token in the parse context, crucial for parsing logic in the compiler.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/calcs/draw-easter-egg.ts'>draw-easter-egg.ts</a></b></td>
								<td>- The code file `draw-easter-egg.ts` in the `src/compiler/calcs` directory is responsible for rendering an Easter egg within the project<br>- This functionality adds a fun and whimsical element to the codebase, enhancing the overall user experience.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/calcs/tokens.ts'>tokens.ts</a></b></td>
								<td>- Defines token types and specifications for lexical analysis in the compiler, categorizing keywords, operators, blocks, literals, and identifiers<br>- The code in tokens.ts structures token definitions and regex patterns for parsing source code into meaningful tokens, crucial for subsequent compilation stages.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/calcs/index.ts'>index.ts</a></b></td>
								<td>- Exports key functionalities for consuming, peeking, handling tokens, and parsing in the compiler module<br>- Facilitates seamless access to essential operations for processing and analyzing code within the project architecture.</td>
							</tr>
							</table>
							<details>
								<summary><b>parsers</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/calcs/parsers/expression.ts'>expression.ts</a></b></td>
										<td>- ParseExpression function generates BinaryExpressions by parsing terms with arithmetic operators in the provided code file<br>- It processes the input context to build and return the final parsed expression for the compiler's abstract syntax tree.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/calcs/parsers/variable-declaration.ts'>variable-declaration.ts</a></b></td>
										<td>- ParseVariableDeclaration function extracts and returns a parsed variable declaration from the provided parse context<br>- It consumes the keyword 'var', identifier, and expression to create the declaration object with the name and value of the variable<br>- This function plays a crucial role in parsing variable declarations within the compiler's calculation module.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/calcs/parsers/print.ts'>print.ts</a></b></td>
										<td>- The `parsePrintStatement` function in the provided code file parses a print statement in the compiler, extracting the expression to be printed<br>- This function plays a crucial role in the compiler's parsing logic, enabling the interpretation of print statements within the codebase architecture.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/calcs/parsers/constant-declaration.ts'>constant-declaration.ts</a></b></td>
										<td>- ParseConstantDeclaration function extracts constant declarations from the source code, handling the parsing of constant identifiers and their corresponding values<br>- It plays a crucial role in the compiler's parsing process, ensuring accurate representation of constant declarations within the codebase architecture.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/calcs/parsers/parenthesesized-expression.ts'>parenthesesized-expression.ts</a></b></td>
										<td>- ParseParenthesizedExpression function extracts and returns a parsed expression enclosed within parentheses<br>- It ensures correct parsing of the input expression by consuming the opening and closing parentheses and delegating the parsing of the inner expression<br>- This function plays a crucial role in the compiler's parsing logic for handling parenthesized expressions.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/calcs/parsers/term.ts'>term.ts</a></b></td>
										<td>- ParseTerm function extracts and returns a parsed term from the input, handling number, identifier, string, and parenthesized expressions<br>- It ensures proper parsing of different token types to build the abstract syntax tree for the compiler.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/compiler/calcs/parsers/index.ts'>index.ts</a></b></td>
										<td>- Exports parser modules for constant declaration, expressions, printing, terms, and variable declaration<br>- Integrates these modules into the compiler's parsing functionality, enhancing codebase modularity and maintainability.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>input-source</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/ViniciusDev26/ts-compiler/blob/master/src/input-source/index.kat'>index.kat</a></b></td>
						<td>- Calculates and prints the result of a mathematical operation, showcasing basic arithmetic and output functionality<br>- This code snippet serves as a simple demonstration of computation and printing capabilities within the project architecture.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with ts-compiler, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


###  Installation

Install ts-compiler using one of the following methods:

**Build from source:**

1. Clone the ts-compiler repository:
```sh
❯ git clone https://github.com/ViniciusDev26/ts-compiler
```

2. Navigate to the project directory:
```sh
❯ cd ts-compiler
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run ts-compiler using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
##  Grupo

- Carlos Vinicius (2020808)
- Francisco Sales (2418891)

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/ViniciusDev26/ts-compiler/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/ViniciusDev26/ts-compiler/issues)**: Submit bugs found or log feature requests for the `ts-compiler` project.
- **💡 [Submit Pull Requests](https://github.com/ViniciusDev26/ts-compiler/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/ViniciusDev26/ts-compiler
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/ViniciusDev26/ts-compiler/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=ViniciusDev26/ts-compiler">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
