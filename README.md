# CAI Languages

This is a monorepo containing all the language tools for CAI (Conversational Artificial Intelligence) project.
Every single language can be found as an independant package, so you can install only the languages that you need.


## Installation

Each language has it's own package, this is an example of how to install the english one.
Run this in your project folder:

```bash
$ npm install @caijs/lang-en
```

## Languages supported

| Language | Locale | Package        | Github |
|----------|--------|----------------|--------|
| English  | en     | @caijs/lang-en | [Link](https://github.com/CAI-js/languages/tree/master/packages/lang-en)       |

## Tokenize and stem a sentence

Each language has it's own package, this is an example of how to use the english one.
You can tokenize and stem a sentence. It will normalize the sentence, tokenize it and return the stems.

```javascript
const { tokenizeAndStem } = require('@caijs/lang-en');

const stems = tokenizeAndStem('what else is developing your enterprise');
console.log(stems); // ['what', 'els', 'is', 'develop', 'your', 'enterpris']
```

## Normalize a sentence

Each language has it's own package, this is an example of how to use the english one.
You can normalize a sentence, it will pass the sentece to lower case and replace special characters with the equivalent characters.

```javascript
const { normalize } = require('@caijs/lang-en');

const normalized = normalize('What döès youR Compañy develop');
console.log(normalized); // what does your company develop
```

## Tokenize a sentence

Each language has it's own package, this is an example of how to use the english one.
It tokenizes a sentence, without normalizing it. Split the sentence into tokens

```javascript
const { tokenize } = require('@caijs/lang-en');

const tokens = tokenize('If you\'re here, then enter');
console.log(tokens); // ['If', 'you', 'are', 'here', 'then', 'enter']
```

## Stem a word

Each language has it's own package, this is an example of how to use the english one.
It stems a word, without normalizing it.

```javascript
const { stem } = require('@caijs/lang-en');

const stemmed = stem('enterprise');
console.log(stemmed); // enterpris
```
