import babel from "eslint-plugin-babel";
import react from "eslint-plugin-react";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended", "plugin:react/recommended"), {
    plugins: {
        babel,
        react,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.mocha,
            ...globals.node,
            React: true,
        },

        parser: babelParser,
        ecmaVersion: 7,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
                experimentalObjectRestSpread: true,
            },
        },
    },

    settings: {
        react: {
            version: "15.0",
        },
    },

    rules: {
        "array-bracket-spacing": ["error", "never"],
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "brace-style": "error",
        "comma-dangle": ["error", "always-multiline"],

        "comma-spacing": ["error", {
            before: false,
            after: true,
        }],

        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "consistent-return": "off",
        "consistent-this": ["error", "self"],
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eol-last": "error",
        eqeqeq: ["error", "smart"],
        "generator-star-spacing": "error",
        "id-blacklist": ["error", "e"],

        indent: ["error", 4, {
            SwitchCase: 1,
        }],

        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": "error",
        "keyword-spacing": "error",

        "max-len": ["error", 120, 4, {
            ignoreComments: true,
        }],

        "new-cap": ["off", {
            capIsNew: true,
            newIsCap: true,
        }],

        "no-await-in-loop": "error",
        "no-case-declarations": "off",
        "no-cond-assign": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty-pattern": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": "error",
        "no-shadow": "off",
        "no-spaced-func": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-underscore-dangle": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable": "error",
        "no-unused-expressions": "error",
        "no-unused-vars": "error",
        "no-var": "error",
        "object-curly-spacing": ["error", "never"],
        "one-var": ["error", "never"],
        "operator-linebreak": ["error", "after"],
        "padded-blocks": ["error", "never"],
        "prefer-arrow-callback": "off",
        "prefer-const": "error",
        quotes: ["error", "single", "avoid-escape"],
        semi: ["error", "always"],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-infix-ops": "error",

        "space-unary-ops": ["error", {
            words: true,
            nonwords: false,
        }],

        "spaced-comment": "error",
        strict: "off",
        yoda: "error",
        "babel/new-cap": "off",
        "babel/object-shorthand": "off",
    },
}];