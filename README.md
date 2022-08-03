# CodeMirror 6 Rel language package

This is the official Rel language support package for the [CodeMirror](https://codemirror.net/6/) editor.

It is based on CM6 [language support example](https://codemirror.net/6/examples/lang-package/) and contains:

 * The Rel grammar in [Lezer](https://lezer.codemirror.net/) format
 * The CM6 language pack integration `index.ts` which exports the required `function` and `LanguageSupport`
 * Tests are in `/test/cases.txt` and are wired/ran via mocha
 * CM6 consumes the `dist/index.js` file which contains a "compilation" of the parser and the required `LanguageSupport`

To build/compile the new `dist` entries run:

```node
npm run prepare
```

To test:

```node
npm run test
```

## Development

For local development and testing you can:

- Install [fswatch](https://github.com/emcrisostomo/fswatch), then run the following script to auto "prepare", watch and copy to the console `code editor` folder the `rel.ts` file:

```
fswatch -or src | xargs -I{} sh -c "npm run prepare && cp dist/index.js <ENTER PATH HERE>/rel.ts"
```

e.g.

```
fswatch -or src | xargs -I{} sh -c "npm run prepare && cp dist/index.js ../../Dev/rai-ux/packages/code-editor/src/rel.ts"
```

- Once the `fswatch` has generated the output file (`rel.ts`) import it into consore/code editor via changing the `CodeEditor.tsx` file `rel` import. E.g:

```
import { rel } from './rel'; //'@relationalai/codemirror-lang-rel';
```
- If all done correctly on any change to the parser files the code editor would refresh and reflect the changes


**Note**: Make sure you bump the `package.json` version on every release ready for consumption by CM6.
