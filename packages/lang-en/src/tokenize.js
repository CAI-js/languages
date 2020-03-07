function replace(text) {
  let result = text.replace(/n't([ ,:;.!?]|$)/gi, ' not ');
  result = result.replace(/can't([ ,:;.!?]|$)/gi, 'can not ');
  result = result.replace(/'ll([ ,:;.!?]|$)/gi, ' will ');
  result = result.replace(/'s([ ,:;.!?]|$)/gi, ' is ');
  result = result.replace(/'re([ ,:;.!?]|$)/gi, ' are ');
  result = result.replace(/'ve([ ,:;.!?]|$)/gi, ' have ');
  result = result.replace(/'m([ ,:;.!?]|$)/gi, ' am ');
  result = result.replace(/'d([ ,:;.!?]|$)/gi, ' had ');
  return result;
}

function replaceContractions(arr) {
  const contractionsBase = {
    cannot: ['can', 'not'],
    gonna: ['going', 'to'],
    wanna: ['want', 'to'],
  };
  const result = [];
  arr.forEach(item => {
    const lowitem = item.toLowerCase();
    if (contractionsBase[lowitem]) {
      result.push(...contractionsBase[lowitem]);
    } else {
      result.push(item);
    }
  });
  return result;
}

module.exports = text => {
  const replaced = replace(text);
  const arr = replaced.split(/[\s,.!?;:([\]'"¡¿)/]+/).filter(x => x);
  return replaceContractions(arr, text);
};
