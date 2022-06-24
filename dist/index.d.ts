import { LRLanguage, LanguageSupport } from "@codemirror/language";
declare const relLanguage: LRLanguage;
declare const relCompletion: import("@codemirror/state").Extension;
declare function rel(): LanguageSupport;
export { relLanguage, relCompletion, rel };
