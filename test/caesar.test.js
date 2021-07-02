const caesar = require("../src/caesar").caesar;
const expect = require("chai").expect;

describe("caesar tests", () => {
  it("should return false if the shift amount is 0, greater than 25, or less than -25", () => {
    const expected = false;
    const actual = caesar("aaa", 26, true);
    expect(actual).to.be.equal(expected);
  });

  it("should maintain spaces throughout, as well as non-alphabetic symbols, encoding", () => {
    const expected = "c c c.";
    const actual = caesar("b b b.", 1, true);
    expect(actual).to.be.equal(expected);
  });

  it("should maintain spaces throughout, as well as non-alphabetic symbols, decoding", () => {
    const expected = "a a a.";
    const actual = caesar("b b b.", 1, false);
    expect(actual).to.be.equal(expected);
  });

  it ("capital letter are ignored", () => {
    const expected = "eee";
    const actual = caesar("DDD", 1, true);
    expect(actual).to.be.equal(expected);
  });

  it ("letter shifts so it goes 'off' the alphabet and wraps back around", () => {
    const expected = "ccc";
    const actual = caesar("zzz", 3, true);
    expect(actual).to.be.equal(expected);
  });
});
