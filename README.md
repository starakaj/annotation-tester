#Annotation Tester

Simple HTTP service. Post a Max patch, get back some simple statistics about it.

The goal is to write this once without any types. Two branches, flow and ts, each
attempt to convert the project.

## Adding flow
Congratulations, you're on the branch that adds FlowType

1. Add babel, which is necessary to strip out type annotations

```
npm install --save-dev babel-cli babel-preset-flow

```
2. Create a `.babelrc` file with "flow" in presets

```
{
  "presets": ["flow"]
}
```
3. Add a build step to `package.json`

```
"scripts": {
	"build": "babel lib/ -d dist/",
	"test": "echo \"Error: no test specified\" && exit 1"
},
```
4. Install the flow binary
```
npm install --dev flow-bin
node node_modules/.bin/flow init
```
5. Add a flow step to `package.json`
```
"scripts": {
	"build": "babel lib/ -d dist/",
	"flow": "flow",
	"test": "echo \"Error: no test specified\" && exit 1"
},
```
6. (if using VSCode) Configure VSCode for flow
- Code -> Preferences -> Settings
- Workspace settings
- Add `"javascript.validate.enable": false`
- Add `"flow.pathToFlow": "${workspaceRoot}/node_modules/.bin/flow"`
- Should create (if it doesn't already exist) a file at `.vscode/settings.json`
- You may need to restart VSCode
7. Install flow-typed globally

```
npm install -g flow-typed
```
8. Install types for any third-party libraries that you want

```
flow-typed install express
```

Flow-typed is smart enough to know what version you need based on your package.json