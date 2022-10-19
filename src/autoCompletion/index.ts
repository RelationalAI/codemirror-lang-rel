import {syntaxTree} from "@codemirror/language";
import {Completion, CompletionContext} from "@codemirror/autocomplete";
import {SyntaxNode} from "@lezer/common/dist/tree";
import {
  attributeKeywordOptions,
  emphasisOptions,
  functionOptions,
  mainKeywordOptions
} from "./constants";

let lhsCompletionList: Completion[] = [];

function completeAttribute(
  context: CompletionContext,
  nodeBefore: SyntaxNode,
  textBefore: string,
) {
  let attrBefore = /@\w*$/.exec(textBefore);
  if (!attrBefore && !context.explicit) {
    return null;
  }

  return {
    from: attrBefore ? nodeBefore.from + attrBefore.index : context.pos,
    options: attributeKeywordOptions,
    validFor: /^(@\w*)?$/
  }
}

function completeLhs(
  context: CompletionContext,
  nodeBefore: SyntaxNode,
  textBefore: string,
) {
  let attrBefore = /\w*$/.exec(textBefore);
  if (!attrBefore && !context.explicit) {
    return null;
  }

  return {
    from: attrBefore ? nodeBefore.from + attrBefore.index : context.pos,
    options: [
      ...lhsCompletionList,
      ...functionOptions
    ],
    validFor: /^(\w*)?$/
  }
}

function completeKeyword(
  context: CompletionContext,
  nodeBefore: SyntaxNode,
  textBefore: string,
) {
  let attrBefore = /\w*$/.exec(textBefore);
  if (!attrBefore && !context.explicit) {
    return null;
  }

  return {
    from: attrBefore ? nodeBefore.from + attrBefore.index : context.pos,
    options: mainKeywordOptions,
    validFor: /^(\w*)?$/
  }
}

function completeEmphasis(
  context: CompletionContext,
  nodeBefore: SyntaxNode,
  textBefore: string,
) {
  let attrBefore = /\w*$/.exec(textBefore);
  if (!attrBefore && !context.explicit) {
    return null;
  }

  return {
    from: attrBefore ? nodeBefore.from + attrBefore.index : context.pos,
    options: emphasisOptions,
    validFor: /^(\w*)?$/
  }
}

function completeRel(context: CompletionContext) {
  const tree = syntaxTree(context.state);
  const nodeBefore = tree.resolveInner(context.pos, -1);
  const nodeName = nodeBefore.name;
  const parentName = nodeBefore.parent?.name;
  const grandParentName = nodeBefore.parent?.parent?.name;
  lhsCompletionList = [];

  tree.iterate({
    enter: (nodeRef) => {
      if (nodeRef.name === 'LhsId' && nodeRef.node.firstChild?.name === 'BasicId') {
        lhsCompletionList.push({
          label: context.state.sliceDoc(nodeRef.from, nodeRef.to),
          type: "variable",
          boost: 1
        })
      }

      if (nodeRef.name === 'Expression') return false;
    }
  })

  switch (nodeName) {
    case 'LineComment':
    case 'BlockComment':
    case 'StaticStringLiteral':
    case 'StaticMultilineStringLiteral':
    case 'RawStringSequence':
      return null;
  }

  // Complete Attribute keywords
  let textBefore = context.state.sliceDoc(nodeBefore.from, context.pos);
  if (textBefore.match(/@\w*$/) &&
      ['Attribute', 'BasicId'].indexOf(nodeName) != -1) {
    return completeAttribute(context, nodeBefore, textBefore);
  }

  if (
    (parentName === 'BasicExpression' && nodeName === 'BasicId') ||
    nodeName === 'InterpolationId'
  ) {
    return completeLhs(context, nodeBefore, textBefore);
  }

  if (parentName === '⚠' && nodeName === 'BasicId') {
    return completeKeyword(context, nodeBefore, textBefore);
  }

  if (parentName === 'LhsId' && nodeName === 'BasicId') {
    return completeEmphasis(context, nodeBefore, textBefore);
  }
}

export {
  completeRel
};
