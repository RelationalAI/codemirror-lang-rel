import { LRParser } from '@lezer/lr';
import { NodeProp } from '@lezer/common';
import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { styleTags, tags } from '@codemirror/highlight';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_identifier = {__proto__:null,inline:10, if:16, then:20, else:22, end:24, module:28, forall:32, implies:36, def:40, output:46, with:52, use:54, ic:58, doc:62, true:68, false:68, Int:82, String:86, Any:90, Number:94, Char:98, Missing:102, Floating:106, UnsignedInt:110, SignedInt:114, Rational:118, FixedDecimal:122, RelName:126, Entity:130, AutoNumber:134, Hash:138, FilePos:142, Date:146, DateTime:150, Year:154, Month:158, Week:162, Day:166, Hour:170, Minute:174, Second:178, Millisecond:182, Microsecond:186, Nanosecond:190};
const parser = LRParser.deserialize({
  version: 13,
  states: "0[O]QPOOOOQO'#Co'#CoOOQO'#En'#EnOOQO'#C}'#C}OOQO'#Eo'#EoOOQO'#DT'#DTOOQO'#Ee'#EeOOQO'#E`'#E`Q]QPOOO$[QPO'#C`O]QPO'#CcO$aQPO'#CiO]QPO'#CkO]QPO'#CmO$fQPO'#CoO$aQPO'#CuO$aQPO'#CxO$nQQO'#CzO$sQPO'#DUO(UQPO'#DWO+gQPO'#DYO.xQPO'#D[O2ZQPO'#D^O5lQPO'#D`O8}QPO'#DbO<`QPO'#DdO?qQPO'#DfOCSQPO'#DhOFeQPO'#DjOIvQPO'#DlOMXQPO'#DnO!!jQPO'#DpO!%{QPO'#DrO!)^QPO'#DtO!,oQPO'#DvO!0QQPO'#DxO!3cQPO'#DzO!6tQPO'#D|O!:VQPO'#EOO!=hQPO'#EQO!@yQPO'#ESO!D[QPO'#EUO!GmQPO'#EWO!KOQPO'#EYO!NaQPO'#E[O##rQPO'#E^OOQO-E8^-E8^O#'TQPO,58zO#*fQPO'#CeO#*sQPO,58}OOQO'#Cb'#CbO]QPO,59TO#+OQPO,59VOOQO,59X,59XO#+TQPO,59ZO#.fQPO,59^O#1zQPO,59aO#2PQPO,59dOOQO,59f,59fOOQO,59p,59pOOQO,59r,59rOOQO,59t,59tOOQO,59v,59vOOQO,59x,59xOOQO,59z,59zOOQO,59|,59|OOQO,5:O,5:OOOQO,5:Q,5:QOOQO,5:S,5:SOOQO,5:U,5:UOOQO,5:W,5:WOOQO,5:Y,5:YOOQO,5:[,5:[OOQO,5:^,5:^OOQO,5:`,5:`OOQO,5:b,5:bOOQO,5:d,5:dOOQO,5:f,5:fOOQO,5:h,5:hOOQO,5:j,5:jOOQO,5:l,5:lOOQO,5:n,5:nOOQO,5:p,5:pOOQO,5:r,5:rOOQO,5:t,5:tOOQO,5:v,5:vOOQO,5:x,5:xOOQO1G.f1G.fO#2XQPO1G.iO]QPO'#EaOOQO1G.i1G.iO]QPO1G.iO#2dQPO1G.oO]QPO1G.qOOQO'#Cq'#CqOOQO1G.u1G.uOOQO'#Ct'#CtOOQO1G.x1G.xO#2iQPO1G.xO$aQPO1G.{OOQO1G/O1G/OO$aQPO1G/OOOQO-E8_-E8_OOQO7+$T7+$TO]QPO7+$TOOQO,5:{,5:{O#5zQPO7+$TOOQO7+$Z7+$ZO#6PQPO7+$]OOQO7+$d7+$dOOQO7+$g7+$gO#6UQPO7+$jO#6ZQPO<<GoOOQO<<Go<<GoOOQO<<Gw<<GwOOQO<<HU<<HUOOQOAN=ZAN=Z",
  stateData: "#6`~O#WOSPOSQOS~OWYO^ZO`[Ob]Od^Oj_Om`OoaOrQOsQOtQOuQOvQOybO{cO}dO!PeO!RfO!TgO!VhO!XiO!ZjO!]kO!_lO!amO!cnO!eoO!gpO!iqO!krO!msO!otO!quO!svO!uwO!wxO!yyO!{zO!}{O#P|O#R}O#YXO#]PO#_PO#`PO~OT!PO~O#Z!SO~Og!XO#Z!SO~Op![O~O#Z!SOWxX^xX`xXbxXdxXjxXmxXoxXrxXsxXtxXuxXvxXyxX{xX}xX!PxX!RxX!TxX!VxX!XxX!ZxX!]xX!_xX!axX!cxX!exX!gxX!ixX!kxX!mxX!oxX!qxX!sxX!uxX!wxX!yxX!{xX!}xX#PxX#RxX#UxX#YxX#]xX#_xX#`xXYxXZxX[xX#[xX~O#Z!SOWzX^zX`zXbzXdzXjzXmzXozXrzXszXtzXuzXvzXyzX{zX}zX!PzX!RzX!TzX!VzX!XzX!ZzX!]zX!_zX!azX!czX!ezX!gzX!izX!kzX!mzX!ozX!qzX!szX!uzX!wzX!yzX!{zX!}zX#PzX#RzX#UzX#YzX#]zX#_zX#`zXYzXZzX[zX#[zX~O#Z!SOW|X^|X`|Xb|Xd|Xj|Xm|Xo|Xr|Xs|Xt|Xu|Xv|Xy|X{|X}|X!P|X!R|X!T|X!V|X!X|X!Z|X!]|X!_|X!a|X!c|X!e|X!g|X!i|X!k|X!m|X!o|X!q|X!s|X!u|X!w|X!y|X!{|X!}|X#P|X#R|X#U|X#Y|X#]|X#_|X#`|XY|XZ|X[|X#[|X~O#Z!SOW!OX^!OX`!OXb!OXd!OXj!OXm!OXo!OXr!OXs!OXt!OXu!OXv!OXy!OX{!OX}!OX!P!OX!R!OX!T!OX!V!OX!X!OX!Z!OX!]!OX!_!OX!a!OX!c!OX!e!OX!g!OX!i!OX!k!OX!m!OX!o!OX!q!OX!s!OX!u!OX!w!OX!y!OX!{!OX!}!OX#P!OX#R!OX#U!OX#Y!OX#]!OX#_!OX#`!OXY!OXZ!OX[!OX#[!OX~O#Z!SOW!QX^!QX`!QXb!QXd!QXj!QXm!QXo!QXr!QXs!QXt!QXu!QXv!QXy!QX{!QX}!QX!P!QX!R!QX!T!QX!V!QX!X!QX!Z!QX!]!QX!_!QX!a!QX!c!QX!e!QX!g!QX!i!QX!k!QX!m!QX!o!QX!q!QX!s!QX!u!QX!w!QX!y!QX!{!QX!}!QX#P!QX#R!QX#U!QX#Y!QX#]!QX#_!QX#`!QXY!QXZ!QX[!QX#[!QX~O#Z!SOW!SX^!SX`!SXb!SXd!SXj!SXm!SXo!SXr!SXs!SXt!SXu!SXv!SXy!SX{!SX}!SX!P!SX!R!SX!T!SX!V!SX!X!SX!Z!SX!]!SX!_!SX!a!SX!c!SX!e!SX!g!SX!i!SX!k!SX!m!SX!o!SX!q!SX!s!SX!u!SX!w!SX!y!SX!{!SX!}!SX#P!SX#R!SX#U!SX#Y!SX#]!SX#_!SX#`!SXY!SXZ!SX[!SX#[!SX~O#Z!SOW!UX^!UX`!UXb!UXd!UXj!UXm!UXo!UXr!UXs!UXt!UXu!UXv!UXy!UX{!UX}!UX!P!UX!R!UX!T!UX!V!UX!X!UX!Z!UX!]!UX!_!UX!a!UX!c!UX!e!UX!g!UX!i!UX!k!UX!m!UX!o!UX!q!UX!s!UX!u!UX!w!UX!y!UX!{!UX!}!UX#P!UX#R!UX#U!UX#Y!UX#]!UX#_!UX#`!UXY!UXZ!UX[!UX#[!UX~O#Z!SOW!WX^!WX`!WXb!WXd!WXj!WXm!WXo!WXr!WXs!WXt!WXu!WXv!WXy!WX{!WX}!WX!P!WX!R!WX!T!WX!V!WX!X!WX!Z!WX!]!WX!_!WX!a!WX!c!WX!e!WX!g!WX!i!WX!k!WX!m!WX!o!WX!q!WX!s!WX!u!WX!w!WX!y!WX!{!WX!}!WX#P!WX#R!WX#U!WX#Y!WX#]!WX#_!WX#`!WXY!WXZ!WX[!WX#[!WX~O#Z!SOW!YX^!YX`!YXb!YXd!YXj!YXm!YXo!YXr!YXs!YXt!YXu!YXv!YXy!YX{!YX}!YX!P!YX!R!YX!T!YX!V!YX!X!YX!Z!YX!]!YX!_!YX!a!YX!c!YX!e!YX!g!YX!i!YX!k!YX!m!YX!o!YX!q!YX!s!YX!u!YX!w!YX!y!YX!{!YX!}!YX#P!YX#R!YX#U!YX#Y!YX#]!YX#_!YX#`!YXY!YXZ!YX[!YX#[!YX~O#Z!SOW![X^![X`![Xb![Xd![Xj![Xm![Xo![Xr![Xs![Xt![Xu![Xv![Xy![X{![X}![X!P![X!R![X!T![X!V![X!X![X!Z![X!]![X!_![X!a![X!c![X!e![X!g![X!i![X!k![X!m![X!o![X!q![X!s![X!u![X!w![X!y![X!{![X!}![X#P![X#R![X#U![X#Y![X#]![X#_![X#`![XY![XZ![X[![X#[![X~O#Z!SOW!^X^!^X`!^Xb!^Xd!^Xj!^Xm!^Xo!^Xr!^Xs!^Xt!^Xu!^Xv!^Xy!^X{!^X}!^X!P!^X!R!^X!T!^X!V!^X!X!^X!Z!^X!]!^X!_!^X!a!^X!c!^X!e!^X!g!^X!i!^X!k!^X!m!^X!o!^X!q!^X!s!^X!u!^X!w!^X!y!^X!{!^X!}!^X#P!^X#R!^X#U!^X#Y!^X#]!^X#_!^X#`!^XY!^XZ!^X[!^X#[!^X~O#Z!SOW!`X^!`X`!`Xb!`Xd!`Xj!`Xm!`Xo!`Xr!`Xs!`Xt!`Xu!`Xv!`Xy!`X{!`X}!`X!P!`X!R!`X!T!`X!V!`X!X!`X!Z!`X!]!`X!_!`X!a!`X!c!`X!e!`X!g!`X!i!`X!k!`X!m!`X!o!`X!q!`X!s!`X!u!`X!w!`X!y!`X!{!`X!}!`X#P!`X#R!`X#U!`X#Y!`X#]!`X#_!`X#`!`XY!`XZ!`X[!`X#[!`X~O#Z!SOW!bX^!bX`!bXb!bXd!bXj!bXm!bXo!bXr!bXs!bXt!bXu!bXv!bXy!bX{!bX}!bX!P!bX!R!bX!T!bX!V!bX!X!bX!Z!bX!]!bX!_!bX!a!bX!c!bX!e!bX!g!bX!i!bX!k!bX!m!bX!o!bX!q!bX!s!bX!u!bX!w!bX!y!bX!{!bX!}!bX#P!bX#R!bX#U!bX#Y!bX#]!bX#_!bX#`!bXY!bXZ!bX[!bX#[!bX~O#Z!SOW!dX^!dX`!dXb!dXd!dXj!dXm!dXo!dXr!dXs!dXt!dXu!dXv!dXy!dX{!dX}!dX!P!dX!R!dX!T!dX!V!dX!X!dX!Z!dX!]!dX!_!dX!a!dX!c!dX!e!dX!g!dX!i!dX!k!dX!m!dX!o!dX!q!dX!s!dX!u!dX!w!dX!y!dX!{!dX!}!dX#P!dX#R!dX#U!dX#Y!dX#]!dX#_!dX#`!dXY!dXZ!dX[!dX#[!dX~O#Z!SOW!fX^!fX`!fXb!fXd!fXj!fXm!fXo!fXr!fXs!fXt!fXu!fXv!fXy!fX{!fX}!fX!P!fX!R!fX!T!fX!V!fX!X!fX!Z!fX!]!fX!_!fX!a!fX!c!fX!e!fX!g!fX!i!fX!k!fX!m!fX!o!fX!q!fX!s!fX!u!fX!w!fX!y!fX!{!fX!}!fX#P!fX#R!fX#U!fX#Y!fX#]!fX#_!fX#`!fXY!fXZ!fX[!fX#[!fX~O#Z!SOW!hX^!hX`!hXb!hXd!hXj!hXm!hXo!hXr!hXs!hXt!hXu!hXv!hXy!hX{!hX}!hX!P!hX!R!hX!T!hX!V!hX!X!hX!Z!hX!]!hX!_!hX!a!hX!c!hX!e!hX!g!hX!i!hX!k!hX!m!hX!o!hX!q!hX!s!hX!u!hX!w!hX!y!hX!{!hX!}!hX#P!hX#R!hX#U!hX#Y!hX#]!hX#_!hX#`!hXY!hXZ!hX[!hX#[!hX~O#Z!SOW!jX^!jX`!jXb!jXd!jXj!jXm!jXo!jXr!jXs!jXt!jXu!jXv!jXy!jX{!jX}!jX!P!jX!R!jX!T!jX!V!jX!X!jX!Z!jX!]!jX!_!jX!a!jX!c!jX!e!jX!g!jX!i!jX!k!jX!m!jX!o!jX!q!jX!s!jX!u!jX!w!jX!y!jX!{!jX!}!jX#P!jX#R!jX#U!jX#Y!jX#]!jX#_!jX#`!jXY!jXZ!jX[!jX#[!jX~O#Z!SOW!lX^!lX`!lXb!lXd!lXj!lXm!lXo!lXr!lXs!lXt!lXu!lXv!lXy!lX{!lX}!lX!P!lX!R!lX!T!lX!V!lX!X!lX!Z!lX!]!lX!_!lX!a!lX!c!lX!e!lX!g!lX!i!lX!k!lX!m!lX!o!lX!q!lX!s!lX!u!lX!w!lX!y!lX!{!lX!}!lX#P!lX#R!lX#U!lX#Y!lX#]!lX#_!lX#`!lXY!lXZ!lX[!lX#[!lX~O#Z!SOW!nX^!nX`!nXb!nXd!nXj!nXm!nXo!nXr!nXs!nXt!nXu!nXv!nXy!nX{!nX}!nX!P!nX!R!nX!T!nX!V!nX!X!nX!Z!nX!]!nX!_!nX!a!nX!c!nX!e!nX!g!nX!i!nX!k!nX!m!nX!o!nX!q!nX!s!nX!u!nX!w!nX!y!nX!{!nX!}!nX#P!nX#R!nX#U!nX#Y!nX#]!nX#_!nX#`!nXY!nXZ!nX[!nX#[!nX~O#Z!SOW!pX^!pX`!pXb!pXd!pXj!pXm!pXo!pXr!pXs!pXt!pXu!pXv!pXy!pX{!pX}!pX!P!pX!R!pX!T!pX!V!pX!X!pX!Z!pX!]!pX!_!pX!a!pX!c!pX!e!pX!g!pX!i!pX!k!pX!m!pX!o!pX!q!pX!s!pX!u!pX!w!pX!y!pX!{!pX!}!pX#P!pX#R!pX#U!pX#Y!pX#]!pX#_!pX#`!pXY!pXZ!pX[!pX#[!pX~O#Z!SOW!rX^!rX`!rXb!rXd!rXj!rXm!rXo!rXr!rXs!rXt!rXu!rXv!rXy!rX{!rX}!rX!P!rX!R!rX!T!rX!V!rX!X!rX!Z!rX!]!rX!_!rX!a!rX!c!rX!e!rX!g!rX!i!rX!k!rX!m!rX!o!rX!q!rX!s!rX!u!rX!w!rX!y!rX!{!rX!}!rX#P!rX#R!rX#U!rX#Y!rX#]!rX#_!rX#`!rXY!rXZ!rX[!rX#[!rX~O#Z!SOW!tX^!tX`!tXb!tXd!tXj!tXm!tXo!tXr!tXs!tXt!tXu!tXv!tXy!tX{!tX}!tX!P!tX!R!tX!T!tX!V!tX!X!tX!Z!tX!]!tX!_!tX!a!tX!c!tX!e!tX!g!tX!i!tX!k!tX!m!tX!o!tX!q!tX!s!tX!u!tX!w!tX!y!tX!{!tX!}!tX#P!tX#R!tX#U!tX#Y!tX#]!tX#_!tX#`!tXY!tXZ!tX[!tX#[!tX~O#Z!SOW!vX^!vX`!vXb!vXd!vXj!vXm!vXo!vXr!vXs!vXt!vXu!vXv!vXy!vX{!vX}!vX!P!vX!R!vX!T!vX!V!vX!X!vX!Z!vX!]!vX!_!vX!a!vX!c!vX!e!vX!g!vX!i!vX!k!vX!m!vX!o!vX!q!vX!s!vX!u!vX!w!vX!y!vX!{!vX!}!vX#P!vX#R!vX#U!vX#Y!vX#]!vX#_!vX#`!vXY!vXZ!vX[!vX#[!vX~O#Z!SOW!xX^!xX`!xXb!xXd!xXj!xXm!xXo!xXr!xXs!xXt!xXu!xXv!xXy!xX{!xX}!xX!P!xX!R!xX!T!xX!V!xX!X!xX!Z!xX!]!xX!_!xX!a!xX!c!xX!e!xX!g!xX!i!xX!k!xX!m!xX!o!xX!q!xX!s!xX!u!xX!w!xX!y!xX!{!xX!}!xX#P!xX#R!xX#U!xX#Y!xX#]!xX#_!xX#`!xXY!xXZ!xX[!xX#[!xX~O#Z!SOW!zX^!zX`!zXb!zXd!zXj!zXm!zXo!zXr!zXs!zXt!zXu!zXv!zXy!zX{!zX}!zX!P!zX!R!zX!T!zX!V!zX!X!zX!Z!zX!]!zX!_!zX!a!zX!c!zX!e!zX!g!zX!i!zX!k!zX!m!zX!o!zX!q!zX!s!zX!u!zX!w!zX!y!zX!{!zX!}!zX#P!zX#R!zX#U!zX#Y!zX#]!zX#_!zX#`!zXY!zXZ!zX[!zX#[!zX~O#Z!SOW!|X^!|X`!|Xb!|Xd!|Xj!|Xm!|Xo!|Xr!|Xs!|Xt!|Xu!|Xv!|Xy!|X{!|X}!|X!P!|X!R!|X!T!|X!V!|X!X!|X!Z!|X!]!|X!_!|X!a!|X!c!|X!e!|X!g!|X!i!|X!k!|X!m!|X!o!|X!q!|X!s!|X!u!|X!w!|X!y!|X!{!|X!}!|X#P!|X#R!|X#U!|X#Y!|X#]!|X#_!|X#`!|XY!|XZ!|X[!|X#[!|X~O#Z!SOW#OX^#OX`#OXb#OXd#OXj#OXm#OXo#OXr#OXs#OXt#OXu#OXv#OXy#OX{#OX}#OX!P#OX!R#OX!T#OX!V#OX!X#OX!Z#OX!]#OX!_#OX!a#OX!c#OX!e#OX!g#OX!i#OX!k#OX!m#OX!o#OX!q#OX!s#OX!u#OX!w#OX!y#OX!{#OX!}#OX#P#OX#R#OX#U#OX#Y#OX#]#OX#_#OX#`#OXY#OXZ#OX[#OX#[#OX~O#Z!SOW#QX^#QX`#QXb#QXd#QXj#QXm#QXo#QXr#QXs#QXt#QXu#QXv#QXy#QX{#QX}#QX!P#QX!R#QX!T#QX!V#QX!X#QX!Z#QX!]#QX!_#QX!a#QX!c#QX!e#QX!g#QX!i#QX!k#QX!m#QX!o#QX!q#QX!s#QX!u#QX!w#QX!y#QX!{#QX!}#QX#P#QX#R#QX#U#QX#Y#QX#]#QX#_#QX#`#QXY#QXZ#QX[#QX#[#QX~O#Z!SOWSa^Sa`SabSadSajSamSaoSarSasSatSauSavSaySa{Sa}Sa!PSa!RSa!TSa!VSa!XSa!ZSa!]Sa!_Sa!aSa!cSa!eSa!gSa!iSa!kSa!mSa!oSa!qSa!sSa!uSa!wSa!ySa!{Sa!}Sa#PSa#RSa#USa#YSa#]Sa#_Sa#`SaYSaZSa[Sa#[Sa~OYXXZXX[XX~P]OY!{OZ!}O[!|O~O#]#PO~O#^#QOWca^ca`cabcadcajcamcaocarcascatcaucavcayca{ca}ca!Pca!Rca!Tca!Vca!Xca!Zca!]ca!_ca!aca!cca!eca!gca!ica!kca!mca!oca!qca!sca!uca!wca!yca!{ca!}ca#Pca#Rca#Uca#Yca#]ca#_ca#`caYcaZca[ca#[ca~O#Z!SO#^#SOWfa^fa`fabfadfajfamfaofarfasfatfaufavfayfa{fa}fa!Pfa!Rfa!Tfa!Vfa!Xfa!Zfa!]fa!_fa!afa!cfa!efa!gfa!ifa!kfa!mfa!ofa!qfa!sfa!ufa!wfa!yfa!{fa!}fa#Pfa#Rfa#Ufa#Yfa#]fa#_fa#`faYfaZfa[fa#[fa~Ok#VO~O#^#WO#`#XO~OY!{OZ#[O[#ZO~O[#_O~O#Z!SOWfi^fi`fibfidfijfimfiofirfisfitfiufivfiyfi{fi}fi!Pfi!Rfi!Tfi!Vfi!Xfi!Zfi!]fi!_fi!afi!cfi!efi!gfi!ifi!kfi!mfi!ofi!qfi!sfi!ufi!wfi!yfi!{fi!}fi#Pfi#Rfi#Ufi#Yfi#]fi#_fi#`fiYfiZfi[fi#[fi~O[#eO~O#[#fO~O#a#gO~O[#hO~O",
  goto: "(^#dPPPP#eP#r#eP&VPPP#eP#eP#eP#eP&f#eP&i#ePP#eP#ePP#ePPPPP#e&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&lP&y'XPPP'_PPPPPPPP'r(PgUOWY[]!Q!T!{!}#P#[Q!TZQ!W^Q!Y_Q!Z`Q!]bQ!^cQ!_dQ!`eQ!afQ!bgQ!chQ!diQ!ejQ!fkQ!glQ!hmQ!inQ!joQ!kpQ!lqQ!mrQ!nsQ!otQ!puQ!qvQ!rwQ!sxQ!tyQ!uzQ!v{Q!w|Q!x}Q!y!PQ#T!XQ#a#UQ#b#VR#c#XQ!RYQ#O!TQ#]!{Q#^!}R#d#[R#R!WR#U!XgSOWY[]!Q!T!{!}#P#[QWOS!OW!QZ!QY!T!{!}#[Q!z!RR#Y!z`VOWY!Q!T!{!}#[Q!U[Q!V]R#`#PgROWY[]!Q!T!{!}#P#[gTOWY[]!Q!T!{!}#P#[",
  nodeNames: "⚠ LineComment BlockComment Rel InlineStatement inline VariableName IfStatement if Body then else end ModuleStatement module ForallStatement forall ImpliesStatement implies DefineStatement def AssignOp OutputDefinitionStatement output AssignOp WithUseStatement with use ConstraintStatement ic DocstringStatement doc DocstringLiteral ExpressionStatement BooleanLiteral Number StringLiteral RelnameLiteral RelnameStringLiteral TypeStatement IntType Int StringType String AnyType Any NumberType Number CharType Char MissingType Missing FloatingType Floating UnsignedIntType UnsignedInt SignedIntType SignedInt RationalType Rational FixedDecimalType FixedDecimal RelNameType RelName EntityType Entity AutoNumberType AutoNumber HashType Hash FilePosType FilePos DateType Date DateTimeType DateTime YearType Year MonthType Month WeekType Week DayType Day HourType Hour MinuteType Minute SecondType Second MillisecondType Millisecond MicrosecondType Microsecond NanosecondType Nanosecond",
  maxTerm: 111,
  nodeProps: [
    [NodeProp.group, -5,34,35,36,37,38,"Expression",-28,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,"Type"]
  ],
  skippedNodes: [0,1,2],
  repeatNodeCount: 2,
  tokenData: "E|~RgXY!jYZ!j]^!jpq!jrs!{wx8yxy9hyz9m!O!P9r!P!Q:r!Q!R;{!R![<p![!]={!_!`De!b!cDj!c!}Do!}#OEW#R#SE]#T#oDo#o#pEr#q#rEw4w5bDo5i6SDo~!oS#W~XY!jYZ!j]^!jpq!jR#QZtPOY#sYZ$gZ]#s]^!{^r#srs)ss#O#s#O#P*Z#P#Q#s#Q#R!{#R~#sP#xUtPOY#sZr#srs$[s#O#s#O#P$a#P~#sP$aOtPP$dPO~#sQ$jTYZ$g]^$grs$y#O#P%_#Q#R$gQ%OTpQYZ$g]^$grs$y#O#P%_#Q#R$gQ%beYZ$g]^$grs$y!Q!R&s!R!S&s!S!T&s!T!U&s!U!Y'Y!w!x'o#O#P%_#Q#R$g#T#U$g#U#V$g#X#Y$g#Y#Z$g#b#c$g#f#g$g#h#i$g#i#j(q#j#k$g#l#m)ZQ&vUYZ$g]^$grs$y!Q!Y'Y#O#P%_#Q#R$gQ']UYZ$g]^$grs$y!Q!Y$g#O#P%_#Q#R$gQ'rR!Q!['{!c!i'{#T#Z'{Q(OR!Q![(X!c!i(X#T#Z(XQ([R!Q![(e!c!i(e#T#Z(eQ(hR!Q![(q!c!i(q#T#Z(qQ(tR!Q![(}!c!i(}#T#Z(}Q)QR!Q![)Z!c!i)Z#T#Z)ZQ)^R!Q![)g!c!i)g#T#Z)gQ)jR!Q![$g!c!i$g#T#Z$gR)zTpQtPYZ$g]^$grs$y#O#P%_#Q#R$gR*^sOY#sYZ!{Z]#s]^!{^r#srs,ks!Q#s!Q!R-e!R!S-e!S!T-e!T!U-e!U!Y.c!Y!w#s!w!x/a!x#O#s#O#P6g#P#Q#s#Q#R!{#R#T#s#T#U!{#U#V!{#V#X#s#X#Y!{#Y#Z!{#Z#b#s#b#c!{#c#f#s#f#g!{#g#h#s#h#i!{#i#j2{#j#k!{#k#l#s#l#m4q#m~#sR,rZpQtPOY#sYZ$gZ]#s]^!{^r#srs)ss#O#s#O#P*Z#P#Q#s#Q#R!{#R~#sR-j]tPOY#sYZ$gZ]#s]^!{^r#srs)ss!Q#s!Q!Y.c!Y#O#s#O#P*Z#P#Q#s#Q#R!{#R~#sR.h]tPOY#sYZ$gZ]#s]^!{^r#srs)ss!Q#s!Q!Y!{!Y#O#s#O#P*Z#P#Q#s#Q#R!{#R~#sR/f[tPOY#sZr#srs$[s!Q#s!Q![0[![!c#s!c!i0[!i#O#s#O#P$a#P#T#s#T#Z0[#Z~#sR0a[tPOY#sZr#srs$[s!Q#s!Q![1V![!c#s!c!i1V!i#O#s#O#P$a#P#T#s#T#Z1V#Z~#sR1[[tPOY#sZr#srs$[s!Q#s!Q![2Q![!c#s!c!i2Q!i#O#s#O#P$a#P#T#s#T#Z2Q#Z~#sR2V[tPOY#sZr#srs$[s!Q#s!Q![2{![!c#s!c!i2{!i#O#s#O#P$a#P#T#s#T#Z2{#Z~#sR3Q[tPOY#sZr#srs$[s!Q#s!Q![3v![!c#s!c!i3v!i#O#s#O#P$a#P#T#s#T#Z3v#Z~#sR3{[tPOY#sZr#srs$[s!Q#s!Q![4q![!c#s!c!i4q!i#O#s#O#P$a#P#T#s#T#Z4q#Z~#sR4v[tPOY#sZr#srs$[s!Q#s!Q![5l![!c#s!c!i5l!i#O#s#O#P$a#P#T#s#T#Z5l#Z~#sR5q[tPOY#sZr#srs$[s!Q#s!Q![!{![!c#s!c!i!{!i#O#s#O#P$a#P#T#s#T#Z!{#Z~#sR6lstPOY#sYZ$gZ]#s]^!{^r#srs)ss!Q#s!Q!R-e!R!S-e!S!T-e!T!U-e!U!Y.c!Y!w#s!w!x/a!x#O#s#O#P*Z#P#Q#s#Q#R!{#R#T#s#T#U!{#U#V!{#V#X#s#X#Y!{#Y#Z!{#Z#b#s#b#c!{#c#f#s#f#g!{#g#h#s#h#i!{#i#j2{#j#k!{#k#l#s#l#m4q#m~#sP9OUtPOY8yZw8ywx$[x#O8y#O#P9b#P~8yP9ePO~8y~9mO#]~~9rO#[~~9uP!Q![9x~9}Rs~!Q![9x!g!h:W#X#Y:W~:ZR{|:d}!O:d!Q![:j~:gP!Q![:j~:oPs~!Q![:j~:uQz{:{!P!Q;p~;OROz:{z{;X{~:{~;[TOz:{z{;X{!P:{!P!Q;k!Q~:{~;pOQ~~;uQP~OY;pZ~;p~<QUs~!O!P<d!Q![<p!g!h:W#X#Y:W#c#d=R#l#m=a~<gR!Q![<d!g!h:W#X#Y:W~<uSs~!O!P<d!Q![<p!g!h:W#X#Y:W~=UP!Q!Y=X~=^Ps~!Q!Y=X~=dR!Q![=m!c!i=m#T#Z=m~=rRs~!Q![=m!c!i=m#T#Z=m~>OVrs>e!c!}Cq!}#ODY#R#SCq#T#oCq4w5bCq5i6SCq~>hTYZ>e]^>ers>w#O#P?]#Q#R>e~>|Tv~YZ>e]^>ers>w#O#P?]#Q#R>e~?`eYZ>e]^>ers>w!Q!R@q!R!S@q!S!T@q!T!U@q!U!YAW!w!xAm#O#P?]#Q#R>e#T#U>e#U#V>e#X#Y>e#Y#Z>e#b#c>e#f#g>e#h#i>e#i#jBo#j#k>e#l#mCX~@tUYZ>e]^>ers>w!Q!YAW#O#P?]#Q#R>e~AZUYZ>e]^>ers>w!Q!Y>e#O#P?]#Q#R>e~ApR!Q![Ay!c!iAy#T#ZAy~A|R!Q![BV!c!iBV#T#ZBV~BYR!Q![Bc!c!iBc#T#ZBc~BfR!Q![Bo!c!iBo#T#ZBo~BrR!Q![B{!c!iB{#T#ZB{~COR!Q![CX!c!iCX#T#ZCX~C[R!Q![Ce!c!iCe#T#ZCe~ChR!Q![>e!c!i>e#T#Z>e~CvUu~!Q![Cq!c!}Cq#R#SCq#T#oCq4w5bCq5i6SCq~D]P#P#QD`~DeOu~~DjO#^~~DoO#Y~~DtU#Z~!Q![Do!c!}Do#R#SDo#T#oDo4w5bDo5i6SDo~E]O#_~~E`U!Q![Do!c!}Do#R#SDo#T#oDo4w5bDo5i6SDo~EwO#`~~E|O#a~",
  tokenizers: [0, 1],
  topRules: {"Rel":[0,3]},
  specialized: [{term: 103, get: value => spec_identifier[value] || -1}],
  tokenPrec: 0
});

