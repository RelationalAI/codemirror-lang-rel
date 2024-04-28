import { LRLanguage, LanguageSupport } from "@codemirror/language";
declare namespace relTerms {
    const RawStringSequence: 1;
    const spaces: 168;
    const newLine: 169;
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
    const IntLiteral: 14;
    const FloatLiteral: 15;
    const RelnameLiteral: 16;
    const RelnameStringLiteral: 17;
    const RelnameMultilineStringLiteral: 18;
    const StaticStringLiteral: 19;
    const StaticMultilineStringLiteral: 20;
    const CharLiteral: 21;
    const DateLiteral: 22;
    const DateTimeLiteral: 23;
    const RawStringLiteral: 24;
    const LhsId: 27;
    const ConstructorId: 28;
    const QualifiedName: 32;
    const QualifiedNameId: 33;
    const ParenOpId: 39;
    const Operator: 40;
    const QualifiedKeyword: 41;
    const QualifiedNameElem: 59;
    const Bindings: 60;
    const VarDecl: 61;
    const BooleanLiteral: 62;
    const SpecializeIntLiteral: 63;
    const InterpolationLiteral: 64;
    const InterpolationId: 65;
    const InterpolationExpression: 66;
    const BasicExpression: 67;
    const CurlyOpId: 68;
    const SpecializeExpression: 69;
    const PartialApplicationExpression: 70;
    const V1NocommaActual: 71;
    const V1Bindings: 74;
    const V1BasicActual: 75;
    const ApplicationExpression: 76;
    const BoundedExpression: 117;
    const V1LogicalAbstractExpression: 119;
    const V1AbstractExpression: 133;
    const InterpolationMultilineLiteral: 134;
    const BoundDeclaration: 137;
    const DeclareBoundDeclaration: 138;
    const ValueTypeDeclaration: 141;
    const EntityTypeDeclaration: 142;
    const ConstraintDeclaration: 143;
    const ModuleDeclaration: 144;
    const WithUseDeclaration: 145;
    const Alias: 147;
    const AliasId: 148;
    const ImportDeclaration: 149;
    const ImportAlias: 151;
    const NamespaceDeclaration: 152;
}
declare const relLanguage: LRLanguage;
declare function rel(): LanguageSupport;
export { relLanguage, rel, relTerms };
