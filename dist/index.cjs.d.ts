import { LRLanguage, LanguageSupport } from "@codemirror/language";
declare namespace relTerms {
    const RawStringSequence: 1;
    const spaces: 164;
    const newLine: 165;
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
    const ParenOpId: 32;
    const Operator: 33;
    const QualifiedName: 34;
    const QualifiedNameId: 35;
    const QualifiedKeyword: 41;
    const QualifiedNameElem: 59;
    const Formals: 60;
    const Formal: 61;
    const BooleanLiteral: 62;
    const SpecializeIntLiteral: 63;
    const InterpolationLiteral: 64;
    const InterpolationId: 65;
    const InterpolationExpression: 66;
    const BasicExpression: 67;
    const PartialApplicationExpression: 68;
    const NocommaParam: 69;
    const Bindings: 72;
    const BasicParam: 73;
    const ApplicationExpression: 74;
    const BoundedExpression: 113;
    const LogicalAbstractExpression: 115;
    const AbstractExpression: 134;
    const InterpolationMultilineLiteral: 135;
    const BoundDeclaration: 138;
    const ValueTypeDeclaration: 139;
    const EntityTypeDeclaration: 140;
    const ConstraintDeclaration: 141;
    const ModuleDeclaration: 142;
    const WithUseDeclaration: 143;
    const Alias: 145;
    const AliasId: 146;
    const ImportDeclaration: 147;
    const NamespaceDeclaration: 149;
}
declare const relLanguage: LRLanguage;
declare function rel(): LanguageSupport;
export { relLanguage, rel, relTerms };
