const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    for(let i1 = 0;expr.length % 10 !== 0;i1++){
        expr += '0'
    }
    let str = "";
    for(let i = 0;i < expr.length;i+=2){
        if(expr[i] === '1'&&expr[i+1]==='0')
        {
            str +='.';
        }
        if(expr[i] === '1'&&expr[i+1]==='1'){
            str += '-';
        }
        if(expr[i] === '*'&&expr[i+1]==='*'&&expr[i+2]==='*'&&expr[i+3]==='*'&&expr[i+4]==='*'&&expr[i+5]==='*'&&expr[i+6]==='*'&&expr[i+7]==='*'&&expr[i+8]==='*'&&expr[i+9]==='*')
        {
            str += ' ';
        }
        if((i + 2) % 10 === 0)
        {
            str += '1';
        }
    }
    let unstr = "";
    let newStr = "";
    for(let j = 0; j < str.length; j++){
        if(str[j] === ' ')
        {
            newStr += ' ';
        }
        if(str[j]!=='1')
        {
            unstr += str[j];
        }
        else
        {
            if(MORSE_TABLE.hasOwnProperty(unstr))
            {
                newStr += MORSE_TABLE[unstr];
            }
            unstr = "";
        }
    }
    return newStr;
}

module.exports = {
    decode
}
