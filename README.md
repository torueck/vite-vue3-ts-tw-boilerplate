# Vue 3 + Typescript + Tailwind CSS + Vite

This template should help get you started developing with Vue 3, Typescript and Tailwind CSS in Vite.  
It also adds linting with ESLint, auto formatting with Prettier and unit testing with Jest and Vue Testing Library.

## Recommended IDE Setup

[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): autocomplete, linting, CSS syntax highlighting

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

> **Note:** If Using [`<script setup>`](https://github.com/vuejs/rfcs/pull/227): this is a feature that is currently in RFC stage.  
> To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage.
It aims for simplifying the setup script for SFC by exposing all top level bindings to the template.

The example components currently use the regular composition API syntax, but the exact same code in `<script setup>` syntax is also available. If you want to use this, simple comment this in and remove the script block with the regular composition API code.

## Testing Vue 3 Components

Testing is done using [Jest](https://jestjs.io/docs/getting-started) as a test runnder and [Vue Testing Library](https://github.com/testing-library/vue-testing-library) for component testing.

> **Note:** To make jest be able to load `.vue` SFC files from Vue 3, we need to use the pre-release version of [vue-jest](https://github.com/vuejs/vue-jest/releases). Similarly we need to use the pre-release version of [Vue Testing library](https://github.com/testing-library/vue-testing-library/issues/176).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
