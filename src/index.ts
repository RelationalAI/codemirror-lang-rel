import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags} from "@lezer/highlight"
import {completeFromList, completionKeymap} from "@codemirror/autocomplete"
import {autocompleteList} from './autocompleteList'

export const relLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        "Keyword AttributeKeyword": tags.keyword,
        Type: tags.typeName,
        Emphasis: tags.emphasis,
        "IntLiteral FloatLiteral": tags.number,
        BooleanLiteral: tags.bool,
        CharLiteral: tags.character,
        "DocstringLiteral MultilineDocstringLiteral": tags.docString,
        "StaticStringLiteral/...": tags.string,
        "StaticMultilineStringLiteral RawStringSequence InterpolationLiteral InterpolationMultilineLiteral": tags.string,
        LineComment: tags.lineComment,
        BlockComment: tags.blockComment,
        "BasicId LhsId/BasicId": tags.variableName,
        "LogicalParam/LogicalExpression/BasicExpression/BasicId": tags.attributeName,
        "FormalId/BasicId": tags.attributeName,
        "InterpolationId BasicExpression/BasicId": tags.labelName,
        "QualifiedNameElem/BasicId RelnameLiteral ValueTypeLiteral": tags.literal,
        "DateLiteral DateTimeLiteral": tags.string,
        "Operator OperatorKeyword": tags.operatorKeyword,
        '( )': tags.paren,
        '[ ]': tags.squareBracket,
        '{ }': tags.brace,
        ':': tags.derefOperator,
        ', ;': tags.separator
      }),
      // indentNodeProp.add({
      //     BasicExpression: context => context.column(context.node.from) + context.unit
      // }),
      foldNodeProp.add({
        MultilineDocstringLiteral(tree) { return {from: tree.from + 3, to: tree.to - 3} },
        InterpolationMultilineLiteral(tree) { return {from: tree.from + 3, to: tree.to - 3} },
        StaticMultilineStringLiteral(tree) { return {from: tree.from + 3, to: tree.to - 3} },
        RawStringSequence(tree) { return {from: tree.from + 1, to: tree.to - 1} },
        BlockComment(tree) { return {from: tree.from + 2, to: tree.to - 2} },
        BoundedExpression(tree) { return {from: tree.from + 1, to: tree.to - 1} }
      })
    ]
  }),
  languageData: {
    closeBrackets: {brackets: ["(", "[", "{", "'", '"', "`", '"""', '"""""']},
    commentTokens: {line: "//", block: {open: "/*", close: "*/"}},
  }
})

// Autocomplete
export const relCompletion = relLanguage.data.of({
  autocomplete: completeFromList(autocompleteList)
})

export function rel() {
  return new LanguageSupport(relLanguage, [relCompletion])
}
