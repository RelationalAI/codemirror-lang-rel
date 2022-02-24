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

- Compile the `dist` via running the `prepare` script mentioned above
- Copy the contents of the `/dist/index.js` into a `rel.js` file for example
- Import `rel.js` file into CM6 via changing the `raiSetup.ts` extensions array in the Rai Console Repo.


**Note**: Make sure you bump the `package.json` version on every release ready for consumption by CM6.
