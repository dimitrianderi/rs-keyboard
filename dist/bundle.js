(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(81),n=r.n(o),a=r(645),l=r.n(a)()(n());l.push([e.id,".container {\n    width: 960px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    align-items: center;\n}\n\n.title {\n    text-align: center;\n    margin: 0;\n    padding: 0;\n    cursor: default;\n}\n\n.description {\n    text-align: center;\n    font-size: 15px;\n    color: gray;\n    cursor: default;\n}\n\n.folder {\n    resize: none;\n    width: 900px;\n    border: none;\n    outline: none;\n    border: 1px solid gray;\n    transition: all .2s ease;\n    height: 150px;\n    border-radius: 5px;\n    padding: 10px;\n    cursor: default;\n    font-size: 18px;\n    pointer-events: none;\n    user-select: none;\n    text-align: justify;\n    font-family: monospace;\n    word-break: break-all;\n}\n\n.folder:focus {\n    border: 1px solid black;\n}\n\n.keyboard {\n    margin-top: 25px;\n    width: 960px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.keyboard .row {\n    display: flex;\n    gap: 15px;\n}\n\n.keyboard .btn {\n    position: relative;\n    width: 50px;\n    height: 50px;\n    background: black;\n    border: 2px solid white;\n    box-shadow: 0 0 15px black;\n    border-radius: 10px;\n    cursor: pointer;\n    color: white;\n    font-size: 18px;\n    font-weight: 700;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Times New Roman', serif;\n    letter-spacing: 1px;\n}\n\n.keyboard .btn.active {\n    transform: scale(90%);\n    box-shadow: 0 0 5px black;\n}\n\n.keyboard .word,\n.keyboard .digit {\n    background: brown;\n}\n\n.keyboard .long {\n    width: 110px;\n}\n\n.keyboard .shift {\n    width: 70px;\n}\n\n.keyboard .space {\n    width: 460px;\n    background: brown;\n}\n\n.keyboard .btn:focus {\n    transform: scale(90%);\n}\n\n.symbol {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 5px;\n    font-size: 12px;\n}",""]);const i=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,o,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(o)for(var i=0;i<this.length;i++){var p=this[i][0];null!=p&&(l[p]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&l[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),r&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=r):c[2]=r),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===e){r=o;break}return r}function o(e,o){for(var a={},l=[],i=0;i<e.length;i++){var p=e[i],s=o.base?p[0]+o.base:p[0],c=a[s]||0,u="".concat(s," ").concat(c);a[s]=c+1;var d=r(u),w={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==d)t[d].references++,t[d].updater(w);else{var y=n(w,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:y,references:1})}l.push(u)}return l}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var a=o(e=e||[],n=n||{});return function(e){e=e||[];for(var l=0;l<a.length;l++){var i=r(a[l]);t[i].references--}for(var p=o(e,n),s=0;s<a.length;s++){var c=r(a[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=p}}},569:e=>{var t={};e.exports=function(e,r){var o=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e=r(379),t=r.n(e),o=r(795),n=r.n(o),a=r(569),l=r.n(a),i=r(565),p=r.n(i),s=r(216),c=r.n(s),u=r(589),d=r.n(u),w=r(426),y={};y.styleTagTransform=d(),y.setAttributes=p(),y.insert=l().bind(null,"head"),y.domAPI=n(),y.insertStyleElement=c(),t()(w.Z,y),w.Z&&w.Z.locals&&w.Z.locals,r.p;const g={en:{Backquote:{lower:"`",upper:"~"},Digit1:{lower:"1",upper:"!"},Digit2:{lower:"2",upper:"@"},Digit3:{lower:"3",upper:"#"},Digit4:{lower:"4",upper:"$"},Digit5:{lower:"5",upper:"%"},Digit6:{lower:"6",upper:"^"},Digit7:{lower:"7",upper:"&"},Digit8:{lower:"8",upper:"*"},Digit9:{lower:"9",upper:"("},Digit0:{lower:"0",upper:")"},Minus:{lower:"-",upper:"_"},Equal:{lower:"=",upper:"+"},KeyQ:{lower:"q",upper:"Q"},KeyW:{lower:"w",upper:"W"},KeyE:{lower:"e",upper:"E"},KeyR:{lower:"r",upper:"R"},KeyT:{lower:"t",upper:"T"},KeyY:{lower:"y",upper:"Y"},KeyU:{lower:"u",upper:"U"},KeyI:{lower:"i",upper:"I"},KeyO:{lower:"o",upper:"O"},KeyP:{lower:"p",upper:"P"},BracketLeft:{lower:"[",upper:"{"},BracketRight:{lower:"]",upper:"}"},Backslash:{lower:"\\",upper:"|"},KeyA:{lower:"a",upper:"A"},KeyS:{lower:"s",upper:"S"},KeyD:{lower:"d",upper:"D"},KeyF:{lower:"f",upper:"F"},KeyG:{lower:"g",upper:"G"},KeyH:{lower:"h",upper:"H"},KeyJ:{lower:"j",upper:"J"},KeyK:{lower:"k",upper:"K"},KeyL:{lower:"l",upper:"L"},Semicolon:{lower:";",upper:":"},Quote:{lower:"'",upper:'"'},NumpadDivide:{lower:"\\",upper:"\\"},KeyZ:{lower:"z",upper:"Z"},KeyX:{lower:"x",upper:"X"},KeyC:{lower:"c",upper:"C"},KeyV:{lower:"v",upper:"V"},KeyB:{lower:"b",upper:"B"},KeyN:{lower:"n",upper:"N"},KeyM:{lower:"m",upper:"M"},Period:{lower:".",upper:">"},Comma:{lower:",",upper:"<"},Slash:{lower:"/",upper:"?"},Backspace:{lower:"Backspace",upper:"Backspace"},Tab:{lower:"Tab",upper:"Tab"},Delete:{lower:"Del",upper:"Del"},CapsLock:{lower:"Caps Lock",upper:"Caps Lock"},Enter:{lower:"Enter",upper:"Enter"},ShiftLeft:{lower:"Shift",upper:"Shift"},ShiftRight:{lower:"Shift",upper:"Shift"},ArrowUp:{lower:"▲",upper:"▲"},ArrowLeft:{lower:"◄",upper:"◄"},ArrowDown:{lower:"▼",upper:"▼"},ArrowRight:{lower:"▶",upper:"▶"},ControlLeft:{lower:"Ctrl",upper:"Ctrl"},OSLeft:{lower:"Win",upper:"Win"},AltLeft:{lower:"Alt",upper:"Alt"},Space:{lower:"",upper:""},AltRight:{lower:"Alt",upper:"Alt"},ControlRight:{lower:"Ctrl",upper:"Ctrl"}},ru:{Backquote:{lower:"ё",upper:"Ё"},Digit1:{lower:"1",upper:"!"},Digit2:{lower:"2",upper:'"'},Digit3:{lower:"3",upper:"№"},Digit4:{lower:"4",upper:";"},Digit5:{lower:"5",upper:"%"},Digit6:{lower:"6",upper:":"},Digit7:{lower:"7",upper:"?"},Digit8:{lower:"8",upper:"*"},Digit9:{lower:"9",upper:"("},Digit0:{lower:"0",upper:")"},Minus:{lower:"-",upper:"_"},Equal:{lower:"=",upper:"+"},KeyQ:{lower:"й",upper:"Й"},KeyW:{lower:"ц",upper:"Ц"},KeyE:{lower:"у",upper:"У"},KeyR:{lower:"к",upper:"К"},KeyT:{lower:"е",upper:"Е"},KeyY:{lower:"н",upper:"Н"},KeyU:{lower:"г",upper:"Г"},KeyI:{lower:"ш",upper:"Ш"},KeyO:{lower:"щ",upper:"Щ"},KeyP:{lower:"з",upper:"З"},BracketLeft:{lower:"х",upper:"Х"},BracketRight:{lower:"ъ",upper:"Ъ"},Backslash:{lower:"\\",upper:"/"},KeyA:{lower:"ф",upper:"Ф"},KeyS:{lower:"ы",upper:"Ы"},KeyD:{lower:"в",upper:"В"},KeyF:{lower:"а",upper:"А"},KeyG:{lower:"п",upper:"П"},KeyH:{lower:"р",upper:"Р"},KeyJ:{lower:"о",upper:"О"},KeyK:{lower:"л",upper:"Л"},KeyL:{lower:"д",upper:"Д"},Semicolon:{lower:"ж",upper:"Ж"},Quote:{lower:"э",upper:"Э"},NumpadDivide:{lower:"\\",upper:"\\"},KeyZ:{lower:"я",upper:"Я"},KeyX:{lower:"ч",upper:"Ч"},KeyC:{lower:"с",upper:"С"},KeyV:{lower:"м",upper:"М"},KeyB:{lower:"и",upper:"И"},KeyN:{lower:"т",upper:"Т"},KeyM:{lower:"ь",upper:"Ь"},Period:{lower:"ю",upper:"Ю"},Comma:{lower:"б",upper:"Б"},Slash:{lower:".",upper:","},Backspace:{lower:"Backspace",upper:"Backspace"},Tab:{lower:"Tab",upper:"Tab"},Delete:{lower:"Del",upper:"Del"},CapsLock:{lower:"Caps Lock",upper:"Caps Lock"},Enter:{lower:"Enter",upper:"Enter"},ShiftLeft:{lower:"Shift",upper:"Shift"},ShiftRight:{lower:"Shift",upper:"Shift"},ArrowUp:{lower:"▲",upper:"▲"},ArrowLeft:{lower:"◄",upper:"◄"},ArrowDown:{lower:"▼",upper:"▼"},ArrowRight:{lower:"▶",upper:"▶"},ControlLeft:{lower:"Ctrl",upper:"Ctrl"},OSLeft:{lower:"Win",upper:"Win"},AltLeft:{lower:"Alt",upper:"Alt"},Space:{lower:"",upper:""},AltRight:{lower:"Alt",upper:"Alt"},ControlRight:{lower:"Ctrl",upper:"Ctrl"}}},h={en:{h1:"RS Virtual Keyboard",h2:"to switch between keyboard layouts, press Alt+Shift (OS Windows)",placeholder:"Enter your text"},ru:{h1:'Приложение "Виртуальная клавиатура"',h2:"для смены языковой раскладки нажмите клавиши Альт+Шифт (приложение реализовано на ОС Виндовс)",placeholder:"Пожалуйста, введите Ваш текст"}};let f="",b="en",m=0,k=!0,A=!0,v=!0,L=!1;const K=document.querySelector("body");let x,C,S,E,D,R;const T="абвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz",B=()=>{b="ru"===b?"en":"ru",S.forEach((e=>{e.textContent=k?g[b][e.getAttribute("data-key")].lower:g[b][e.getAttribute("data-key")].upper})),E.forEach((e=>{e.lastChild.textContent=g[b][e.getAttribute("data-key")].upper})),R.forEach((e=>{const t=e;f.length||(D.placeholder=h[b].placeholder),t.textContent=h[b][e.getAttribute("data-texts")]})),localStorage.setItem("lang",b)},q=()=>{f.length&&(D.placeholder=h[b].placeholder);const e=f.length?f.slice(0,m)+"|"+f.slice(m,f.length):"";D.textContent=e},M=()=>{A=!A,S.forEach((e=>{const t=e,r=g[b][e.getAttribute("data-key")];if(T.split("").includes(t.textContent.toLowerCase())){const e=k?"lower":"upper",o=k?"upper":"lower";t.textContent=A?r[e]:r[o]}else t.textContent=A?r.lower:r.upper})),L&&!A&&B(),q()},I=()=>{L=!L,L&&!A&&B()},N=e=>{e.classList.contains("word")&&(e=>{const t=f.slice(0,m),r=f.slice(m,f.length);f=T.split("").includes(e.textContent.toLowerCase())?A&&k||!A&&!k?t+g[b][e.getAttribute("data-key")].lower+r:t+g[b][e.getAttribute("data-key")].upper+r:A?t+g[b][e.getAttribute("data-key")].lower+r:t+g[b][e.getAttribute("data-key")].upper+r,m+=1,q()})(e),e.classList.contains("digit")&&(e=>{const t=f.slice(0,m),r=f.slice(m,f.length);f=A?t+g[b][e.getAttribute("data-key")].lower+r:t+g[b][e.getAttribute("data-key")].upper+r,m+=1,q()})(e),e.classList.contains("backspace")&&(m>0&&(f=f.slice(0,m-1)+f.slice(m,f.length)),m=m>0?m-1:0,q()),"Space"===e.getAttribute("data-key")&&(f=`${f.slice(0,m)} ${f.slice(m,f.length)}`,m+=1,q()),"Enter"===e.getAttribute("data-key")&&(f=`${f.slice(0,m)}\n${f.slice(m,f.length)}`,m+=1,q()),"CapsLock"===e.getAttribute("data-key")&&(k=!k,S.forEach((e=>{const t=e;T.split("").includes(t.textContent.toLowerCase())&&(t.textContent=k?g[b][e.getAttribute("data-key")].lower:g[b][e.getAttribute("data-key")].upper)}))),"Tab"===e.getAttribute("data-key")&&(f=`${f.slice(0,m)}\t${f.slice(m,f.length)}`,m+=1,q()),"ShiftLeft"!==e.getAttribute("data-key")&&"ShiftRight"!==e.getAttribute("data-key")||M(),"AltLeft"!==e.getAttribute("data-key")&&"AltRight"!==e.getAttribute("data-key")||I(),"ArrowLeft"===e.getAttribute("data-key")&&(m=m>0?m-1:0,q()),"ArrowRight"===e.getAttribute("data-key")&&(m=m<f.length?m+1:f.length,q()),"ArrowUp"===e.getAttribute("data-key")&&(m=m-85>0?m-85:0,q()),"ArrowDown"===e.getAttribute("data-key")&&(m=f.length>m+85?m+85:f.length,q()),"Delete"===e.getAttribute("data-key")&&(m<f.length&&(f=f.slice(0,m)+f.slice(m+1,f.length)),q())};window.addEventListener("load",(function(){b=localStorage.getItem("lang")?localStorage.getItem("lang"):b;const e=document.createElement("div");e.classList.add("container"),K.appendChild(e);const t=document.createElement("h1");t.classList.add("title"),t.textContent=h[b].h1,t.setAttribute("data-texts","h1"),e.appendChild(t);const r=document.createElement("h2");r.classList.add("description"),r.textContent=h[b].h2,r.setAttribute("data-texts","h2"),e.appendChild(r);const o=document.createElement("textarea");o.classList.add("folder"),o.placeholder=h[b].placeholder,o.setAttribute("readonly",!0),o.setAttribute("cols",90),e.appendChild(o);const n=document.createElement("div");n.classList.add("keyboard"),e.appendChild(n);const a=document.createElement("div");a.classList.add("row"),n.appendChild(a);const l=["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"];for(let e=0;e<14;e+=1){const t=document.createElement("div");if(t.setAttribute("data-key",l[e]),t.classList.add("btn"),t.textContent=g[b][l[e]].lower,13!==e&&0!==e){t.classList.add("digit");const r=document.createElement("div");r.classList.add("symbol"),r.textContent=g.en[l[e]].upper,t.appendChild(r)}13===e&&(t.classList.add("long"),t.classList.add("backspace")),0===e&&t.classList.add("word"),a.appendChild(t)}const i=document.createElement("div");i.classList.add("row"),n.appendChild(i);const p=["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete"];for(let e=0;e<15;e+=1){const t=document.createElement("div");t.setAttribute("data-key",p[e]),t.textContent=g[b][p[e]].lower,t.classList.add("btn"),0===e&&t.classList.add("shift"),e>0&&e<14&&t.classList.add("word"),i.appendChild(t)}const s=document.createElement("div");s.classList.add("row"),n.appendChild(s);const c=["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"];for(let e=0;e<13;e+=1){const t=document.createElement("div");t.setAttribute("data-key",c[e]),t.textContent=g[b][c[e]].lower,t.classList.add("btn"),0!==e&&12!==e||t.classList.add("long"),e>0&&e<12&&t.classList.add("word"),s.appendChild(t)}const u=document.createElement("div");u.classList.add("row"),n.appendChild(u);const d=["ShiftLeft","NumpadDivide","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Period","Comma","Slash","ArrowUp","ShiftRight"];for(let e=0;e<14;e+=1){const t=document.createElement("div");t.setAttribute("data-key",d[e]),t.textContent=g[b][d[e]].lower,t.classList.add("btn"),0!==e&&13!==e||t.classList.add("shift"),e>0&&e<12&&t.classList.add("word"),u.appendChild(t)}const w=document.createElement("div");w.classList.add("row"),n.appendChild(w);const y=["ControlLeft","OSLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"];for(let e=0;e<9;e+=1){const t=document.createElement("div");t.setAttribute("data-key",y[e]),t.textContent=g[b][y[e]].lower,t.classList.add("btn"),3===e&&t.classList.add("space"),w.appendChild(t)}x=document.querySelector(".keyboard"),C=document.querySelectorAll(".btn"),S=document.querySelectorAll(".word"),E=document.querySelectorAll(".digit"),D=document.querySelector(".folder"),R=document.querySelectorAll("[data-texts]"),x.addEventListener("mousedown",(e=>{const t=e.target.closest(".btn");t&&(t.classList.add("active"),N(t))})),x.addEventListener("mouseup",(e=>{const t=e.target.closest(".btn");t&&(t.classList.remove("active"),"ShiftRight"!==t.getAttribute("data-key")&&"ShiftLeft"!==t.getAttribute("data-key")||M())})),x.addEventListener("mouseout",(e=>{const t=e.target.closest(".btn");t&&(t.classList.remove("active"),A||"ShiftRight"!==t.getAttribute("data-key")&&"ShiftLeft"!==t.getAttribute("data-key")||M())})),window.addEventListener("keydown",(e=>{C.forEach((t=>{e.code===t.getAttribute("data-key")&&(t.classList.add("active"),"ShiftRight"===t.getAttribute("data-key")||"ShiftLeft"===t.getAttribute("data-key")?(v&&N(t),v=!1):N(t))}))})),window.addEventListener("keyup",(e=>{C.forEach((t=>{e.code===t.getAttribute("data-key")&&(t.classList.remove("active"),"ShiftRight"!==t.getAttribute("data-key")&&"ShiftLeft"!==t.getAttribute("data-key")||(M(),v=!0),"AltRight"!==t.getAttribute("data-key")&&"AltLeft"!==t.getAttribute("data-key")||I())}))}))}))})()})();