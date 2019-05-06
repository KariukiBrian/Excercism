const NUMERALS = "0123456789";
export const encode = (word) => {
    if  (word === '') {
        return '';
    }
    else if (word.length === 1) {
        return word; 
    }
    
  let currentLetter = ''; 
  let lastLetter = word[0];
  let currentCount = 1;
  let output = ''
  
    for (let position = 1; position < word.length; position++) {
    
        if (word[position] !== lastLetter) {
            if (currentCount === 1) {
                 output += lastLetter;
             } else {
                 output += currentCount + lastLetter;
             }
        
             lastLetter = word[position];
             currentCount = 0;
          }

          currentCount++;
          }
          let finaloutput = ''
          if(currentCount === 1) {
             finaloutput = output + lastLetter;
          } else {
             finaloutput = output + currentCount + lastLetter;
          }
          return finaloutput
    
}

export const decode = (word) => {
    if (typeof (word) !== 'string' || word.length < 2) {
        return word;
    }

    let text = [];

    for (let index = 0; index < word.length;) {
        if (!NUMERALS.includes(word[index])) {
            text.push(word[index]);
            index +=1;
        } else {
             let repeatStr = "";
             while (NUMERALS.includes(word[index])) {
                repeatStr += word[index];
                index ++;
             } 
             let repeat = Number(repeatStr);
             for (let i = 1; i <= repeat; i++) {
                text.push(word[index]);
             }
             index += 1;
        }
 
    }
    let decoded = text.join("");
    return decoded; 
}
