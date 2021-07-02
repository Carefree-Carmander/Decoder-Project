// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //make key for each letter
    if (encode) {
      const alphaBox = {
        a: 11,
        b: 21,
        c: 31,
        d: 41,
        e: 51,
        f: 12,
        g: 22,
        h: 32,
        i: 42,
        j: 42,
        k: 52,
        l: 13,
        m: 23,
        n: 33,
        o: 43,
        p: 53,
        q: 14,
        r: 24,
        s: 34,
        t: 44,
        u: 54,
        v: 15,
        w: 25,
        x: 35,
        y: 45,
        z: 55,
      };
      //empty variable for encoding
      let result = "";
      //making whatever input be lowercase
      let noCap = input.toLowerCase();
      //for of statement that counts spaces
      for (let letter of noCap) {
        if (letter == " ") {
          result += " ";
        } else {
          result += alphaBox[letter];
        }
      }
      return result;
    }

    if (encode === false) {
      const alphaBox = {
        11: "a",
        21: "b",
        31: "c",
        41: "d",
        51: "e",
        12: "f",
        22: "g",
        32: "h",
        42: "i/j",
        52: "k",
        13: "l",
        23: "m",
        33: "n",
        43: "o",
        53: "p",
        14: "q",
        24: "r",
        34: "s",
        44: "t",
        54: "u",
        15: "v",
        25: "w",
        35: "x",
        45: "y",
        55: "z",
      };
      let test = 0;
      for (letter in input) {
        if (!(input[letter] == " ")) {
          test++;
        }
      }
      //if there are remainders left, it'll return false
      if (!(test % 2 == 0)) {
        return false;
      }
      let result = "";
      let noCap = input.toLowerCase();
      for (let i = 0; i < noCap.length; i += 2) {
        //account for spaces
        if (noCap[i] == " ") {
          result += " ";
          i -= 1;
        } else {
          let temp = `${noCap[i]}${noCap[i + 1]}`;
          result += alphaBox[temp];
        }
      }
      return result;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
