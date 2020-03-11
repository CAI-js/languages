const normalize = require('./normalize');
const tokenize = require('./tokenize');
const Stemmer = require('./stemmer');

let stemmer;

function stem(word) {
  if (!stemmer) {
    stemmer = new Stemmer();
  }
  return stemmer.stemWord(word);
}

function tokenizeAndStem(sentence) {
  const normalized = normalize(sentence);
  const tokens = tokenize(normalized);
  const result = [];
  for (let i = 0; i < tokens.length; i += 1) {
    result.push(stem(tokens[i]));
  }
  return result;
}

const info = {
  iso2: 'xx',
  iso3: 'xxx',
  language: 'Default',
  culture: 'xx-xx',
  name: 'lang',
  isSingleton: true,
};

module.exports = {
  info,
  normalize,
  tokenize,
  Stemmer,
  stem,
  tokenizeAndStem,
};
