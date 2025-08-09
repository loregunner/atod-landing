import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      '@next/next': nextjs,
    },
    rules: {
      // Aquí es donde agregas las reglas a deshabilitar
      '@next/next/no-img-element': 'off',
      // Otras reglas que quieras deshabilitar...
    },
  },
];

export default eslintConfig;
