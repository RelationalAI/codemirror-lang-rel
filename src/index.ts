import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@codemirror/highlight"
import {completeFromList, completionKeymap} from "@codemirror/autocomplete"
import {autocompleteList} from './autocompleteList'

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
        'use forall for in iff if then else end where with select implies': t.controlKeyword,
        'not and or xor': t.operatorKeyword,
        'as from inline ic doc entity type value': t.keyword,
        'output insert delete abort export': t.emphasis,
        'def': t.definitionKeyword,
        'module': t.moduleKeyword,
        'Any String Int Number Char Missing Float Floating UnsignedInt SignedInt Rational FixedDecimal RelName Entity AutoNumber Hash FilePos Date DateTime Year Month Week Day Hour Minute Second Millisecond Microsecond Nanosecond Boolean':
          t.typeName,
        Number: t.number,
        BooleanLiteral: t.bool,
        StringLiteral: t.string,
        MultilineStringLiteral: t.string,
        AssignOp: t.definitionOperator,
        LineComment: t.lineComment,
        BlockComment: t.blockComment,
        MultilineBlockComment: t.blockComment,
        VariableName: t.definition(t.variableName),
        Atom: t.atom,
        RelnameLiteral: t.literal,
        RelnameStringLiteral: t.literal,
        ValueTypeLiteral: t.literal,
        DefineStatement: t.atom,
        DateLiteral: t.string,
        DateTimeLiteral: t.string,
        '( )': t.paren,
        '[ ]': t.squareBracket,
        '{ }': t.brace,
        ':': t.derefOperator,
        ', ;': t.separator
      })
    ]
  }),
  languageData: {
    closeBrackets: {brackets: ["(", "[", "{", "'", '"', "`", '"""']},
    commentTokens: {line: "//", block: {open: "/*", close: "*/"}},
    // indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
    wordChars: "$"
  }
})

// Autocomplete
export const relCompletion = relLanguage.data.of({
  autocomplete: completeFromList(autocompleteList)
})

export function rel() {
  return new LanguageSupport(relLanguage, [relCompletion])
}
