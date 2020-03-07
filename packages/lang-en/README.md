# @caijs/lang-en

@caijs/lang-en is an NLP library for English written in javascript.
It supports normalization, tokenization and stemming of english.

## Installation

Run this in your project folder:

```bash
$ npm install @caijs/lang-en
```

## Tokenize and stem a sentence

You can tokenize and stem a sentence. It will normalize the sentence, tokenize it and return the stems.

```javascript
const { tokenizeAndStem } = require('@caijs/lang-en');

const stems = tokenizeAndStem('what else is developing your enterprise');
console.log(stems); // ['what', 'els', 'is', 'develop', 'your', 'enterpris']
```

## Normalize a sentence

You can normalize a sentence, it will pass the sentece to lower case and replace special characters with the equivalent characters.

```javascript
const { normalize } = require('@caijs/lang-en');

const normalized = normalize('What döès youR Compañy develop');
console.log(normalized); // what does your company develop
```

## Tokenize a sentence

It tokenizes a sentence, without normalizing it. Split the sentence into tokens

```javascript
const { tokenize } = require('@caijs/lang-en');

const tokens = tokenize('If you\'re here, then enter');
console.log(tokens); // ['If', 'you', 'are', 'here', 'then', 'enter']
```

## Stem a word

It stems a word, without normalizing it.

```javascript
const { stem } = require('@caijs/lang-en');

const stemmed = stem('enterprise');
console.log(stemmed); // enterpris
```