const ONES = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    0: '',
};

const TENS = {
    1: 'X',
    2: 'XX',
    3: 'XXX',
    4: 'XL',
    5: 'L',
    6: 'LX',
    7: 'LXX',
    8: 'LXXX',
    9: 'XC',
    0: '',  
};

const HUNDREDS = {
    1: 'C',
    2: 'CC',
    3: 'CCC',
    4: 'CD',
    5: 'D',
    6: 'DC',
    7: 'DCC',
    8: 'DCCC',
    9: 'CM',
    0: '',
};

const THOUSANDS = {
    1: 'M',
    2: 'MM',
    3: 'MMM',
};
const values = [ONES,TENS,HUNDREDS,THOUSANDS]; 
export const toRoman = (num) => {
    let romanNumber = '';
    const splitnum = num.toString().split('').reverse();
    for (let i = 0; i < splitnum.length; i++) {
        const number = splitnum[i];
        romanNumber = values[i][number] + romanNumber;
    }
    return romanNumber;
};
