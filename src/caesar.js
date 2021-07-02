// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //make alphabet string
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    //empty variable for input
    let result = "";

    //false statement conditions for shift
    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    //encoding statement
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        //within for loop, making input lowercase and assigned to variable
        const char = input[i].toLowerCase();
        //assigning new character index to new variable
        const index = alphabet.indexOf(char);

        //if statement for non-letters
        if (index === -1) {
          result += char;
          continue;
        }

        //varaible for shift applied to index and its assigned remainder
        let encodedIndex = (index + shift) % 26;

        //if statements for if it needs to shift over or under index
        if (encodedIndex < 0) encodedIndex += 26;
        if (encodedIndex > 25) encodedIndex -= 26;

        //results with index applied to alphabet
        result += alphabet[encodedIndex];

        // console.log(char, "--->", alphabet[encodedIndex]);
        // console.log(
        //   "char ['",
        //   char,
        //   "'] @ index [",
        //   index,
        //   "] shifting [",
        //   shift,
        //   "] times as ['",
        //   alphabet[encodedIndex],
        //   "']\n"
        // );
      }
    } else if (encode === false) {
      for (let i = 0; i < input.length; i++) {
        //within for loop, making input lowercase and assigned to variable
        const char = input[i].toLowerCase();
        //assigning new character index to new variable
        const index = alphabet.indexOf(char);

        //if statement for non-letters
        if (index === -1) {
          result += char;
          continue;
        }

        //varaible for shift applied to index and its assigned remainder
        let encodedIndex = (index - shift) % 26;

        //if statements for if it needs to shift over or under alphabet
        if (encodedIndex < 0) encodedIndex += 26;
        if (encodedIndex > 25) encodedIndex -= 26;

        //results with index applied to alphabet
        result += alphabet[encodedIndex];
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
