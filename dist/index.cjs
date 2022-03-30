'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lr = require('@lezer/lr');
var common = require('@lezer/common');
var language = require('@codemirror/language');
var highlight = require('@codemirror/highlight');

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_identifier = {__proto__:null,inline:10, if:16, then:20, else:22, end:24, from:28, module:32, forall:36, for:40, in:42, implies:46, def:50, output:56, with:62, use:64, ic:68, doc:72, entity:78, true:82, false:82, Int:96, String:100, Any:104, Number:108, Char:112, Missing:116, Floating:120, UnsignedInt:124, SignedInt:128, Rational:132, FixedDecimal:136, RelName:140, Entity:144, AutoNumber:148, Hash:152, FilePos:156, Date:160, DateTime:164, Year:168, Month:172, Week:176, Day:180, Hour:184, Minute:188, Second:192, Millisecond:196, Microsecond:200, Nanosecond:204};
const parser = lr.LRParser.deserialize({
  version: 13,
  states: "1WO]QPOOOOQO'#Et'#EtOOQO'#DU'#DUOOQO'#Eu'#EuOOQO'#D['#D[OOQO'#El'#ElOOQO'#Eg'#EgQ]QPOOO$_QPO'#C`O]QPO'#CcO$dQPO'#CiO$dQPO'#CkO]QPO'#CmO$dQPO'#CoO]QPO'#CrO$iQPO'#CtO$dQPO'#CzO$dQPO'#C}O$qQPO'#DPO$dQPO'#DSO$vQPO'#D]O(_QPO'#D_O+vQPO'#DaO/_QPO'#DcO2vQPO'#DeO6_QPO'#DgO9vQPO'#DiO=_QPO'#DkO@vQPO'#DmOD_QPO'#DoOGvQPO'#DqOK_QPO'#DsONvQPO'#DuO!$_QPO'#DwO!'vQPO'#DyO!+_QPO'#D{O!.vQPO'#D}O!2_QPO'#EPO!5vQPO'#ERO!9_QPO'#ETO!<vQPO'#EVO!@_QPO'#EXO!CvQPO'#EZO!G_QPO'#E]O!JvQPO'#E_O!N_QPO'#EaO##vQPO'#EcO#'_QPO'#EeOOQO-E8e-E8eO#*vQPO,58zO#._QPO'#CeO#.lQPO,58}OOQO'#Cb'#CbOOQO,59T,59TO]QPO,59VO#.wQPO,59XO#.|QPO,59ZOOQO,59^,59^O#/RQPO,59`O#2jQPO,59cO#6UQPO,59fO#6ZQPO,59iOOQO,59k,59kOOQO,59n,59nOOQO,59w,59wOOQO,59y,59yOOQO,59{,59{OOQO,59},59}OOQO,5:P,5:POOQO,5:R,5:ROOQO,5:T,5:TOOQO,5:V,5:VOOQO,5:X,5:XOOQO,5:Z,5:ZOOQO,5:],5:]OOQO,5:_,5:_OOQO,5:a,5:aOOQO,5:c,5:cOOQO,5:e,5:eOOQO,5:g,5:gOOQO,5:i,5:iOOQO,5:k,5:kOOQO,5:m,5:mOOQO,5:o,5:oOOQO,5:q,5:qOOQO,5:s,5:sOOQO,5:u,5:uOOQO,5:w,5:wOOQO,5:y,5:yOOQO,5:{,5:{OOQO,5:},5:}OOQO,5;P,5;POOQO1G.f1G.fO#6cQPO1G.iO]QPO'#EhOOQO1G.i1G.iO]QPO1G.iO#6nQPO1G.qO]QPO1G.sO$dQPO1G.uOOQO'#Cv'#CvOOQO1G.z1G.zOOQO'#Cy'#CyOOQO1G.}1G.}O#6sQPO1G.}O$dQPO1G/QOOQO1G/T1G/TO$dQPO1G/TOOQO-E8f-E8fOOQO7+$T7+$TO]QPO7+$TOOQO,5;S,5;SO#:[QPO7+$TOOQO7+$]7+$]O#:aQPO7+$_OOQO7+$a7+$aOOQO7+$i7+$iOOQO7+$l7+$lO#:fQPO7+$oO#:kQPO<<GoOOQO<<Go<<GoOOQO<<Gy<<GyOOQO<<HZ<<HZOOQOAN=ZAN=Z",
  stateData: "#:p~O#_OSPOSQOS~OWXO^YO`ZOb[Od]Og^Oi_Oo`OraOtbOuPOwcOyPOzPO{PO|PO}PO!QdO!SeO!UfO!WgO!YhO![iO!^jO!`kO!blO!dmO!fnO!hoO!jpO!lqO!nrO!psO!rtO!tuO!vvO!xwO!zxO!|yO#OzO#Q{O#S|O#U}O#W!OO#Y!PO#aWO~OT!RO~O#b!UO~Ol!]O#b!UO~Ou!`O~O#b!UOW!PX^!PX`!PXb!PXd!PXg!PXi!PXo!PXr!PXt!PXu!PXw!PXy!PXz!PX{!PX|!PX}!PX!Q!PX!S!PX!U!PX!W!PX!Y!PX![!PX!^!PX!`!PX!b!PX!d!PX!f!PX!h!PX!j!PX!l!PX!n!PX!p!PX!r!PX!t!PX!v!PX!x!PX!z!PX!|!PX#O!PX#Q!PX#S!PX#U!PX#W!PX#Y!PX#]!PX#a!PXY!PXZ!PX[!PX#d!PX#c!PX~O#b!UOW!RX^!RX`!RXb!RXd!RXg!RXi!RXo!RXr!RXt!RXu!RXw!RXy!RXz!RX{!RX|!RX}!RX!Q!RX!S!RX!U!RX!W!RX!Y!RX![!RX!^!RX!`!RX!b!RX!d!RX!f!RX!h!RX!j!RX!l!RX!n!RX!p!RX!r!RX!t!RX!v!RX!x!RX!z!RX!|!RX#O!RX#Q!RX#S!RX#U!RX#W!RX#Y!RX#]!RX#a!RXY!RXZ!RX[!RX#d!RX#c!RX~O#b!UOW!TX^!TX`!TXb!TXd!TXg!TXi!TXo!TXr!TXt!TXu!TXw!TXy!TXz!TX{!TX|!TX}!TX!Q!TX!S!TX!U!TX!W!TX!Y!TX![!TX!^!TX!`!TX!b!TX!d!TX!f!TX!h!TX!j!TX!l!TX!n!TX!p!TX!r!TX!t!TX!v!TX!x!TX!z!TX!|!TX#O!TX#Q!TX#S!TX#U!TX#W!TX#Y!TX#]!TX#a!TXY!TXZ!TX[!TX#d!TX#c!TX~O#b!UOW!VX^!VX`!VXb!VXd!VXg!VXi!VXo!VXr!VXt!VXu!VXw!VXy!VXz!VX{!VX|!VX}!VX!Q!VX!S!VX!U!VX!W!VX!Y!VX![!VX!^!VX!`!VX!b!VX!d!VX!f!VX!h!VX!j!VX!l!VX!n!VX!p!VX!r!VX!t!VX!v!VX!x!VX!z!VX!|!VX#O!VX#Q!VX#S!VX#U!VX#W!VX#Y!VX#]!VX#a!VXY!VXZ!VX[!VX#d!VX#c!VX~O#b!UOW!XX^!XX`!XXb!XXd!XXg!XXi!XXo!XXr!XXt!XXu!XXw!XXy!XXz!XX{!XX|!XX}!XX!Q!XX!S!XX!U!XX!W!XX!Y!XX![!XX!^!XX!`!XX!b!XX!d!XX!f!XX!h!XX!j!XX!l!XX!n!XX!p!XX!r!XX!t!XX!v!XX!x!XX!z!XX!|!XX#O!XX#Q!XX#S!XX#U!XX#W!XX#Y!XX#]!XX#a!XXY!XXZ!XX[!XX#d!XX#c!XX~O#b!UOW!ZX^!ZX`!ZXb!ZXd!ZXg!ZXi!ZXo!ZXr!ZXt!ZXu!ZXw!ZXy!ZXz!ZX{!ZX|!ZX}!ZX!Q!ZX!S!ZX!U!ZX!W!ZX!Y!ZX![!ZX!^!ZX!`!ZX!b!ZX!d!ZX!f!ZX!h!ZX!j!ZX!l!ZX!n!ZX!p!ZX!r!ZX!t!ZX!v!ZX!x!ZX!z!ZX!|!ZX#O!ZX#Q!ZX#S!ZX#U!ZX#W!ZX#Y!ZX#]!ZX#a!ZXY!ZXZ!ZX[!ZX#d!ZX#c!ZX~O#b!UOW!]X^!]X`!]Xb!]Xd!]Xg!]Xi!]Xo!]Xr!]Xt!]Xu!]Xw!]Xy!]Xz!]X{!]X|!]X}!]X!Q!]X!S!]X!U!]X!W!]X!Y!]X![!]X!^!]X!`!]X!b!]X!d!]X!f!]X!h!]X!j!]X!l!]X!n!]X!p!]X!r!]X!t!]X!v!]X!x!]X!z!]X!|!]X#O!]X#Q!]X#S!]X#U!]X#W!]X#Y!]X#]!]X#a!]XY!]XZ!]X[!]X#d!]X#c!]X~O#b!UOW!_X^!_X`!_Xb!_Xd!_Xg!_Xi!_Xo!_Xr!_Xt!_Xu!_Xw!_Xy!_Xz!_X{!_X|!_X}!_X!Q!_X!S!_X!U!_X!W!_X!Y!_X![!_X!^!_X!`!_X!b!_X!d!_X!f!_X!h!_X!j!_X!l!_X!n!_X!p!_X!r!_X!t!_X!v!_X!x!_X!z!_X!|!_X#O!_X#Q!_X#S!_X#U!_X#W!_X#Y!_X#]!_X#a!_XY!_XZ!_X[!_X#d!_X#c!_X~O#b!UOW!aX^!aX`!aXb!aXd!aXg!aXi!aXo!aXr!aXt!aXu!aXw!aXy!aXz!aX{!aX|!aX}!aX!Q!aX!S!aX!U!aX!W!aX!Y!aX![!aX!^!aX!`!aX!b!aX!d!aX!f!aX!h!aX!j!aX!l!aX!n!aX!p!aX!r!aX!t!aX!v!aX!x!aX!z!aX!|!aX#O!aX#Q!aX#S!aX#U!aX#W!aX#Y!aX#]!aX#a!aXY!aXZ!aX[!aX#d!aX#c!aX~O#b!UOW!cX^!cX`!cXb!cXd!cXg!cXi!cXo!cXr!cXt!cXu!cXw!cXy!cXz!cX{!cX|!cX}!cX!Q!cX!S!cX!U!cX!W!cX!Y!cX![!cX!^!cX!`!cX!b!cX!d!cX!f!cX!h!cX!j!cX!l!cX!n!cX!p!cX!r!cX!t!cX!v!cX!x!cX!z!cX!|!cX#O!cX#Q!cX#S!cX#U!cX#W!cX#Y!cX#]!cX#a!cXY!cXZ!cX[!cX#d!cX#c!cX~O#b!UOW!eX^!eX`!eXb!eXd!eXg!eXi!eXo!eXr!eXt!eXu!eXw!eXy!eXz!eX{!eX|!eX}!eX!Q!eX!S!eX!U!eX!W!eX!Y!eX![!eX!^!eX!`!eX!b!eX!d!eX!f!eX!h!eX!j!eX!l!eX!n!eX!p!eX!r!eX!t!eX!v!eX!x!eX!z!eX!|!eX#O!eX#Q!eX#S!eX#U!eX#W!eX#Y!eX#]!eX#a!eXY!eXZ!eX[!eX#d!eX#c!eX~O#b!UOW!gX^!gX`!gXb!gXd!gXg!gXi!gXo!gXr!gXt!gXu!gXw!gXy!gXz!gX{!gX|!gX}!gX!Q!gX!S!gX!U!gX!W!gX!Y!gX![!gX!^!gX!`!gX!b!gX!d!gX!f!gX!h!gX!j!gX!l!gX!n!gX!p!gX!r!gX!t!gX!v!gX!x!gX!z!gX!|!gX#O!gX#Q!gX#S!gX#U!gX#W!gX#Y!gX#]!gX#a!gXY!gXZ!gX[!gX#d!gX#c!gX~O#b!UOW!iX^!iX`!iXb!iXd!iXg!iXi!iXo!iXr!iXt!iXu!iXw!iXy!iXz!iX{!iX|!iX}!iX!Q!iX!S!iX!U!iX!W!iX!Y!iX![!iX!^!iX!`!iX!b!iX!d!iX!f!iX!h!iX!j!iX!l!iX!n!iX!p!iX!r!iX!t!iX!v!iX!x!iX!z!iX!|!iX#O!iX#Q!iX#S!iX#U!iX#W!iX#Y!iX#]!iX#a!iXY!iXZ!iX[!iX#d!iX#c!iX~O#b!UOW!kX^!kX`!kXb!kXd!kXg!kXi!kXo!kXr!kXt!kXu!kXw!kXy!kXz!kX{!kX|!kX}!kX!Q!kX!S!kX!U!kX!W!kX!Y!kX![!kX!^!kX!`!kX!b!kX!d!kX!f!kX!h!kX!j!kX!l!kX!n!kX!p!kX!r!kX!t!kX!v!kX!x!kX!z!kX!|!kX#O!kX#Q!kX#S!kX#U!kX#W!kX#Y!kX#]!kX#a!kXY!kXZ!kX[!kX#d!kX#c!kX~O#b!UOW!mX^!mX`!mXb!mXd!mXg!mXi!mXo!mXr!mXt!mXu!mXw!mXy!mXz!mX{!mX|!mX}!mX!Q!mX!S!mX!U!mX!W!mX!Y!mX![!mX!^!mX!`!mX!b!mX!d!mX!f!mX!h!mX!j!mX!l!mX!n!mX!p!mX!r!mX!t!mX!v!mX!x!mX!z!mX!|!mX#O!mX#Q!mX#S!mX#U!mX#W!mX#Y!mX#]!mX#a!mXY!mXZ!mX[!mX#d!mX#c!mX~O#b!UOW!oX^!oX`!oXb!oXd!oXg!oXi!oXo!oXr!oXt!oXu!oXw!oXy!oXz!oX{!oX|!oX}!oX!Q!oX!S!oX!U!oX!W!oX!Y!oX![!oX!^!oX!`!oX!b!oX!d!oX!f!oX!h!oX!j!oX!l!oX!n!oX!p!oX!r!oX!t!oX!v!oX!x!oX!z!oX!|!oX#O!oX#Q!oX#S!oX#U!oX#W!oX#Y!oX#]!oX#a!oXY!oXZ!oX[!oX#d!oX#c!oX~O#b!UOW!qX^!qX`!qXb!qXd!qXg!qXi!qXo!qXr!qXt!qXu!qXw!qXy!qXz!qX{!qX|!qX}!qX!Q!qX!S!qX!U!qX!W!qX!Y!qX![!qX!^!qX!`!qX!b!qX!d!qX!f!qX!h!qX!j!qX!l!qX!n!qX!p!qX!r!qX!t!qX!v!qX!x!qX!z!qX!|!qX#O!qX#Q!qX#S!qX#U!qX#W!qX#Y!qX#]!qX#a!qXY!qXZ!qX[!qX#d!qX#c!qX~O#b!UOW!sX^!sX`!sXb!sXd!sXg!sXi!sXo!sXr!sXt!sXu!sXw!sXy!sXz!sX{!sX|!sX}!sX!Q!sX!S!sX!U!sX!W!sX!Y!sX![!sX!^!sX!`!sX!b!sX!d!sX!f!sX!h!sX!j!sX!l!sX!n!sX!p!sX!r!sX!t!sX!v!sX!x!sX!z!sX!|!sX#O!sX#Q!sX#S!sX#U!sX#W!sX#Y!sX#]!sX#a!sXY!sXZ!sX[!sX#d!sX#c!sX~O#b!UOW!uX^!uX`!uXb!uXd!uXg!uXi!uXo!uXr!uXt!uXu!uXw!uXy!uXz!uX{!uX|!uX}!uX!Q!uX!S!uX!U!uX!W!uX!Y!uX![!uX!^!uX!`!uX!b!uX!d!uX!f!uX!h!uX!j!uX!l!uX!n!uX!p!uX!r!uX!t!uX!v!uX!x!uX!z!uX!|!uX#O!uX#Q!uX#S!uX#U!uX#W!uX#Y!uX#]!uX#a!uXY!uXZ!uX[!uX#d!uX#c!uX~O#b!UOW!wX^!wX`!wXb!wXd!wXg!wXi!wXo!wXr!wXt!wXu!wXw!wXy!wXz!wX{!wX|!wX}!wX!Q!wX!S!wX!U!wX!W!wX!Y!wX![!wX!^!wX!`!wX!b!wX!d!wX!f!wX!h!wX!j!wX!l!wX!n!wX!p!wX!r!wX!t!wX!v!wX!x!wX!z!wX!|!wX#O!wX#Q!wX#S!wX#U!wX#W!wX#Y!wX#]!wX#a!wXY!wXZ!wX[!wX#d!wX#c!wX~O#b!UOW!yX^!yX`!yXb!yXd!yXg!yXi!yXo!yXr!yXt!yXu!yXw!yXy!yXz!yX{!yX|!yX}!yX!Q!yX!S!yX!U!yX!W!yX!Y!yX![!yX!^!yX!`!yX!b!yX!d!yX!f!yX!h!yX!j!yX!l!yX!n!yX!p!yX!r!yX!t!yX!v!yX!x!yX!z!yX!|!yX#O!yX#Q!yX#S!yX#U!yX#W!yX#Y!yX#]!yX#a!yXY!yXZ!yX[!yX#d!yX#c!yX~O#b!UOW!{X^!{X`!{Xb!{Xd!{Xg!{Xi!{Xo!{Xr!{Xt!{Xu!{Xw!{Xy!{Xz!{X{!{X|!{X}!{X!Q!{X!S!{X!U!{X!W!{X!Y!{X![!{X!^!{X!`!{X!b!{X!d!{X!f!{X!h!{X!j!{X!l!{X!n!{X!p!{X!r!{X!t!{X!v!{X!x!{X!z!{X!|!{X#O!{X#Q!{X#S!{X#U!{X#W!{X#Y!{X#]!{X#a!{XY!{XZ!{X[!{X#d!{X#c!{X~O#b!UOW!}X^!}X`!}Xb!}Xd!}Xg!}Xi!}Xo!}Xr!}Xt!}Xu!}Xw!}Xy!}Xz!}X{!}X|!}X}!}X!Q!}X!S!}X!U!}X!W!}X!Y!}X![!}X!^!}X!`!}X!b!}X!d!}X!f!}X!h!}X!j!}X!l!}X!n!}X!p!}X!r!}X!t!}X!v!}X!x!}X!z!}X!|!}X#O!}X#Q!}X#S!}X#U!}X#W!}X#Y!}X#]!}X#a!}XY!}XZ!}X[!}X#d!}X#c!}X~O#b!UOW#PX^#PX`#PXb#PXd#PXg#PXi#PXo#PXr#PXt#PXu#PXw#PXy#PXz#PX{#PX|#PX}#PX!Q#PX!S#PX!U#PX!W#PX!Y#PX![#PX!^#PX!`#PX!b#PX!d#PX!f#PX!h#PX!j#PX!l#PX!n#PX!p#PX!r#PX!t#PX!v#PX!x#PX!z#PX!|#PX#O#PX#Q#PX#S#PX#U#PX#W#PX#Y#PX#]#PX#a#PXY#PXZ#PX[#PX#d#PX#c#PX~O#b!UOW#RX^#RX`#RXb#RXd#RXg#RXi#RXo#RXr#RXt#RXu#RXw#RXy#RXz#RX{#RX|#RX}#RX!Q#RX!S#RX!U#RX!W#RX!Y#RX![#RX!^#RX!`#RX!b#RX!d#RX!f#RX!h#RX!j#RX!l#RX!n#RX!p#RX!r#RX!t#RX!v#RX!x#RX!z#RX!|#RX#O#RX#Q#RX#S#RX#U#RX#W#RX#Y#RX#]#RX#a#RXY#RXZ#RX[#RX#d#RX#c#RX~O#b!UOW#TX^#TX`#TXb#TXd#TXg#TXi#TXo#TXr#TXt#TXu#TXw#TXy#TXz#TX{#TX|#TX}#TX!Q#TX!S#TX!U#TX!W#TX!Y#TX![#TX!^#TX!`#TX!b#TX!d#TX!f#TX!h#TX!j#TX!l#TX!n#TX!p#TX!r#TX!t#TX!v#TX!x#TX!z#TX!|#TX#O#TX#Q#TX#S#TX#U#TX#W#TX#Y#TX#]#TX#a#TXY#TXZ#TX[#TX#d#TX#c#TX~O#b!UOW#VX^#VX`#VXb#VXd#VXg#VXi#VXo#VXr#VXt#VXu#VXw#VXy#VXz#VX{#VX|#VX}#VX!Q#VX!S#VX!U#VX!W#VX!Y#VX![#VX!^#VX!`#VX!b#VX!d#VX!f#VX!h#VX!j#VX!l#VX!n#VX!p#VX!r#VX!t#VX!v#VX!x#VX!z#VX!|#VX#O#VX#Q#VX#S#VX#U#VX#W#VX#Y#VX#]#VX#a#VXY#VXZ#VX[#VX#d#VX#c#VX~O#b!UOW#XX^#XX`#XXb#XXd#XXg#XXi#XXo#XXr#XXt#XXu#XXw#XXy#XXz#XX{#XX|#XX}#XX!Q#XX!S#XX!U#XX!W#XX!Y#XX![#XX!^#XX!`#XX!b#XX!d#XX!f#XX!h#XX!j#XX!l#XX!n#XX!p#XX!r#XX!t#XX!v#XX!x#XX!z#XX!|#XX#O#XX#Q#XX#S#XX#U#XX#W#XX#Y#XX#]#XX#a#XXY#XXZ#XX[#XX#d#XX#c#XX~O#b!UOWSa^Sa`SabSadSagSaiSaoSarSatSauSawSaySazSa{Sa|Sa}Sa!QSa!SSa!USa!WSa!YSa![Sa!^Sa!`Sa!bSa!dSa!fSa!hSa!jSa!lSa!nSa!pSa!rSa!tSa!vSa!xSa!zSa!|Sa#OSa#QSa#SSa#USa#WSa#YSa#]Sa#aSaYSaZSa[Sa#dSa#cSa~OYXXZXX[XX~P]OY#QOZ#SO[#RO~O#d#UO~Oe#VO~O#e#WOWha^ha`habhadhaghaihaoharhathauhawhayhazha{ha|ha}ha!Qha!Sha!Uha!Wha!Yha![ha!^ha!`ha!bha!dha!fha!hha!jha!lha!nha!pha!rha!tha!vha!xha!zha!|ha#Oha#Qha#Sha#Uha#Wha#Yha#]ha#ahaYhaZha[ha#dha#cha~O#b!UO#e#YOWka^ka`kabkadkagkaikaokarkatkaukawkaykazka{ka|ka}ka!Qka!Ska!Uka!Wka!Yka![ka!^ka!`ka!bka!dka!fka!hka!jka!lka!nka!pka!rka!tka!vka!xka!zka!|ka#Oka#Qka#Ska#Uka#Wka#Yka#]ka#akaYkaZka[ka#dka#cka~Op#]O~O#e#^O#f#_O~OY#QOZ#bO[#aO~O[#eO~O#b!UOWki^ki`kibkidkigkiikiokirkitkiukiwkiykizki{ki|ki}ki!Qki!Ski!Uki!Wki!Yki![ki!^ki!`ki!bki!dki!fki!hki!jki!lki!nki!pki!rki!tki!vki!xki!zki!|ki#Oki#Qki#Ski#Uki#Wki#Yki#]ki#akiYkiZki[ki#dki#cki~O[#lO~O#c#mO~O#g#nO~O[#oO~O",
  goto: "(p#jPPPP#kP#x#kP&iPPP#kP#kP#kP#kPP#kP#kP&x#kP&{#kPP#kP#kPP#kP#kPPPPP#k'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP'OP']'kPPP'qPPPPPPP(U(cgTOVX[^!S!W#Q#S#U#bQ!VYQ!WZQ!Y]Q![_Q!^`Q!_aQ!acQ!bdQ!ceQ!dfQ!egQ!fhQ!giQ!hjQ!ikQ!jlQ!kmQ!lnQ!moQ!npQ!oqQ!prQ!qsQ!rtQ!suQ!tvQ!uwQ!vxQ!wyQ!xzQ!y{Q!z|Q!{}Q!|!OQ!}!PQ#O!RQ#Z!]Q#g#VQ#h#[Q#i#]R#j#_Q!TXQ#T!WQ#c#QQ#d#SR#k#bR#X![R#[!]gROVX[^!S!W#Q#S#U#bQVOS!QV!SZ!SX!W#Q#S#bQ#P!TR#`#P`UOVX!S!W#Q#S#bQ!X[Q!Z^R#f#UgQOVX[^!S!W#Q#S#U#bgSOVX[^!S!W#Q#S#U#b",
  nodeNames: "⚠ LineComment BlockComment Rel InlineStatement inline VariableName IfStatement if Body then else end FromStatement from ModuleStatement module ForallStatement forall ForInStatement for in ImpliesStatement implies DefineStatement def AssignOp OutputDefinitionStatement output AssignOp WithUseStatement with use ConstraintStatement ic DocStringStatement doc MultilineStringLiteral EntityStatement entity ExpressionStatement BooleanLiteral Number StringLiteral RelnameLiteral RelnameStringLiteral TypeStatement IntType Int StringType String AnyType Any NumberType Number CharType Char MissingType Missing FloatingType Floating UnsignedIntType UnsignedInt SignedIntType SignedInt RationalType Rational FixedDecimalType FixedDecimal RelNameType RelName EntityType Entity AutoNumberType AutoNumber HashType Hash FilePosType FilePos DateType Date DateTimeType DateTime YearType Year MonthType Month WeekType Week DayType Day HourType Hour MinuteType Minute SecondType Second MillisecondType Millisecond MicrosecondType Microsecond NanosecondType Nanosecond",
  maxTerm: 117,
  nodeProps: [
    [common.NodeProp.group, -6,37,41,42,43,44,45,"Expression",-28,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,"Type"]
  ],
  skippedNodes: [0,1,2],
  repeatNodeCount: 2,
  tokenData: "3S~RfXY!gYZ!g]^!gpq!grs!xwx&Uxy&syz&x!O!P&}!P!Q'}!Q!R)W!R![){![!]+W!_!`1p!b!c1u!c!}1z#R#S2c#T#o1z#o#p2x#q#r2}4w5b1z5i6S1z~!lS#_~XY!gYZ!g]^!gpq!g~!}U{~OY#aZr#ars$Ts#O#a#O#P#}#P~#a~#fU{~OY#aZr#ars#xs#O#a#O#P#}#P~#a~#}O{~~$QPO~#a~$YP{~rs$]~$`TOr$]rs$os#O$]#O#P%Q#P~$]~$rPrs$u~$xPrs${~%QOu~~%TTOr$]rs%ds#O$]#O#P%Q#P~$]~%gTOr$]rs%vs#O$]#O#P%Q#P~$]~%yPrs%|~&RPu~rs${~&ZU{~OY&UZw&Uwx#xx#O&U#O#P&m#P~&U~&pPO~&U~&xO#d~~&}O#c~~'QP!Q!['T~'YRz~!Q!['T!g!h'c#X#Y'c~'fR{|'o}!O'o!Q!['u~'rP!Q!['u~'zPz~!Q!['u~(QQz{(W!P!Q({~(ZROz(Wz{(d{~(W~(gTOz(Wz{(d{!P(W!P!Q(v!Q~(W~({OQ~~)QQP~OY({Z~({~)]Uz~!O!P)o!Q![){!g!h'c#X#Y'c#c#d*^#l#m*l~)rR!Q![)o!g!h'c#X#Y'c~*QSz~!O!P)o!Q![){!g!h'c#X#Y'c~*aP!Q!Y*d~*iPz~!Q!Y*d~*oR!Q![*x!c!i*x#T#Z*x~*}Rz~!Q![*x!c!i*x#T#Z*x~+ZVrs+p!c!}0|!}#O1e#R#S0|#T#o0|4w5b0|5i6S0|~+sTYZ+p]^+prs,S#O#P,h#Q#R+p~,XT}~YZ+p]^+prs,S#O#P,h#Q#R+p~,keYZ+p]^+prs,S!Q!R-|!R!S-|!S!T-|!T!U-|!U!Y.c!w!x.x#O#P,h#Q#R+p#T#U+p#U#V+p#X#Y+p#Y#Z+p#b#c+p#f#g+p#h#i+p#i#j/z#j#k+p#l#m0d~.PUYZ+p]^+prs,S!Q!Y.c#O#P,h#Q#R+p~.fUYZ+p]^+prs,S!Q!Y+p#O#P,h#Q#R+p~.{R!Q![/U!c!i/U#T#Z/U~/XR!Q![/b!c!i/b#T#Z/b~/eR!Q![/n!c!i/n#T#Z/n~/qR!Q![/z!c!i/z#T#Z/z~/}R!Q![0W!c!i0W#T#Z0W~0ZR!Q![0d!c!i0d#T#Z0d~0gR!Q![0p!c!i0p#T#Z0p~0sR!Q![+p!c!i+p#T#Z+p~1RU|~!Q![0|!c!}0|#R#S0|#T#o0|4w5b0|5i6S0|~1hP#P#Q1k~1pO|~~1uO#e~~1zO#a~~2PU#b~!Q![1z!c!}1z#R#S1z#T#o1z4w5b1z5i6S1z~2fU!Q![1z!c!}1z#R#S1z#T#o1z4w5b1z5i6S1z~2}O#f~~3SO#g~",
  tokenizers: [0],
  topRules: {"Rel":[0,3]},
  specialized: [{term: 110, get: value => spec_identifier[value] || -1}],
  tokenPrec: 0
});

