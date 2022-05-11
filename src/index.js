import './style.css';
import './favicon.ico';

const key = {
  en: {
    Backquote: {
      lower: '`',
      upper: '~',
    },
    Digit1: {
      lower: '1',
      upper: '!',
    },
    Digit2: {
      lower: '2',
      upper: '@',
    },
    Digit3: {
      lower: '3',
      upper: '#',
    },
    Digit4: {
      lower: '4',
      upper: '$',
    },
    Digit5: {
      lower: '5',
      upper: '%',
    },
    Digit6: {
      lower: '6',
      upper: '^',
    },
    Digit7: {
      lower: '7',
      upper: '&',
    },
    Digit8: {
      lower: '8',
      upper: '*',
    },
    Digit9: {
      lower: '9',
      upper: '(',
    },
    Digit0: {
      lower: '0',
      upper: ')',
    },
    Minus: {
      lower: '-',
      upper: '_',
    },
    Equal: {
      lower: '=',
      upper: '+',
    },
    KeyQ: {
      lower: 'q',
      upper: 'Q',
    },
    KeyW: {
      lower: 'w',
      upper: 'W',
    },
    KeyE: {
      lower: 'e',
      upper: 'E',
    },
    KeyR: {
      lower: 'r',
      upper: 'R',
    },
    KeyT: {
      lower: 't',
      upper: 'T',
    },
    KeyY: {
      lower: 'y',
      upper: 'Y',
    },
    KeyU: {
      lower: 'u',
      upper: 'U',
    },
    KeyI: {
      lower: 'i',
      upper: 'I',
    },
    KeyO: {
      lower: 'o',
      upper: 'O',
    },
    KeyP: {
      lower: 'p',
      upper: 'P',
    },
    BracketLeft: {
      lower: '[',
      upper: '{',
    },
    BracketRight: {
      lower: ']',
      upper: '}',
    },
    Backslash: {
      lower: '\\',
      upper: '|',
    },
    KeyA: {
      lower: 'a',
      upper: 'A',
    },
    KeyS: {
      lower: 's',
      upper: 'S',
    },
    KeyD: {
      lower: 'd',
      upper: 'D',
    },
    KeyF: {
      lower: 'f',
      upper: 'F',
    },
    KeyG: {
      lower: 'g',
      upper: 'G',
    },
    KeyH: {
      lower: 'h',
      upper: 'H',
    },
    KeyJ: {
      lower: 'j',
      upper: 'J',
    },
    KeyK: {
      lower: 'k',
      upper: 'K',
    },
    KeyL: {
      lower: 'l',
      upper: 'L',
    },
    Semicolon: {
      lower: ';',
      upper: ':',
    },
    Quote: {
      lower: "'",
      upper: '"',
    },
    NumpadDivide: {
      lower: '\\',
      upper: '\\',
    },
    KeyZ: {
      lower: 'z',
      upper: 'Z',
    },
    KeyX: {
      lower: 'x',
      upper: 'X',
    },
    KeyC: {
      lower: 'c',
      upper: 'C',
    },
    KeyV: {
      lower: 'v',
      upper: 'V',
    },
    KeyB: {
      lower: 'b',
      upper: 'B',
    },
    KeyN: {
      lower: 'n',
      upper: 'N',
    },
    KeyM: {
      lower: 'm',
      upper: 'M',
    },
    Period: {
      lower: '.',
      upper: '>',
    },
    Comma: {
      lower: ',',
      upper: '<',
    },
    Slash: {
      lower: '/',
      upper: '?',
    },
    Backspace: {
      lower: 'Backspace',
      upper: 'Backspace',
    },
    Tab: {
      lower: 'Tab',
      upper: 'Tab',
    },
    Delete: {
      lower: 'Del',
      upper: 'Del',
    },
    CapsLock: {
      lower: 'Caps Lock',
      upper: 'Caps Lock',
    },
    Enter: {
      lower: 'Enter',
      upper: 'Enter',
    },
    ShiftLeft: {
      lower: 'Shift',
      upper: 'Shift',
    },
    ShiftRight: {
      lower: 'Shift',
      upper: 'Shift',
    },
    ArrowUp: {
      lower: '\u25B2',
      upper: '\u25B2',
    },
    ArrowLeft: {
      lower: '\u25C4',
      upper: '\u25C4',
    },
    ArrowDown: {
      lower: '\u25BC',
      upper: '\u25BC',
    },
    ArrowRight: {
      lower: '\u25B6',
      upper: '\u25B6',
    },
    ControlLeft: {
      lower: 'Ctrl',
      upper: 'Ctrl',
    },
    OSLeft: {
      lower: 'Win',
      upper: 'Win',
    },
    AltLeft: {
      lower: 'Alt',
      upper: 'Alt',
    },
    Space: {
      lower: '',
      upper: '',
    },
    AltRight: {
      lower: 'Alt',
      upper: 'Alt',
    },
    ControlRight: {
      lower: 'Ctrl',
      upper: 'Ctrl',
    },
  },
  ru: {
    Backquote: {
      lower: 'ё',
      upper: 'Ё',
    },
    Digit1: {
      lower: '1',
      upper: '!',
    },
    Digit2: {
      lower: '2',
      upper: '"',
    },
    Digit3: {
      lower: '3',
      upper: '№',
    },
    Digit4: {
      lower: '4',
      upper: ';',
    },
    Digit5: {
      lower: '5',
      upper: '%',
    },
    Digit6: {
      lower: '6',
      upper: ':',
    },
    Digit7: {
      lower: '7',
      upper: '?',
    },
    Digit8: {
      lower: '8',
      upper: '*',
    },
    Digit9: {
      lower: '9',
      upper: '(',
    },
    Digit0: {
      lower: '0',
      upper: ')',
    },
    Minus: {
      lower: '-',
      upper: '_',
    },
    Equal: {
      lower: '=',
      upper: '+',
    },
    KeyQ: {
      lower: 'й',
      upper: 'Й',
    },
    KeyW: {
      lower: 'ц',
      upper: 'Ц',
    },
    KeyE: {
      lower: 'у',
      upper: 'У',
    },
    KeyR: {
      lower: 'к',
      upper: 'К',
    },
    KeyT: {
      lower: 'е',
      upper: 'Е',
    },
    KeyY: {
      lower: 'н',
      upper: 'Н',
    },
    KeyU: {
      lower: 'г',
      upper: 'Г',
    },
    KeyI: {
      lower: 'ш',
      upper: 'Ш',
    },
    KeyO: {
      lower: 'щ',
      upper: 'Щ',
    },
    KeyP: {
      lower: 'з',
      upper: 'З',
    },
    BracketLeft: {
      lower: 'х',
      upper: 'Х',
    },
    BracketRight: {
      lower: 'ъ',
      upper: 'Ъ',
    },
    Backslash: {
      lower: '\\',
      upper: '/',
    },
    KeyA: {
      lower: 'ф',
      upper: 'Ф',
    },
    KeyS: {
      lower: 'ы',
      upper: 'Ы',
    },
    KeyD: {
      lower: 'в',
      upper: 'В',
    },
    KeyF: {
      lower: 'а',
      upper: 'А',
    },
    KeyG: {
      lower: 'п',
      upper: 'П',
    },
    KeyH: {
      lower: 'р',
      upper: 'Р',
    },
    KeyJ: {
      lower: 'о',
      upper: 'О',
    },
    KeyK: {
      lower: 'л',
      upper: 'Л',
    },
    KeyL: {
      lower: 'д',
      upper: 'Д',
    },
    Semicolon: {
      lower: 'ж',
      upper: 'Ж',
    },
    Quote: {
      lower: 'э',
      upper: 'Э',
    },
    NumpadDivide: {
      lower: '\\',
      upper: '\\',
    },
    KeyZ: {
      lower: 'я',
      upper: 'Я',
    },
    KeyX: {
      lower: 'ч',
      upper: 'Ч',
    },
    KeyC: {
      lower: 'с',
      upper: 'С',
    },
    KeyV: {
      lower: 'м',
      upper: 'М',
    },
    KeyB: {
      lower: 'и',
      upper: 'И',
    },
    KeyN: {
      lower: 'т',
      upper: 'Т',
    },
    KeyM: {
      lower: 'ь',
      upper: 'Ь',
    },
    Period: {
      lower: 'ю',
      upper: 'Ю',
    },
    Comma: {
      lower: 'б',
      upper: 'Б',
    },
    Slash: {
      lower: '.',
      upper: ',',
    },
    Backspace: {
      lower: 'Backspace',
      upper: 'Backspace',
    },
    Tab: {
      lower: 'Tab',
      upper: 'Tab',
    },
    Delete: {
      lower: 'Del',
      upper: 'Del',
    },
    CapsLock: {
      lower: 'Caps Lock',
      upper: 'Caps Lock',
    },
    Enter: {
      lower: 'Enter',
      upper: 'Enter',
    },
    ShiftLeft: {
      lower: 'Shift',
      upper: 'Shift',
    },
    ShiftRight: {
      lower: 'Shift',
      upper: 'Shift',
    },
    ArrowUp: {
      lower: '\u25B2',
      upper: '\u25B2',
    },
    ArrowLeft: {
      lower: '\u25C4',
      upper: '\u25C4',
    },
    ArrowDown: {
      lower: '\u25BC',
      upper: '\u25BC',
    },
    ArrowRight: {
      lower: '\u25B6',
      upper: '\u25B6',
    },
    ControlLeft: {
      lower: 'Ctrl',
      upper: 'Ctrl',
    },
    OSLeft: {
      lower: 'Win',
      upper: 'Win',
    },
    AltLeft: {
      lower: 'Alt',
      upper: 'Alt',
    },
    Space: {
      lower: '',
      upper: '',
    },
    AltRight: {
      lower: 'Alt',
      upper: 'Alt',
    },
    ControlRight: {
      lower: 'Ctrl',
      upper: 'Ctrl',
    },
  },
};

