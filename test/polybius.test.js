const polybius = require("../src/polybius").polybius;
const expect = require("chai").expect;

describe("polybius tests", () => {
  it("when encoding, translates letters 'i' and 'j' to 42", () => {
    const expected = "11 42 42 11";
    const actual = polybius("a i j a", true);
    expect(actual).to.be.equal(expected);
  });

  it("when decoding, translates 42 to 'i/j'", () => {
    const expected = "a i/j i/j a";
    const actual = polybius("11 42 42 11", false);
    expect(actual).to.be.equal(expected);
  });

  it ("ignores capital letters", () => {
    const expected = "245141";
    const actual = polybius("Red", true);
    expect(actual).to.be.equal(expected);
  })

  it ("maintains spaces in message, decoding", () => {
    const actual = polybius("turtle duck", true);
    const expected = "445424441351 41543152";
    expect(actual).to.be.equal(expected);
  })

  it("maintains spaces in message, encoding", () => {
    const actual = polybius("34444353 245433", false);
    const expected = "stop run";
    expect(actual).to.be.equal(expected);
  });
});
