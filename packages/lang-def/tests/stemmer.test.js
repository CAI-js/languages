const { tokenizeAndStem } = require('../src');

describe('English Stemmer', () => {
  test('Should stem "what does your company develop"', () => {
    const input = 'what does your company develop';
    const expected = ['what', 'does', 'your', 'company', 'develop'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "does your company have other products"', () => {
    const input = 'does your company have other products';
    const expected = ['does', 'your', 'company', 'have', 'other', 'products'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "what is your company creating"', () => {
    const input = 'what is your company creating';
    const expected = ['what', 'is', 'your', 'company', 'creating'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "what is creating your enterprise"', () => {
    const input = 'what is creating your enterprise';
    const expected = ['what', 'is', 'creating', 'your', 'enterprise'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "does your enterprise have other apps?"', () => {
    const input = 'does your enterprise have other apps?';
    const expected = ['does', 'your', 'enterprise', 'have', 'other', 'apps'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "what else is developing your enterprise"', () => {
    const input = 'what else is developing your enterprise';
    const expected = ['what', 'else', 'is', 'developing', 'your', 'enterprise'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "does your company have some other product?"', () => {
    const input = 'does your company have some other product?';
    const expected = [
      'does',
      'your',
      'company',
      'have',
      'some',
      'other',
      'product',
    ];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "what else have created your company?"', () => {
    const input = 'what else have created your company?';
    const expected = ['what', 'else', 'have', 'created', 'your', 'company'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "does the enterprise have any other app?"', () => {
    const input = 'does the enterprise have any other app?';
    const expected = [
      'does',
      'the',
      'enterprise',
      'have',
      'any',
      'other',
      'app',
    ];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "Other product developed by your company?"', () => {
    const input = 'Other product developed by your company?';
    const expected = ['other', 'product', 'developed', 'by', 'your', 'company'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "what\'s the name of your application"', () => {
    const input = "what's the name of your application";
    const expected = ['what', 's', 'the', 'name', 'of', 'your', 'application'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "how\'s your app called"', () => {
    const input = "how's your app called";
    const expected = ['how', 's', 'your', 'app', 'called'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "tell me your app name"', () => {
    const input = 'tell me your app name';
    const expected = ['tell', 'me', 'your', 'app', 'name'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "name of the app"', () => {
    const input = 'name of the app';
    const expected = ['name', 'of', 'the', 'app'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "I\'d like to know the name of your app"', () => {
    const input = "I'd like to know the name of your app";
    const expected = [
      'i',
      'd',
      'like',
      'to',
      'know',
      'the',
      'name',
      'of',
      'your',
      'app',
    ];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "name of your apps?"', () => {
    const input = 'name of your apps?';
    const expected = ['name', 'of', 'your', 'apps'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "tell me your applications names"', () => {
    const input = 'tell me your applications names';
    const expected = ['tell', 'me', 'your', 'applications', 'names'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "how do you call your app?"', () => {
    const input = 'how do you call your app?';
    const expected = ['how', 'do', 'you', 'call', 'your', 'app'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "your application name?"', () => {
    const input = 'your application name?';
    const expected = ['your', 'application', 'name'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
  test('Should stem "name of the app?"', () => {
    const input = 'name of the app?';
    const expected = ['name', 'of', 'the', 'app'];
    const actual = tokenizeAndStem(input);
    expect(actual).toEqual(expected);
  });
});