const texts = {
  en: {
    h1: 'RS Virtual Keyboard',
    h2: 'to switch between keyboard layouts, press Alt+Shift (OS Windows)',
    placeholder: 'Enter your text',
  },
  ru: {
    h1: 'Приложение "Виртуальная клавиатура"',
    h2: 'для смены языковой раскладки нажмите клавиши Альт+Шифт (приложение реализовано на ОС Виндовс)',
    placeholder: 'Пожалуйста, введите Ваш текст',
  },
};

let text = '';
let lang = 'en';
let ind;
let islower = true;
let isNoShift = true;
let repeat = true;
let isAlt = false;
const BODY = document.querySelector('body');
let KEYBOARD; let BTN; let words; let digits; let FOLDER; let titles;
const ALPHABET = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz';

const changeLanguage = () => {
  words.forEach((el) => {
    const NAME = el;
    NAME.textContent = (islower) ? key[lang][el.getAttribute('data-key')].lower : key[lang][el.getAttribute('data-key')].upper;
  });

  digits.forEach((el) => {
    const NAME = el.lastChild;
    NAME.textContent = key[lang][el.getAttribute('data-key')].upper;
  });

  titles.forEach((el) => {
    const NAME = el;
    if (!text.length) FOLDER.placeholder = texts[lang].placeholder;
    NAME.textContent = texts[lang][el.getAttribute('data-texts')];
  });

  localStorage.setItem('lang', lang);
};

