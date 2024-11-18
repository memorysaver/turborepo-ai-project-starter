# Turborepo Starter


## Using this example

Clone the repository:

```sh
git clone https://github.com/memorysaver/turborepo-ai-project-starter.git
```

Install dependencies:

```sh
cd turborepo-ai-project-starter
pnpm install
```

### Add ui components

Use the pre-made script:

```sh
pnpm ui add <component-name>
```

> This works just like the `shadcn/ui` CLI.

### Add a new app

Turborepo offer a simple command to add a new app:

```sh
pnpm turbo gen workspace --name <app-name>
```

This will create a new empty app in the `apps` directory.

If you want, you can copy an existing app with:

```sh
pnpm turbo gen workspace --name <app-name> --copy
```

> [!NOTE]
> Remember to run `pnpm install` after copying an app.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `next-template`: a [Next.js](https://nextjs.org/) app
- `ai-service`: a FastAPI app with litellm and instructor installed
- `@repo/ui`: a stub React component library (🚀 powered by **shadcn/ui**)
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
cd turborepo-ai-project-starter
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd turborepo-ai-project-starter
pnpm dev
```