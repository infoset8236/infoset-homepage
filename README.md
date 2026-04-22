# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

```
infoset-homepage
├─ .eslintrc.cjs
├─ .prettierrc
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ fonts
│  │  │  ├─ Pretendard-Bold.woff
│  │  │  ├─ Pretendard-ExtraBold.woff
│  │  │  ├─ Pretendard-Medium.woff
│  │  │  ├─ Pretendard-Regular.woff
│  │  │  └─ Pretendard-SemiBold.woff
│  │  ├─ images
│  │  │  └─ logo.png
│  │  └─ videos
│  │     └─ main.mp4
│  ├─ components
│  │  ├─ Business
│  │  │  ├─ Business.module.css
│  │  │  └─ Business.tsx
│  │  ├─ Footer
│  │  │  ├─ Footer.module.css
│  │  │  └─ Footer.tsx
│  │  ├─ Header
│  │  │  ├─ Header.module.css
│  │  │  └─ Header.tsx
│  │  ├─ Hero
│  │  │  ├─ Hero.module.css
│  │  │  └─ Hero.tsx
│  │  ├─ Partners
│  │  │  ├─ Partners.module.css
│  │  │  └─ Partners.tsx
│  │  └─ Portfolio
│  │     ├─ Portfolio.module.css
│  │     └─ Portfolio.tsx
│  ├─ main.tsx
│  ├─ pages
│  │  └─ Main
│  │     ├─ Home.module.css
│  │     ├─ Home.schema.ts
│  │     └─ Home.tsx
│  ├─ stores
│  │  └─ useSectionStore.ts
│  └─ styles
│     ├─ font.css
│     ├─ fullpage.css
│     └─ global.css
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```