const translate = () => {
  lang = (lang === 'ru') ? 'en' : 'ru';
  changeLanguage(lang);
};

const updateKeyboard = () => {
  if (text.length) FOLDER.placeholder = texts[lang].placeholder;
  FOLDER.textContent = text;
  FOLDER.focus();
  FOLDER.setSelectionRange(ind, ind);
};

const wordBTN = (button) => {
  const firstChapt = text.slice(0, ind);
  const secontChapt = text.slice(ind, text.length);
  if (ALPHABET.split('').includes(button.textContent.toLowerCase())) {
    text = ((isNoShift && islower) || (!isNoShift && !islower)) ? firstChapt + key[lang][button.getAttribute('data-key')].lower + secontChapt : firstChapt + key[lang][button.getAttribute('data-key')].upper + secontChapt;
  } else {
    text = (isNoShift) ? firstChapt + key[lang][button.getAttribute('data-key')].lower + secontChapt : firstChapt + key[lang][button.getAttribute('data-key')].upper + secontChapt;
  }
  ind += 1;
  updateKeyboard();
};

const spaceBTN = () => {
  text = `${text.slice(0, ind)} ${text.slice(ind, text.length)}`;
  ind += 1;
  updateKeyboard();
};

const tabBTN = () => {
  text = `${text.slice(0, ind)}\t${text.slice(ind, text.length)}`;
  ind += 1;
  updateKeyboard();
};

const digitBTN = (button) => {
  const firstChapt = text.slice(0, ind);
  const secontChapt = text.slice(ind, text.length);
  text = (isNoShift) ? firstChapt + key[lang][button.getAttribute('data-key')].lower + secontChapt : firstChapt + key[lang][button.getAttribute('data-key')].upper + secontChapt;
  ind += 1;
  updateKeyboard();
};

