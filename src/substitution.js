// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const regAlpha = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    if (!alphabet) return false;
    if (!(alphabet.length === 26)) return false;

    let result = "";
    for (let letter in alphabet) {
      let count = 0;
      for (let i = 0; i < 26; i++) {
        if (alphabet[letter] === alphabet[i]) count++;
      }
      if (count > 1) return false;
    }
    if (encode) {
      let noCap = input.toLowerCase();
      for (let letter in noCap) {
        if (!alphabet.includes(noCap[letter])) {
          result += noCap[letter];
        } else {
          const alphaKey = regAlpha.indexOf(noCap[letter]);
          result += alphabet[alphaKey];
        }
      }
      return result;
    }
    if (encode === false) {
      let noCap = input.toLowerCase();
      for (let letter in noCap) {
        if (!alphabet.includes(noCap[letter])) {
          result += noCap[letter];
        } else {
          const alphaKey = alphabet.indexOf(noCap[letter]);
          result += regAlpha[alphaKey];
        }
      }
      return result;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
