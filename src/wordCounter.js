function detachWords(words, minLength) {
  var elems = [];
  var detached = [];
  var tmp = [];

  tmp = words.split("'");
  for (var i = 0; i < tmp.length; i++) {
    detached = detached.concat(tmp[i].split("-"));
  }
  for (var i = 0; i < detached.length; i++) {
    if (detached[i].length >= minLength) {
      elems.push(detached[i]);
    }
  }
  return elems;
}

function wordCounter(text, minLength) {

  var punctuationless = text.replace(/[.,\/#!?$%\^&\*;:{}=\_`~()]/g," ");
  var wordTab = punctuationless.split(" ");
  var countTab = {};

  for (var i = 0; i < wordTab.length; i++) {
    wordTab[i] = wordTab[i].toLowerCase();

    elems = detachWords(wordTab[i], minLength);
    for (var j = 0; j < elems.length; j++) {
      if (elems[j] in countTab) {
        countTab[elems[j]] += 1
      } else {
        countTab[elems[j]] = 1;
      }
    }
  }
  return countTab;
}

module.exports = wordCounter;