const backspaceBTN = () => {
  if (ind > 0) text = text.slice(0, ind - 1) + text.slice(ind, text.length);
  ind = (ind > 0) ? ind - 1 : 0;
  updateKeyboard();
};

const deleteBTN = () => {
  if (ind < text.length) text = text.slice(0, ind) + text.slice(ind + 1, text.length);
  updateKeyboard();
};

const enterBTN = () => {
  text = `${text.slice(0, ind)}\n${text.slice(ind, text.length)}`;
  ind += 1;
  updateKeyboard();
};

const capsBTN = () => {
  islower = !islower;
  words.forEach((el) => {
    const NAME = el;
    if (ALPHABET.split('').includes(NAME.textContent.toLowerCase())) {
      NAME.textContent = (islower) ? key[lang][el.getAttribute('data-key')].lower : key[lang][el.getAttribute('data-key')].upper;
    }
  });
};

const shiftBTN = () => {
  isNoShift = !isNoShift;
  words.forEach((el) => {
    const NAME = el;
    const keyShift = key[lang][el.getAttribute('data-key')];
    if (ALPHABET.split('').includes(NAME.textContent.toLowerCase())) {
      const lower = (islower) ? 'lower' : 'upper';
      const upper = (islower) ? 'upper' : 'lower';
      NAME.textContent = (isNoShift) ? keyShift[lower] : keyShift[upper];
    } else {
      NAME.textContent = (isNoShift) ? keyShift.lower : keyShift.upper;
    }
  });
  if (isAlt && !isNoShift) translate();
};

const altBTN = () => {
  isAlt = true;
  if (isAlt && !isNoShift) translate();
};

const arrowLeftBTN = () => {
  if (ind) {
    FOLDER.selectionEnd = ind - 1;
    FOLDER.selectionStart = ind - 1;
  }
  ind = FOLDER.selectionStart;
  FOLDER.setSelectionRange(ind, ind);
};

const arrowRightBTN = () => {
  if (ind < text.length) {
    FOLDER.selectionEnd = ind + 1;
    FOLDER.selectionStart = ind + 1;
  }
  ind = FOLDER.selectionStart;
  FOLDER.setSelectionRange(ind, ind);
};

const arrowDownBTN = () => {
  if ((FOLDER.textContent.indexOf('\n', FOLDER.selectionEnd) - FOLDER.selectionEnd) > 92 || (FOLDER.textContent.indexOf('\n', FOLDER.selectionEnd) - FOLDER.selectionEnd) < 0) {
    FOLDER.selectionEnd += 92;
    FOLDER.selectionStart += 92;
  } else {
    const lastN = (FOLDER.textContent[FOLDER.selectionEnd] === '\n')
      ? FOLDER.textContent.lastIndexOf('\n', FOLDER.selectionEnd - 1)
      : FOLDER.textContent.lastIndexOf('\n', FOLDER.selectionEnd);

    const currentIndexCursorInRow = (lastN > 0)
      ? FOLDER.selectionEnd - lastN
      : FOLDER.selectionEnd + 1;

    const nextN = FOLDER.textContent.indexOf('\n', FOLDER.selectionEnd);

    let lengthOfDownRow;

    if (nextN > 0) {
      lengthOfDownRow = (FOLDER.textContent.indexOf('\n', nextN + 1) > 0)
        ? FOLDER.textContent.indexOf('\n', nextN + 1) - nextN
        : FOLDER.textContent.length;

      if (currentIndexCursorInRow > lengthOfDownRow) {
        FOLDER.selectionEnd = lengthOfDownRow;
        FOLDER.selectionStart = lengthOfDownRow;
      } else {
        FOLDER.selectionEnd = currentIndexCursorInRow + nextN;
        FOLDER.selectionStart = currentIndexCursorInRow + nextN;
      }
    }
  }

  ind = FOLDER.selectionStart;
};

