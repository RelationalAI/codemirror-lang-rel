import {LRLanguage, LanguageSupport, foldNodeProp} from "@codemirror/language"
import {styleTags, tags} from "@lezer/highlight"
import {parser} from "./parser.js"
import * as relTerms from './parser.terms.js';


export const relLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        "Keyword AnnotationKeyword": tags.keyword,
        ConstructorId: tags.typeName,
        Emphasis: tags.emphasis,
        "IntLiteral FloatLiteral": tags.number,
        BooleanLiteral: tags.bool,
        CharLiteral: tags.character,
        "DocstringLiteral MultilineDocstringLiteral MultilineDocstringRawLiteral": tags.docString,
        "StaticStringLiteral/...": tags.string,
        "StaticMultilineStringLiteral RawStringSequence InterpolationLiteral InterpolationMultilineLiteral": tags.string,
        LineComment: tags.lineComment,
        BlockComment: tags.blockComment,
        BasicId: tags.attributeName,
        "LhsId/BasicId LhsId/QualifiedName/QualifiedNameId/BasicId": tags.definition(tags.variableName),
        "LhsId/QualifiedName/QualifiedNameId/QualifiedKeyword": tags.definition(tags.variableName),
        "PartialApplicationExpression/BasicExpression/BasicId": tags.variableName,
        "ApplicationExpression/BasicExpression/BasicId": tags.variableName,
        "LogicalParam/LogicalExpression/BasicExpression/BasicId": tags.attributeName,
        "FormalId/BasicId": tags.attributeName,
        "InterpolationId AliasId/BasicId": tags.labelName,
        "QualifiedNameElem RelnameLiteral RelnameStringLiteral RelnameMultilineStringLiteral ValueTypeLiteral": tags.literal,
        "DateLiteral DateTimeLiteral": tags.string,
        "Operator OperatorKeyword": tags.operatorKeyword,
        '( )': tags.paren,
        '[ ]': tags.squareBracket,
        '{ }': tags.brace,
        ':': tags.derefOperator,
        ', ;': tags.separator
      }),
      foldNodeProp.add({
        MultilineDocstringLiteral(node) { return {from: node.from + 3, to: node.to - 3} },
        InterpolationMultilineLiteral(node) { return {from: node.from + 3, to: node.to - 3} },
        InterpolationExpression(node) { return { from: node.from + 2, to: node.to - 1 } },
        StaticMultilineStringLiteral(node) { return {from: node.from + 3, to: node.to - 3} },
        RawStringSequence(node, state) {
          let quotesNum = 0;
          while(state.sliceDoc(node.from + quotesNum, node.from + quotesNum + 1) === '"') {
            ++quotesNum
          }
          return {from: node.from + quotesNum, to: node.to - quotesNum}
        },
        BlockComment(node) { return {from: node.from + 2, to: node.to - 2} },
        BoundedExpression(node) { return {from: node.from + 1, to: node.to - 1} }
      })
    ]
  }),
  languageData: {
    closeBrackets: {brackets: ["(", "[", "{", "'", '"', "`", '"""']},
    commentTokens: {line: "//", block: {open: "/*", close: "*/"}},
  }
})

export function rel() {
  return new LanguageSupport(relLanguage)
}

export {
  relTerms
};