// import {completeFromList} from "@codemirror/autocomplete"
const relLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            // indentNodeProp.add({
            //   Application: delimitedIndent({closing: ")", align: false})
            // }),
            // foldNodeProp.add({
            //   Application: foldInside
            // }),
            styleTags({
                'use forall for iff if then else end where with select implies': tags.controlKeyword,
                'in not and or xor': tags.operatorKeyword,
                'as from output inline ic doc': tags.keyword,
                'def': tags.definitionKeyword,
                'module': tags.moduleKeyword,
                'Any String Int Number Char Missing Floating UnsignedInt SignedInt Rational FixedDecimal RelName Entity AutoNumber Hash FilePos Date DateTime Year Month Week Day Hour Minute Second Millisecond Microsecond Nanosecond Boolean': tags.typeName,
                Number: tags.number,
                BooleanLiteral: tags.bool,
                StringLiteral: tags.string,
                // DateLiteral: t.string,
                // DateTimeLiteral: t.string,
                AssignOp: tags.definitionOperator,
                LineComment: tags.lineComment,
                BlockComment: tags.blockComment,
                VariableName: tags.definition(tags.variableName),
                Atom: tags.atom,
                RelnameLiteral: tags.atom,
                RelnameStringLiteral: tags.atom,
                DefineStatement: tags.atom,
                '( )': tags.paren,
                '[ ]': tags.squareBracket,
                '{ }': tags.brace,
                '.': tags.derefOperator,
                ', ;': tags.separator,
            })
        ]
    }),
    languageData: {
        closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
        commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
        // indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
        wordChars: "$"
    }
});
// Autocomplete
// export const relCompletion = relLanguage.data.of({
//   autocomplete: completeFromList([
//     { label: "Any", type: "type" },
//     { label: "AutoNumber", type: "type" },
//     { label: "Boolean", type: "type" },
//     { label: "Char", type: "type" },
//     { label: "Day", type: "type" },
//     { label: "Date", type: "type" },
//     { label: "DateTime", type: "type" },
//     { label: "Year", type: "type" },
//     { label: "Month", type: "type" },
//     { label: "Week", type: "type" },
//     { label: "Hour", type: "type" },
//     { label: "Minute", type: "type" },
//     { label: "Second", type: "type" },
//     { label: "Millisecond", type: "type" },
//     { label: "Microsecond", type: "type" },
//     { label: "Nanosecond", type: "type" },
//     { label: "Entity", type: "type" },
//     { label: "Int", type: "type" },
//     { label: "Number", type: "type" },
//     { label: "Missing", type: "type" },
//     { label: "Floating", type: "type" },
//     { label: "UnsignedInt", type: "type" },
//     { label: "SignedInt", type: "type" },
//     { label: "Rational", type: "type" },
//     { label: "FixedDecimal", type: "type" },
//     { label: "Hash", type: "type" },
//     { label: "FilePos", type: "type" },
//     { label: "String", type: "type" },
//     { label: "def", type: "keyword" },
//     { label: "output", type: "keyword" },
//     { label: "from", type: "keyword" },
//     { label: "if", type: "keyword" },
//     { label: "iff", type: "keyword" },
//     { label: "then", type: "keyword" },
//     { label: "else", type: "keyword" },
//     { label: "end", type: "keyword" },
//     { label: "exists", type: "keyword" },
//     { label: "where", type: "keyword" },
//     { label: "with", type: "keyword" },
//     { label: "select", type: "keyword" },
//     { label: "implies", type: "keyword" },
//     { label: "use", type: "keyword" },
//     { label: "forall", type: "keyword" },
//     { label: "in", type: "keyword" },
//     { label: "ic", type: "keyword" },
//     { label: "not", type: "keyword" },
//     { label: "and", type: "keyword" },
//     { label: "or", type: "keyword" },
//     { label: "xor", type: "keyword" },
//     { label: "union", type: "keyword" },
//   ])
// })
function rel() {
    // return new LanguageSupport(relLanguage, [relCompletion])
    return new LanguageSupport(relLanguage);
}

export { rel, relLanguage };
