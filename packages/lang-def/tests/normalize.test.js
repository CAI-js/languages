const { normalize } = require('../src');

describe('English Normalize', () => {
  test('Should normalize "What döès youR Compañy develop"', () => {
    const input = 'What döès youR Compañy develop';
    const expected = 'what döès your compañy develop';
    const actual = normalize(input);
    expect(actual).toEqual(expected);
  });
});
