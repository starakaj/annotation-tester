#Annotation Tester

Simple HTTP service. Post a Max patch, get back some simple statistics about it.

The goal is to write this once without any types. Two branches, flow and ts, each
attempt to convert the project.

## Adding TypeScript
Congratulations, you're on the branch that adds TypeScript

1. Install TypeScript
```
npm install --save-dev typescript
```
2. Create a `tsconfig.json` file, for example:
```
{
    "compilerOptions": {
        "outDir": "./dist/",        // path to output directory
        "sourceMap": true,          // allow sourcemap support
		"strictNullChecks": true,   // enable strict null checks as a best practice
		"noImplicitAny": true,		// enable strict any checks as a best practice
        "module": "es6",            // specify module code generation
        "target": "es5",            // specify ECMAScript target version
		"types": ["node"],			// enable require
        "allowJs": true             // allow a partial TypeScript and JavaScript codebase

    },
    "include": [
        "./lib/"
    ]
}
```
3. Rename all of your .js files to .ts files
4. Install @types/node

```npm install --save-dev @types/node```

5. Install types for all of your packages

```npm install --save-dev @types/multer @types/express```

6. Change all of your `require`s to `import`s

`const express = require("express")` -> `import express from "express"`

7. Change all of your `module.export =` to `export default`

`module.exports = router` -> `export default router`