const arrowUpBTN = () => {
  if ((FOLDER.selectionEnd - FOLDER.textContent.lastIndexOf('\n', FOLDER.selectionEnd)) > 92) {
    FOLDER.selectionEnd -= 92;
  } else {
    const lastN = (FOLDER.textContent[FOLDER.selectionEnd] === '\n')
      ? FOLDER.textContent.lastIndexOf('\n', FOLDER.selectionEnd - 1)
      : FOLDER.textContent.lastIndexOf('\n', FOLDER.selectionEnd);

    const currentIndexCursorInRow = (lastN > 0)
      ? FOLDER.selectionEnd - lastN
      : FOLDER.selectionEnd + 1;

    let lengthOfUpRow;

    if (lastN > 0) {
      lengthOfUpRow = (FOLDER.textContent.lastIndexOf('\n', lastN - 1) > 0)
        ? (lastN - FOLDER.textContent.lastIndexOf('\n', lastN - 1))
        : lastN + 1;

      if (currentIndexCursorInRow > lengthOfUpRow) {
        FOLDER.selectionEnd = lastN;
        FOLDER.selectionStart = lastN;
      } else {
        FOLDER.selectionEnd = (lastN - (lengthOfUpRow - currentIndexCursorInRow));
        FOLDER.selectionStart = (lastN - (lengthOfUpRow - currentIndexCursorInRow));
      }
    }
  }

  ind = FOLDER.selectionStart;
};

const checkBTN = (button) => {
  if (button.classList.contains('word')) wordBTN(button);
  if (button.classList.contains('digit')) digitBTN(button);
  if (button.classList.contains('backspace')) backspaceBTN();
  if (button.getAttribute('data-key') === 'Space') spaceBTN();
  if (button.getAttribute('data-key') === 'Enter') enterBTN();
  if (button.getAttribute('data-key') === 'CapsLock') capsBTN();
  if (button.getAttribute('data-key') === 'Tab') tabBTN();
  if (button.getAttribute('data-key') === 'ShiftLeft' || button.getAttribute('data-key') === 'ShiftRight') shiftBTN();
  if (button.getAttribute('data-key') === 'AltLeft' || button.getAttribute('data-key') === 'AltRight') altBTN();
  if (button.getAttribute('data-key') === 'ArrowLeft') arrowLeftBTN();
  if (button.getAttribute('data-key') === 'ArrowRight') arrowRightBTN();
  if (button.getAttribute('data-key') === 'ArrowUp') arrowUpBTN();
  if (button.getAttribute('data-key') === 'ArrowDown') arrowDownBTN();
  if (button.getAttribute('data-key') === 'Delete') deleteBTN();
};

const declaration = () => {
  KEYBOARD = document.querySelector('.keyboard');
  BTN = document.querySelectorAll('.btn');
  words = document.querySelectorAll('.word');
  digits = document.querySelectorAll('.digit');
  FOLDER = document.querySelector('.folder');
  titles = document.querySelectorAll('[data-texts]');
  ind = FOLDER.selectionStart;

  FOLDER.focus();

  KEYBOARD.addEventListener('mousedown', (e) => {
    const button = e.target.closest('.btn');
    if (!button) return;
    button.classList.add('active');
    checkBTN(button);
  });

  KEYBOARD.addEventListener('mouseup', (e) => {
    const button = e.target.closest('.btn');
    if (!button) return;
    button.classList.remove('active');
    if (button.getAttribute('data-key') === 'ShiftRight' || button.getAttribute('data-key') === 'ShiftLeft') shiftBTN();
    if (button.getAttribute('data-key') === 'AltRight' || button.getAttribute('data-key') === 'AltLeft') isAlt = false;
  });

  KEYBOARD.addEventListener('mouseout', (e) => {
    const button = e.target.closest('.btn');
    if (!button) return;
    button.classList.remove('active');
    if (!isNoShift && (button.getAttribute('data-key') === 'ShiftRight' || button.getAttribute('data-key') === 'ShiftLeft')) shiftBTN();
    if (button.getAttribute('data-key') === 'AltRight' || button.getAttribute('data-key') === 'AltLeft') isAlt = false;
  });

  window.addEventListener('keydown', (e) => {
    BTN.forEach((el) => {
      if (e.code === el.getAttribute('data-key')) {
        el.classList.add('active');
        if (el.getAttribute('data-key') === 'ShiftRight' || el.getAttribute('data-key') === 'ShiftLeft') {
          if (repeat) checkBTN(el);
          repeat = false;
        } else {
          checkBTN(el);
        }
      }
    });
  });

  window.addEventListener('mousedown', (e) => {
    e.preventDefault();
    FOLDER.setSelectionRange(ind, ind);
  });

  FOLDER.addEventListener('keydown', function pushKeyDown(e) {
    if (!(e.code === 'F5'
      || e.code === 'F12'
      || e.code === 'ControlLeft'
      || e.code === 'CapsLock')) {
      e.preventDefault();
      this.focus();
    }
  });

  window.addEventListener('keyup', (e) => {
    BTN.forEach((el) => {
      if (e.code === el.getAttribute('data-key')) {
        el.classList.remove('active');
        if (el.getAttribute('data-key') === 'ShiftRight' || el.getAttribute('data-key') === 'ShiftLeft') {
          shiftBTN();
          document.querySelectorAll('.shift').forEach((element) => {
            const NAME = element;
            NAME.classList.remove('active');
          });
          repeat = true;
        }
        if (el.getAttribute('data-key') === 'AltRight' || el.getAttribute('data-key') === 'AltLeft') isAlt = false;
      }
    });
  });
};

