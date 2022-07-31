const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let text = [];
    let st = [];
      for (let i = 0; i < expr.length/10; i++) {
        st[i]=expr.substr(i*10,10);
      };
      for (let i = 0; i < st.length; i++) {
        if (st[i] == `**********`) {
          text[i]= ' ';
        } else {
           let j = st[i].indexOf('1'); 
            const transl =(a)=> {
              if (j < a.length) {
                if (a.substr(j,2) == 10) {
                  j = j + 2;
                  return '.' + transl(a);
                  } else {
                  j = j + 2;
                  return  '-' + transl(a);
                  }
              } return '';
            };
          text[i] = MORSE_TABLE[transl(st[i])];
          }
        }
      
        return text.join('');
  };
  
module.exports = {
    decode
}