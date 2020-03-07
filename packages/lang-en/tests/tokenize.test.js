const { tokenize } = require('../src');

describe('English Tokenizer', () => {
  test('Should tokenize "If you\'re here, then enter"', () => {
    const input = "If you're here, then enter";
    const expected = ['If', 'you', 'are', 'here', 'then', 'enter'];
    const actual = tokenize(input);
    expect(actual).toEqual(expected);
  });
});
