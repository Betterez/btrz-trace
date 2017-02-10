module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "rules": {
      "array-callback-return": 2,
      "consistent-return": 2,
      "curly": 2,
      "eqeqeq": 2,
      "no-alert": 1,
      // disallow use of arguments.caller or arguments.callee
      "no-caller": 2,
      // disallow lexical declarations in case/default clauses
      "no-case-declarations": 2,
      // disallow division operators explicitly at beginning of regular expression
      "no-div-regex": 0,
      // disallow else after a return in an if
      "no-else-return": 2,
      // disallow empty functions, except for standalone funcs/arrows
      "no-empty-function": [2, {
        "allow": [
          "functions",
          "arrowFunctions",
        ]
      }],
      "no-empty-pattern": 2,
      "no-eval": 2,
      "no-extend-native": 2,
      "no-extra-bind": 2,
      "no-implicit-coercion": 2,
      "no-implicit-globals": 2,
      "no-implied-eval": 2,
      "no-multi-spaces": 2,
      "no-loop-func": 2,
      "no-multi-str": 2,
      "no-native-reassign": 2,
      "no-new-wrappers": 2,
      "no-octal": 2,
      "no-octal-escape": 2,
      "no-param-reassign": 2,
      "no-redeclare": 2,
      "no-return-assign": 2,
      "no-script-url": 2,
      "no-self-assign": 2,
      "no-self-compare": 2,
      "no-sequences": 2,
      "no-throw-literal": 2,
      "no-unused-expressions": 2,
      "no-unused-labels": 2,
      "no-useless-concat": 2,
      "no-useless-escape": 2,
      "no-void": 2,
      "no-warning-comments": 2,
      "no-with": 2,
      "radix": 2,
      "vars-on-top": 2,
      "wrap-iife": 2,
      "yoda": 2,

      // Variables
      //  require or disallow initialization in var declarations
      "init-declarations": 2,
      //  disallow catch clause parameters from shadowing variables in the outer scope
      "no-catch-shadow": 2,
      //  disallow deleting variables
      "no-delete-var": 2,
      //  disallow labels that share a name with a variable
      "no-label-var": 2,
      //  disallow specified global variables
      "no-restricted-globals": 2,
      //  disallow var declarations from shadowing variables in the outer scope
      "no-shadow": 2,
      //  disallow identifiers from shadowing restricted names
      "no-shadow-restricted-names": 2,
      //  disallow the use of undeclared variables unless mentioned in /*global */ comments
      "no-undef": 2,
      //  disallow initializing variables to undefined
      "no-undef-init": 0,
      //  disallow the use of the undefined Variable
      "no-undefined": 0,
      //  disallow unused variables
      "no-unused-vars": 2,
      //  disallow the use of variables before they are defined
      "no-use-before-define": 2,

      //NODE
      // require return statements after callbacks
      "callback-return": 2,
      // require require() calls to be placed at top-level module scope
      "global-require": 0,
      // require error handling in callbacks
      "handle-callback-err": [2, "^(err|error)$"],
      // disallow require calls to be mixed with regular var declarations
      "no-mixed-requires": 0,
      // disallow new operators with calls to require
      "no-new-require": 2,
      // disallow string concatenation with __dirname and __filename
      "no-path-concat": 0,
      // disallow the use of process.env
      "no-process-env": 0,
      // disallow the use of process.exit()
      "no-process-exit": 0,
      // disallow synchronous methods
      "no-sync": 0,

      // ES6
      // require braces around arrow function bodies
      "arrow-body-style": [2, "always"],
      // require parentheses around arrow function arguments
      "arrow-parens": 2,
      // enforce consistent spacing before and after the arrow in arrow functions
      "arrow-spacing": 2,
      // require super() calls in constructors
      "constructor-super": 2,
      // enforce consistent spacing around * operators in generator functions
      "generator-star-spacing": 2,
      // disallow reassigning class members
      "no-class-assign": 2,
      // disallow arrow functions where they could be confused with comparisons
      "no-confusing-arrow": 2,
      // disallow reassigning const variables
      "no-const-assign": 2,
      // disallow duplicate class members
      "no-dupe-class-members": 2,
      // disallow duplicate module imports
      "no-duplicate-imports": 2,
      // disallow new operators with the Symbol object
      "no-new-symbol": 2,
      // disallow specified modules when loaded by import
      "no-restricted-imports": 2,
      // disallow this/super before calling super() in constructors
      "no-this-before-super": 2,
      // disallow unnecessary constructors
      "no-useless-constructor": 2,
      // require let or const instead of var
      "no-var": 2,
      // require or disallow method and property shorthand syntax for object literals
      "object-shorthand": 2,
      // require arrow functions as callbacks
      "prefer-arrow-callback": 2,
      // require const declarations for variables that are never reassigned after declared
      "prefer-const": 2,
      // require Reflect methods where applicable
      "prefer-reflect": 2,
      // require rest parameters instead of arguments
      "prefer-rest-params": 2,
      // require spread operators instead of .apply()
      "prefer-spread": 2,
      // require template literals instead of string concatenation
      "prefer-template": 2,
      // require generator functions to contain yield
      "require-yield": 2,
      // require or disallow spacing around embedded expressions of template strings
      "template-curly-spacing": 2,
      // require or disallow spacing around the * in yield* expressions
      "yield-star-spacing": 2
    }
};