import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags} from "@lezer/highlight"
import {completeFromList, completionKeymap} from "@codemirror/autocomplete"
import {autocompleteList} from './autocompleteList'

export const relLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Keyword: tags.keyword,
        AttributeKeyword: tags.keyword,
        Type: tags.typeName,
        Emphasis: tags.emphasis,
        IntLiteral: tags.number,
        FloatLiteral: tags.number,
        BooleanLiteral: tags.bool,
        CharLiteral: tags.character,
        DocstringLiteral: tags.string,
        MultilineDocstringLiteral: tags.string,
        "StaticStringLiteral/...": tags.string,
        StaticMultilineStringLiteral: tags.string,
        RawStringSequence: tags.string,
        InterpolationLiteral: tags.string,
        InterpolationMultilineLiteral: tags.string,
        LineComment: tags.lineComment,
        BlockComment: tags.blockComment,
        BasicId: tags.definition(tags.variableName),
        "LhsId/BasicId": tags.definition(tags.variableName),
        "LogicalParam/LogicalExpression/BasicExpression/BasicId": tags.definition(tags.attributeName),
        "BasicExpression/BasicId": tags.definition(tags.labelName),
        InterpolationId: tags.definition(tags.labelName),
        "FormalId/BasicId": tags.definition(tags.attributeName),
        "QualifiedNameElem/BasicId RelnameLiteral": tags.literal,
        ValueTypeLiteral: tags.literal,
        DefineStatement: tags.atom,
        DateLiteral: tags.string,
        DateTimeLiteral: tags.string,
        Operator: tags.operatorKeyword,
        OperatorKeyword: tags.operatorKeyword,
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
