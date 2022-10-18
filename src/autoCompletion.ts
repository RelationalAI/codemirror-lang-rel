import {syntaxTree} from "@codemirror/language";
import {Completion, CompletionContext} from "@codemirror/autocomplete";
import {SyntaxNode} from "@lezer/common/dist/tree";
import {
  attributeKeywordOptions,
  emphasisOptions,
  functionOptions,
  mainKeywordOptions
} from "./autoCompletion.constants";

const lhsCompletionList: Completion[] = [

]

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
    options: functionOptions,
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

  tree.iterate({
    enter: (nodeRef) => {
      if (nodeRef.name === 'LhsId') {
        console.log(context.state.sliceDoc(nodeRef.from, nodeRef.to));
      }
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
  console.log(grandParentName, parentName, nodeName)

  // Complete Attribute keywords
  let textBefore = context.state.sliceDoc(nodeBefore.from, context.pos);
  if (textBefore.match(/@\w*$/) &&
      ['Attribute', 'BasicId'].indexOf(nodeName) != -1) {
    console.log('attr');
    return completeAttribute(context, nodeBefore, textBefore);
  }

  if (parentName === 'BasicExpression' && nodeName === 'BasicId') {
    console.log('func')
    return completeLhs(context, nodeBefore, textBefore);
  }

  if (parentName === '⚠' && nodeName === 'BasicId') {
    console.log('kw');
    return completeKeyword(context, nodeBefore, textBefore);
  }

  if (parentName === 'LhsId' && nodeName === 'BasicId') {
    console.log('emp');
    return completeEmphasis(context, nodeBefore, textBefore);
  }
}

export {
  completeRel
};
