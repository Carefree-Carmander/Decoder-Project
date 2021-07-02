const substitution = require("../src/substitution").substitution;
const expect = require("chai").expect;

describe("substitution tests", () => {
  it("returns false if alphabet is not exactly 26 characters long", () => {
    const alphabet = "fjdhgjherugherfjkg";
    const actual = substitution("no", alphabet);
    const expected = false;
    expect(actual).to.be.equal(expected);
  });

  it("correctly translates the given phrase, based on alphabet given to function", () => {
    const alphabet = "stuvwxyzabcdefghijklmnopqr";
    const actual = substitution("abcd", alphabet);
    const expected = "stuv";
    expect(actual).to.be.equal(expected);
  });

  it("returns false if there are any duplicate characters in given alphabet", () => {
    const alphabet = "stuvwwyzabcdefghijklmnopqr";
    const actual = substitution("what what", alphabet);
    const expected = false;
    expect(actual).to.be.equal(expected);
  });

  it("maintains space in the message, encoding", () => {
    const alphabet = "stuvwxyzabcdefghijklmnopqr";
    const actual = substitution("now what", alphabet);
    const expected = "fgo ozsl";
    expect(actual).to.be.equal(expected);
  });

  it("maintains space in the message, decoding", () => {
    const alphabet = "stuvwxyzabcdefghijklmnopqr";
    const actual = substitution("stuv wxy", alphabet, false);
    const expected = "abcd efg";
    expect(actual).to.be.equal(expected);
  });

  it("ignores capital letters", () => {
    const alphabet = "stuvwxyzabcdefghijklmnopqr";
    const actual = substitution("GRID", alphabet);
    const expected = "yjav";
    expect(actual).to.be.equal(expected);
  });
});
