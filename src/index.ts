import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@codemirror/highlight"
// import {completeFromList} from "@codemirror/autocomplete"

export const relLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      // indentNodeProp.add({
      //   Application: delimitedIndent({closing: ")", align: false})
      // }),
      // foldNodeProp.add({
      //   Application: foldInside
      // }),
      styleTags({
        'use forall for iff if then else end where with select implies': t.controlKeyword,
        'in not and or xor': t.operatorKeyword,
        'as from output inline ic doc': t.keyword,
        'def': t.definitionKeyword,
        'module': t.moduleKeyword,
        'Any String Int Number Char Missing Floating UnsignedInt SignedInt Rational FixedDecimal RelName Entity AutoNumber Hash FilePos Date DateTime Year Month Week Day Hour Minute Second Millisecond Microsecond Nanosecond Boolean':
          t.typeName,
        Number: t.number,
        BooleanLiteral: t.bool,
        StringLiteral: t.string,
        // DateLiteral: t.string,
        // DateTimeLiteral: t.string,
        AssignOp: t.definitionOperator,
        LineComment: t.lineComment,
        BlockComment: t.blockComment,
        VariableName: t.definition(t.variableName),
        Atom: t.atom,
        RelnameLiteral: t.atom,
        RelnameStringLiteral: t.atom,
        DefineStatement: t.atom,
        '( )': t.paren,
        '[ ]': t.squareBracket,
        '{ }': t.brace,
        '.': t.derefOperator,
        ', ;': t.separator,
      })
    ]
  }),
  languageData: {
    closeBrackets: {brackets: ["(", "[", "{", "'", '"', "`"]},
    commentTokens: {line: "//", block: {open: "/*", close: "*/"}},
    // indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
    wordChars: "$"
  }
})

// Autocomplete
// export const relCompletion = relLanguage.data.of({
//   autocomplete: completeFromList([
//     { label: "Any", type: "type" },
//     { label: "AutoNumber", type: "type" },
//     { label: "Boolean", type: "type" },
//     { label: "Char", type: "type" },
//     { label: "Day", type: "type" },
//     { label: "Date", type: "type" },
//     { label: "DateTime", type: "type" },
//     { label: "Year", type: "type" },
//     { label: "Month", type: "type" },
//     { label: "Week", type: "type" },
//     { label: "Hour", type: "type" },
//     { label: "Minute", type: "type" },
//     { label: "Second", type: "type" },
//     { label: "Millisecond", type: "type" },
//     { label: "Microsecond", type: "type" },
//     { label: "Nanosecond", type: "type" },
//     { label: "Entity", type: "type" },
//     { label: "Int", type: "type" },
//     { label: "Number", type: "type" },
//     { label: "Missing", type: "type" },
//     { label: "Floating", type: "type" },
//     { label: "UnsignedInt", type: "type" },
//     { label: "SignedInt", type: "type" },
//     { label: "Rational", type: "type" },
//     { label: "FixedDecimal", type: "type" },
//     { label: "Hash", type: "type" },
//     { label: "FilePos", type: "type" },
//     { label: "String", type: "type" },
//     { label: "def", type: "keyword" },
//     { label: "output", type: "keyword" },
//     { label: "from", type: "keyword" },
//     { label: "if", type: "keyword" },
//     { label: "iff", type: "keyword" },
//     { label: "then", type: "keyword" },
//     { label: "else", type: "keyword" },
//     { label: "end", type: "keyword" },
//     { label: "exists", type: "keyword" },
//     { label: "where", type: "keyword" },
//     { label: "with", type: "keyword" },
//     { label: "select", type: "keyword" },
//     { label: "implies", type: "keyword" },
//     { label: "use", type: "keyword" },
//     { label: "forall", type: "keyword" },
//     { label: "in", type: "keyword" },
//     { label: "ic", type: "keyword" },
//     { label: "not", type: "keyword" },
//     { label: "and", type: "keyword" },
//     { label: "or", type: "keyword" },
//     { label: "xor", type: "keyword" },
//     { label: "union", type: "keyword" },
//   ])
// })

export function rel() {
  // return new LanguageSupport(relLanguage, [relCompletion])
  return new LanguageSupport(relLanguage)
}
