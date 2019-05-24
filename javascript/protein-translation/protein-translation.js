const translation_table = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'INVALID',
  UAG: 'INVALID',
  UGA: 'INVALID',
  LOL: 'STOP',
};
export const translate = (rna) => {
    const proteins = [];
    if (typeof(rna) === 'undefined') {
        return proteins
    }
    let rnaTriplet;
    let protein;
    for(let i = 0; i < rna.length; i+=3) {
        rnaTriplet = rna.substring(i, i+3);
        protein = translation_table[rnaTriplet];
        if (protein === 'INVALID') {
            return proteins;  
        } else if (protein === 'STOP') {
            console.log(rnaTriplet)
            throw new Error('Invalid codon');
        }
        proteins.push(protein)
    }
    return proteins            
}
