# Mono-Repo for Node.js Application

## Setup

| Info        | Description                   |
| ----------- | ----------------------------- |
| Language    | [TypeScript][typescript-docs] |
| Test Runner | [Jest][jest-docs]             |

## Package Management

- [NPM Workspaces Documentation][npm-workspaces-docs]

### Installation

- Add new package in the workspace

```sh
npm init -w ./@packages/{package-name}
```

- Add dependency package to a workspace

```sh
npm install --{save|save-dev} -w @packages/{package-name}
```

- After adding workspace

```sh
npm install
```

### Running Commands

- Run commands in a specific workspace

```sh
npm run start -w @packages/{package-name}
```

- Run on all workspace

```sh
npm run test --workspaces
```

- Run on all workspace but ignore missing scripts

```sh
npm run test --workspaces --if-present
```

[npm-workspaces-docs]: [https://docs.npmjs.com/cli/v8/using-npm/workspaces]
[typescript-docs]: https://typescriptlang.org/docs
[jest-docs]: https://jestjs.io/docs/getting-started