// import {completeFromList} from "@codemirror/autocomplete"
const relLanguage = language.LRLanguage.define({
    parser: parser.configure({
        props: [
            // indentNodeProp.add({
            //   Application: delimitedIndent({closing: ")", align: false})
            // }),
            // foldNodeProp.add({
            //   Application: foldInside
            // }),
            highlight.styleTags({
                'use forall for in iff if then else end where with select implies': highlight.tags.controlKeyword,
                'not and or xor': highlight.tags.operatorKeyword,
                'as from output inline ic doc entity': highlight.tags.keyword,
                'def': highlight.tags.definitionKeyword,
                'module': highlight.tags.moduleKeyword,
                'Any String Int Number Char Missing Floating UnsignedInt SignedInt Rational FixedDecimal RelName Entity AutoNumber Hash FilePos Date DateTime Year Month Week Day Hour Minute Second Millisecond Microsecond Nanosecond Boolean': highlight.tags.typeName,
                Number: highlight.tags.number,
                BooleanLiteral: highlight.tags.bool,
                StringLiteral: highlight.tags.string,
                // DateLiteral: t.string,
                // DateTimeLiteral: t.string,
                AssignOp: highlight.tags.definitionOperator,
                LineComment: highlight.tags.lineComment,
                BlockComment: highlight.tags.blockComment,
                DocStringLiteral: highlight.tags.blockComment,
                VariableName: highlight.tags.definition(highlight.tags.variableName),
                Atom: highlight.tags.atom,
                RelnameLiteral: highlight.tags.atom,
                RelnameStringLiteral: highlight.tags.atom,
                DefineStatement: highlight.tags.atom,
                '( )': highlight.tags.paren,
                '[ ]': highlight.tags.squareBracket,
                '{ }': highlight.tags.brace,
                '.': highlight.tags.derefOperator,
                ', ;': highlight.tags.separator,
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
    return new language.LanguageSupport(relLanguage);
}

exports.rel = rel;
exports.relLanguage = relLanguage;
