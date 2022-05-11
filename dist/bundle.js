(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,".container {\n    width: 960px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    align-items: center;\n}\n\n.title {\n    text-align: center;\n    margin: 0;\n    padding: 0;\n    cursor: default;\n}\n\n.description {\n    text-align: center;\n    font-size: 15px;\n    color: gray;\n    cursor: default;\n}\n\n.folder {\n    resize: none;\n    width: 900px;\n    border: none;\n    outline: none;\n    border: 1px solid gray;\n    transition: all .2s ease;\n    height: 150px;\n    border-radius: 5px;\n    padding: 10px;\n    cursor: default;\n    font-size: 18px;\n    pointer-events: none;\n    user-select: none;\n    text-align: justify;\n    font-family: monospace;\n    word-break: break-all;\n}\n\n.folder:focus {\n    border: 1px solid black;\n}\n\n.keyboard {\n    margin-top: 25px;\n    width: 960px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.keyboard .row {\n    display: flex;\n    gap: 15px;\n}\n\n.keyboard .btn {\n    position: relative;\n    width: 50px;\n    height: 50px;\n    background: black;\n    border: 2px solid white;\n    box-shadow: 0 0 15px black;\n    border-radius: 10px;\n    cursor: pointer;\n    color: white;\n    font-size: 18px;\n    font-weight: 700;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Times New Roman', serif;\n    letter-spacing: 1px;\n    transition: all .1s ease;\n}\n\n.keyboard .btn.active {\n    animation-name: btnClick;\n    animation-duration: .05s;\n    animation-fill-mode: forwards;\n}\n\n@keyframes btnClick {\n    from {\n        transform: scale(100%);\n        box-shadow: 0 0 15px black;\n    }\n    to {\n        transform: scale(90%);\n        box-shadow: 0 0 5px black;\n    }\n}\n\n.keyboard .word,\n.keyboard .digit {\n    background: brown;\n}\n\n.keyboard .long {\n    width: 110px;\n}\n\n.keyboard .shift {\n    width: 70px;\n}\n\n.keyboard .space {\n    width: 460px;\n    background: brown;\n}\n\n.keyboard .btn:focus {\n    transform: scale(90%);\n}\n\n.symbol {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 5px;\n    font-size: 12px;\n}",""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var l=0;l<this.length;l++){var p=this[l][0];null!=p&&(i[p]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),r&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=r):c[2]=r),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],l=0;l<e.length;l++){var p=e[l],s=n.base?p[0]+n.base:p[0],c=a[s]||0,d="".concat(s," ").concat(c);a[s]=c+1;var u=r(d),w={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)t[u].references++,t[u].updater(w);else{var y=o(w,n);n.byIndex=l,t.splice(l,0,{identifier:d,updater:y,references:1})}i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=r(a[i]);t[l].references--}for(var p=n(e,o),s=0;s<a.length;s++){var c=r(a[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=p}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),i=r.n(a),l=r(565),p=r.n(l),s=r(216),c=r.n(s),d=r(589),u=r.n(d),w=r(426),y={};y.styleTagTransform=u(),y.setAttributes=p(),y.insert=i().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=c(),t()(w.Z,y),w.Z&&w.Z.locals&&w.Z.locals,r.p;const f={en:{Backquote:{lower:"`",upper:"~"},Digit1:{lower:"1",upper:"!"},Digit2:{lower:"2",upper:"@"},Digit3:{lower:"3",upper:"#"},Digit4:{lower:"4",upper:"$"},Digit5:{lower:"5",upper:"%"},Digit6:{lower:"6",upper:"^"},Digit7:{lower:"7",upper:"&"},Digit8:{lower:"8",upper:"*"},Digit9:{lower:"9",upper:"("},Digit0:{lower:"0",upper:")"},Minus:{lower:"-",upper:"_"},Equal:{lower:"=",upper:"+"},KeyQ:{lower:"q",upper:"Q"},KeyW:{lower:"w",upper:"W"},KeyE:{lower:"e",upper:"E"},KeyR:{lower:"r",upper:"R"},KeyT:{lower:"t",upper:"T"},KeyY:{lower:"y",upper:"Y"},KeyU:{lower:"u",upper:"U"},KeyI:{lower:"i",upper:"I"},KeyO:{lower:"o",upper:"O"},KeyP:{lower:"p",upper:"P"},BracketLeft:{lower:"[",upper:"{"},BracketRight:{lower:"]",upper:"}"},Backslash:{lower:"\\",upper:"|"},KeyA:{lower:"a",upper:"A"},KeyS:{lower:"s",upper:"S"},KeyD:{lower:"d",upper:"D"},KeyF:{lower:"f",upper:"F"},KeyG:{lower:"g",upper:"G"},KeyH:{lower:"h",upper:"H"},KeyJ:{lower:"j",upper:"J"},KeyK:{lower:"k",upper:"K"},KeyL:{lower:"l",upper:"L"},Semicolon:{lower:";",upper:":"},Quote:{lower:"'",upper:'"'},NumpadDivide:{lower:"\\",upper:"\\"},KeyZ:{lower:"z",upper:"Z"},KeyX:{lower:"x",upper:"X"},KeyC:{lower:"c",upper:"C"},KeyV:{lower:"v",upper:"V"},KeyB:{lower:"b",upper:"B"},KeyN:{lower:"n",upper:"N"},KeyM:{lower:"m",upper:"M"},Period:{lower:".",upper:">"},Comma:{lower:",",upper:"<"},Slash:{lower:"/",upper:"?"},Backspace:{lower:"Backspace",upper:"Backspace"},Tab:{lower:"Tab",upper:"Tab"},Delete:{lower:"Del",upper:"Del"},CapsLock:{lower:"Caps Lock",upper:"Caps Lock"},Enter:{lower:"Enter",upper:"Enter"},ShiftLeft:{lower:"Shift",upper:"Shift"},ShiftRight:{lower:"Shift",upper:"Shift"},ArrowUp:{lower:"▲",upper:"▲"},ArrowLeft:{lower:"◄",upper:"◄"},ArrowDown:{lower:"▼",upper:"▼"},ArrowRight:{lower:"▶",upper:"▶"},ControlLeft:{lower:"Ctrl",upper:"Ctrl"},OSLeft:{lower:"Win",upper:"Win"},AltLeft:{lower:"Alt",upper:"Alt"},Space:{lower:"",upper:""},AltRight:{lower:"Alt",upper:"Alt"},ControlRight:{lower:"Ctrl",upper:"Ctrl"}},ru:{Backquote:{lower:"ё",upper:"Ё"},Digit1:{lower:"1",upper:"!"},Digit2:{lower:"2",upper:'"'},Digit3:{lower:"3",upper:"№"},Digit4:{lower:"4",upper:";"},Digit5:{lower:"5",upper:"%"},Digit6:{lower:"6",upper:":"},Digit7:{lower:"7",upper:"?"},Digit8:{lower:"8",upper:"*"},Digit9:{lower:"9",upper:"("},Digit0:{lower:"0",upper:")"},Minus:{lower:"-",upper:"_"},Equal:{lower:"=",upper:"+"},KeyQ:{lower:"й",upper:"Й"},KeyW:{lower:"ц",upper:"Ц"},KeyE:{lower:"у",upper:"У"},KeyR:{lower:"к",upper:"К"},KeyT:{lower:"е",upper:"Е"},KeyY:{lower:"н",upper:"Н"},KeyU:{lower:"г",upper:"Г"},KeyI:{lower:"ш",upper:"Ш"},KeyO:{lower:"щ",upper:"Щ"},KeyP:{lower:"з",upper:"З"},BracketLeft:{lower:"х",upper:"Х"},BracketRight:{lower:"ъ",upper:"Ъ"},Backslash:{lower:"\\",upper:"/"},KeyA:{lower:"ф",upper:"Ф"},KeyS:{lower:"ы",upper:"Ы"},KeyD:{lower:"в",upper:"В"},KeyF:{lower:"а",upper:"А"},KeyG:{lower:"п",upper:"П"},KeyH:{lower:"р",upper:"Р"},KeyJ:{lower:"о",upper:"О"},KeyK:{lower:"л",upper:"Л"},KeyL:{lower:"д",upper:"Д"},Semicolon:{lower:"ж",upper:"Ж"},Quote:{lower:"э",upper:"Э"},NumpadDivide:{lower:"\\",upper:"\\"},KeyZ:{lower:"я",upper:"Я"},KeyX:{lower:"ч",upper:"Ч"},KeyC:{lower:"с",upper:"С"},KeyV:{lower:"м",upper:"М"},KeyB:{lower:"и",upper:"И"},KeyN:{lower:"т",upper:"Т"},KeyM:{lower:"ь",upper:"Ь"},Period:{lower:"ю",upper:"Ю"},Comma:{lower:"б",upper:"Б"},Slash:{lower:".",upper:","},Backspace:{lower:"Backspace",upper:"Backspace"},Tab:{lower:"Tab",upper:"Tab"},Delete:{lower:"Del",upper:"Del"},CapsLock:{lower:"Caps Lock",upper:"Caps Lock"},Enter:{lower:"Enter",upper:"Enter"},ShiftLeft:{lower:"Shift",upper:"Shift"},ShiftRight:{lower:"Shift",upper:"Shift"},ArrowUp:{lower:"▲",upper:"▲"},ArrowLeft:{lower:"◄",upper:"◄"},ArrowDown:{lower:"▼",upper:"▼"},ArrowRight:{lower:"▶",upper:"▶"},ControlLeft:{lower:"Ctrl",upper:"Ctrl"},OSLeft:{lower:"Win",upper:"Win"},AltLeft:{lower:"Alt",upper:"Alt"},Space:{lower:"",upper:""},AltRight:{lower:"Alt",upper:"Alt"},ControlRight:{lower:"Ctrl",upper:"Ctrl"}}},g={en:{h1:"RS Virtual Keyboard",h2:"to switch between keyboard layouts, press Alt+Shift (OS Windows)",placeholder:"Enter your text"},ru:{h1:'Приложение "Виртуальная клавиатура"',h2:"для смены языковой раскладки нажмите клавиши Альт+Шифт (приложение реализовано на ОС Виндовс)",placeholder:"Пожалуйста, введите Ваш текст"}};let h,b="",m="en",k=!0,A=!0,x=!0,v=!1;const C=document.querySelector("body");let L,K,S,E,D,R;const T="абвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz",B=()=>{m="ru"===m?"en":"ru",S.forEach((e=>{e.textContent=k?f[m][e.getAttribute("data-key")].lower:f[m][e.getAttribute("data-key")].upper})),E.forEach((e=>{e.lastChild.textContent=f[m][e.getAttribute("data-key")].upper})),R.forEach((e=>{const t=e;b.length||(D.placeholder=g[m].placeholder),t.textContent=g[m][e.getAttribute("data-texts")]})),localStorage.setItem("lang",m)},O=()=>{b.length&&(D.placeholder=g[m].placeholder),D.textContent=b,D.focus(),D.setSelectionRange(h,h)},I=()=>{A=!A,S.forEach((e=>{const t=e,r=f[m][e.getAttribute("data-key")];if(T.split("").includes(t.textContent.toLowerCase())){const e=k?"lower":"upper",n=k?"upper":"lower";t.textContent=A?r[e]:r[n]}else t.textContent=A?r.lower:r.upper})),v&&!A&&B(),O()},q=e=>{e.classList.contains("word")&&(e=>{const t=b.slice(0,h),r=b.slice(h,b.length);b=T.split("").includes(e.textContent.toLowerCase())?A&&k||!A&&!k?t+f[m][e.getAttribute("data-key")].lower+r:t+f[m][e.getAttribute("data-key")].upper+r:A?t+f[m][e.getAttribute("data-key")].lower+r:t+f[m][e.getAttribute("data-key")].upper+r,h+=1,O()})(e),e.classList.contains("digit")&&(e=>{const t=b.slice(0,h),r=b.slice(h,b.length);b=A?t+f[m][e.getAttribute("data-key")].lower+r:t+f[m][e.getAttribute("data-key")].upper+r,h+=1,O()})(e),e.classList.contains("backspace")&&(h>0&&(b=b.slice(0,h-1)+b.slice(h,b.length)),h=h>0?h-1:0,O()),"Space"===e.getAttribute("data-key")&&(b=`${b.slice(0,h)} ${b.slice(h,b.length)}`,h+=1,O()),"Enter"===e.getAttribute("data-key")&&(b=`${b.slice(0,h)}\n${b.slice(h,b.length)}`,h+=1,O()),"CapsLock"===e.getAttribute("data-key")&&(k=!k,S.forEach((e=>{const t=e;T.split("").includes(t.textContent.toLowerCase())&&(t.textContent=k?f[m][e.getAttribute("data-key")].lower:f[m][e.getAttribute("data-key")].upper)}))),"Tab"===e.getAttribute("data-key")&&(b=`${b.slice(0,h)}\t${b.slice(h,b.length)}`,h+=1,O()),"ShiftLeft"!==e.getAttribute("data-key")&&"ShiftRight"!==e.getAttribute("data-key")||I(),"AltLeft"!==e.getAttribute("data-key")&&"AltRight"!==e.getAttribute("data-key")||(v=!v,v&&!A&&B()),"ArrowLeft"===e.getAttribute("data-key")&&(h&&(D.selectionEnd=h-1,D.selectionStart=h-1),h=D.selectionStart,D.setSelectionRange(h,h)),"ArrowRight"===e.getAttribute("data-key")&&(h<b.length&&(D.selectionEnd=h+1,D.selectionStart=h+1),h=D.selectionStart,D.setSelectionRange(h,h)),"ArrowUp"===e.getAttribute("data-key")&&(()=>{const e="\n"===D.textContent[D.selectionEnd]?D.textContent.lastIndexOf("\n",D.selectionEnd-1):D.textContent.lastIndexOf("\n",D.selectionEnd),t=e>0?D.selectionEnd-e:D.selectionEnd+1;let r;e>0&&(r=D.textContent.lastIndexOf("\n",e-1)>0?e-D.textContent.lastIndexOf("\n",e-1):e+1,t>r?(D.selectionEnd=e,D.selectionStart=e):(D.selectionEnd=e-(r-t),D.selectionStart=e-(r-t))),h=D.selectionStart})(),"ArrowDown"===e.getAttribute("data-key")&&(()=>{const e="\n"===D.textContent[D.selectionEnd]?D.textContent.lastIndexOf("\n",D.selectionEnd-1):D.textContent.lastIndexOf("\n",D.selectionEnd),t=e>0?D.selectionEnd-e:D.selectionEnd+1,r=D.textContent.indexOf("\n",D.selectionEnd);let n;r>0&&(n=D.textContent.indexOf("\n",r+1)>0?D.textContent.indexOf("\n",r+1)-r:D.textContent.length,t>n?(D.selectionEnd=n,D.selectionStart=n):(D.selectionEnd=t+r,D.selectionStart=t+r)),h=D.selectionStart})(),"Delete"===e.getAttribute("data-key")&&(h<b.length&&(b=b.slice(0,h)+b.slice(h+1,b.length)),O())},M=()=>{L=document.querySelector(".keyboard"),K=document.querySelectorAll(".btn"),S=document.querySelectorAll(".word"),E=document.querySelectorAll(".digit"),D=document.querySelector(".folder"),R=document.querySelectorAll("[data-texts]"),h=D.selectionStart,D.focus(),L.addEventListener("mousedown",(e=>{const t=e.target.closest(".btn");t&&(t.classList.add("active"),q(t))})),L.addEventListener("mouseup",(e=>{const t=e.target.closest(".btn");t&&(t.classList.remove("active"),"ShiftRight"!==t.getAttribute("data-key")&&"ShiftLeft"!==t.getAttribute("data-key")||I(),"AltRight"!==t.getAttribute("data-key")&&"AltLeft"!==t.getAttribute("data-key")||(v=!1))})),L.addEventListener("mouseout",(e=>{const t=e.target.closest(".btn");t&&(t.classList.remove("active"),A||"ShiftRight"!==t.getAttribute("data-key")&&"ShiftLeft"!==t.getAttribute("data-key")||I(),"AltRight"!==t.getAttribute("data-key")&&"AltLeft"!==t.getAttribute("data-key")||(v=!1))})),window.addEventListener("keydown",(e=>{K.forEach((t=>{e.code===t.getAttribute("data-key")&&(t.classList.add("active"),"ShiftRight"===t.getAttribute("data-key")||"ShiftLeft"===t.getAttribute("data-key")?(x&&q(t),x=!1):q(t))}))})),window.addEventListener("mousedown",(e=>{e.preventDefault(),D.setSelectionRange(h,h)})),D.addEventListener("keydown",(function(e){"F5"!==e.code&&"F12"!==e.code&&"ControlLeft"!==e.code&&(e.preventDefault(),this.focus())})),window.addEventListener("keyup",(e=>{K.forEach((t=>{e.code===t.getAttribute("data-key")&&(t.classList.remove("active"),"ShiftRight"!==t.getAttribute("data-key")&&"ShiftLeft"!==t.getAttribute("data-key")||(I(),document.querySelectorAll(".shift").forEach((e=>{e.classList.remove("active")})),x=!0),"AltRight"===t.getAttribute("data-key")&&(v=!1))}))}))};window.addEventListener("load",(function(){m=localStorage.getItem("lang")?localStorage.getItem("lang"):m;const e=document.createElement("div");e.classList.add("container"),C.appendChild(e);const t=document.createElement("h1");t.classList.add("title"),t.textContent=g[m].h1,t.setAttribute("data-texts","h1"),e.appendChild(t);const r=document.createElement("h2");r.classList.add("description"),r.textContent=g[m].h2,r.setAttribute("data-texts","h2"),e.appendChild(r);const n=document.createElement("textarea");n.classList.add("folder"),n.placeholder=g[m].placeholder,n.setAttribute("cols",90),n.focus(),e.appendChild(n);const o=document.createElement("div");o.classList.add("keyboard"),e.appendChild(o);const a=document.createElement("div");a.classList.add("row"),o.appendChild(a);const i=["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"];for(let e=0;e<14;e+=1){const t=document.createElement("div");if(t.setAttribute("data-key",i[e]),t.classList.add("btn"),t.textContent=f[m][i[e]].lower,13!==e&&0!==e){t.classList.add("digit");const r=document.createElement("div");r.classList.add("symbol"),r.textContent=f.en[i[e]].upper,t.appendChild(r)}13===e&&(t.classList.add("long"),t.classList.add("backspace")),0===e&&t.classList.add("word"),a.appendChild(t)}const l=document.createElement("div");l.classList.add("row"),o.appendChild(l);const p=["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete"];for(let e=0;e<15;e+=1){const t=document.createElement("div");t.setAttribute("data-key",p[e]),t.textContent=f[m][p[e]].lower,t.classList.add("btn"),0===e&&t.classList.add("shift"),e>0&&e<14&&t.classList.add("word"),l.appendChild(t)}const s=document.createElement("div");s.classList.add("row"),o.appendChild(s);const c=["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"];for(let e=0;e<13;e+=1){const t=document.createElement("div");t.setAttribute("data-key",c[e]),t.textContent=f[m][c[e]].lower,t.classList.add("btn"),0!==e&&12!==e||t.classList.add("long"),e>0&&e<12&&t.classList.add("word"),s.appendChild(t)}const d=document.createElement("div");d.classList.add("row"),o.appendChild(d);const u=["ShiftLeft","NumpadDivide","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Period","Comma","Slash","ArrowUp","ShiftRight"];for(let e=0;e<14;e+=1){const t=document.createElement("div");t.setAttribute("data-key",u[e]),t.textContent=f[m][u[e]].lower,t.classList.add("btn"),0!==e&&13!==e||t.classList.add("shift"),e>0&&e<12&&t.classList.add("word"),d.appendChild(t)}const w=document.createElement("div");w.classList.add("row"),o.appendChild(w);const y=["ControlLeft","OSLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"];for(let e=0;e<9;e+=1){const t=document.createElement("div");t.setAttribute("data-key",y[e]),t.textContent=f[m][y[e]].lower,t.classList.add("btn"),3===e&&t.classList.add("space"),w.appendChild(t)}M()}))})()})();