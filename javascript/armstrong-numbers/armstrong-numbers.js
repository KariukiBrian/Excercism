export const validate = (num) => {
    const stringRepresentation = String(num);
    const numberOfDigits = stringRepresentation.length;
    let total = 0;
    
    for (let c in stringRepresentation) {
    total += (Number(stringRepresentation[c]**numberOfDigits));
    }
    
    if (total === num) {
        return true;
    }
    return false
}   
