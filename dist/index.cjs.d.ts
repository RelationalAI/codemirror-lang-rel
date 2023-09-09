import { LRLanguage, LanguageSupport } from "@codemirror/language";
declare namespace relTerms {
    const RawStringSequence: 1;
    const spaces: 169;
    const newLine: 170;
    const LineComment: 2;
    const BlockComment: 3;
    const Rel: 4;
    const DefinitionDeclaration: 5;
    const Docstring: 6;
    const BasicId: 7;
    const DocstringLiteral: 9;
    const MultilineDocstringLiteral: 10;
    const Annotation: 11;
    const AnnotationKeyword: 12;
    const AnnotationParams: 13;
    const BaseLiteral: 14;
    const IntLiteral: 15;
    const FloatLiteral: 16;
    const RelnameLiteral: 17;
    const RelnameStringLiteral: 18;
    const RelnameMultilineStringLiteral: 19;
    const StaticStringLiteral: 20;
    const StaticMultilineStringLiteral: 21;
    const CharLiteral: 22;
    const DateLiteral: 23;
    const DateTimeLiteral: 24;
    const RawStringLiteral: 25;
    const LhsId: 28;
    const ConstructorId: 29;
    const ParenOpId: 33;
    const Operator: 34;
    const QualifiedName: 35;
    const QualifiedNameId: 36;
    const QualifiedKeyword: 42;
    const QualifiedNameElem: 60;
    const FormalParamsBracket: 61;
    const FormalParams: 62;
    const FormalParam: 63;
    const Literal: 64;
    const BooleanLiteral: 65;
    const SpecializeIntLiteral: 66;
    const InterpolationLiteral: 67;
    const Interpolation: 68;
    const InterpolationId: 69;
    const InterpolationExpression: 70;
    const Expression: 71;
    const UnionExpression: 72;
    const JoinExpression: 73;
    const OverrideExpression: 74;
    const RestrictExpression: 75;
    const LogicalExpression: 76;
    const BasicExpression: 77;
    const SpecializeExpression: 78;
    const PartialApplicationExpression: 80;
    const NocommaParam: 81;
    const NocommaExpression: 82;
    const NocommaUnionExpression: 83;
    const NocommaAbstractExpression: 84;
    const Bindings: 85;
    const LogicalParam: 86;
    const ApplicationExpression: 87;
    const BoundedExpression: 124;
    const LogicalAbstractExpression: 127;
    const AbstractExpression: 143;
    const InterpolationMultilineLiteral: 144;
    const FormalParamsParen: 147;
    const BoundDeclaration: 148;
    const ValueTypeDeclaration: 149;
    const EntityTypeDeclaration: 150;
    const ConstraintDeclaration: 151;
    const ModuleDeclaration: 152;
    const WithUseDeclaration: 153;
    const Alias: 155;
    const AliasId: 156;
}
declare const relLanguage: LRLanguage;
declare function rel(): LanguageSupport;
export { relLanguage, rel, relTerms };
