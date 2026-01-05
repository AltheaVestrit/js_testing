function caesarCipher(str,shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alph_lower=alphabet.split('');
    alph_upper=alphabet.toUpperCase().split('');
    const non_alph = /[^a-zA-Z]/;
    const alph_length = alphabet.length;

    return str.split('').map((x) => {
        if (non_alph.test(x)) {
            return x;
        } else if (x.toUpperCase() === x) {
            let newIndex = alph_upper.findIndex(y => y === x) + shift;
            newIndex = (newIndex > alph_length - 1) ? newIndex - alph_length : newIndex;
            return alph_upper[newIndex];
        } else {
            let newIndex = alph_lower.findIndex(y => y === x) + shift;
            newIndex = (newIndex > alph_length - 1) ? newIndex - alph_length : newIndex;
            return alph_lower[newIndex];
        }       
    }).join('');
}

module.exports = caesarCipher;