function generateKetboard() {
  lang = (localStorage.getItem('lang')) ? localStorage.getItem('lang') : lang;
  const container = document.createElement('div');
  container.classList.add('container');
  BODY.appendChild(container);

  const h1 = document.createElement('h1');
  h1.classList.add('title');
  h1.textContent = texts[lang].h1;
  h1.setAttribute('data-texts', 'h1');
  container.appendChild(h1);

  const h2 = document.createElement('h2');
  h2.classList.add('description');
  h2.textContent = texts[lang].h2;
  h2.setAttribute('data-texts', 'h2');
  container.appendChild(h2);

  const textarea = document.createElement('textarea');
  textarea.classList.add('folder');
  textarea.placeholder = texts[lang].placeholder;

  textarea.setAttribute('cols', 90);
  // textarea.setAttribute('readonly', '');
  textarea.focus();
  container.appendChild(textarea);

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  container.appendChild(keyboard);

  const row1 = document.createElement('div');
  row1.classList.add('row');
  keyboard.appendChild(row1);

  const arr1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
  for (let i = 0; i < 14; i += 1) {
    const div = document.createElement('div');
    div.setAttribute('data-key', arr1[i]);
    div.classList.add('btn');
    div.textContent = key[lang][arr1[i]].lower;
    if (i !== 13 && i !== 0) {
      div.classList.add('digit');
      const span = document.createElement('div');
      span.classList.add('symbol');
      span.textContent = key.en[arr1[i]].upper;
      div.appendChild(span);
    }
    if (i === 13) {
      div.classList.add('long');
      div.classList.add('backspace');
    }
    if (i === 0) div.classList.add('word');
    row1.appendChild(div);
  }

  const row2 = document.createElement('div');
  row2.classList.add('row');
  keyboard.appendChild(row2);

  const arr2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
  for (let i = 0; i < 15; i += 1) {
    const div = document.createElement('div');
    div.setAttribute('data-key', arr2[i]);
    div.textContent = key[lang][arr2[i]].lower;
    div.classList.add('btn');
    if (i === 0) div.classList.add('shift');
    if (i > 0 && i < 14) div.classList.add('word');
    row2.appendChild(div);
  }

  const row3 = document.createElement('div');
  row3.classList.add('row');
  keyboard.appendChild(row3);

  const arr3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
  for (let i = 0; i < 13; i += 1) {
    const div = document.createElement('div');
    div.setAttribute('data-key', arr3[i]);
    div.textContent = key[lang][arr3[i]].lower;
    div.classList.add('btn');
    if (i === 0 || i === 12) div.classList.add('long');
    if (i > 0 && i < 12) div.classList.add('word');
    row3.appendChild(div);
  }

  const row4 = document.createElement('div');
  row4.classList.add('row');
  keyboard.appendChild(row4);

  const arr4 = ['ShiftLeft', 'NumpadDivide', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Period', 'Comma', 'Slash', 'ArrowUp', 'ShiftRight'];
  for (let i = 0; i < 14; i += 1) {
    const div = document.createElement('div');
    div.setAttribute('data-key', arr4[i]);
    div.textContent = key[lang][arr4[i]].lower;
    div.classList.add('btn');
    if (i === 0 || i === 13) div.classList.add('shift');
    if (i > 0 && i < 12) div.classList.add('word');
    row4.appendChild(div);
  }

  const row5 = document.createElement('div');
  row5.classList.add('row');
  keyboard.appendChild(row5);

  const arr5 = ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
  for (let i = 0; i < 9; i += 1) {
    const div = document.createElement('div');
    div.setAttribute('data-key', arr5[i]);
    div.textContent = key[lang][arr5[i]].lower;
    div.classList.add('btn');
    if (i === 3) div.classList.add('space');
    row5.appendChild(div);
  }

  declaration();
}

window.addEventListener('load', generateKetboard);
