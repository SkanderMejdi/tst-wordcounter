function detachWords(words, minLength) {
  var detached = {
    "d": "de",
    "l": "le",
    "j": "je",
    "m": "me"
  };
  var elems = [];

  words = words.split("'");
  for (var i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      elems.push(words[i]);
    } else if (words[i] in detached) {
      elems.push(detached[words[i]])
    }
  }
  return elems;
}

function wordCounter(text, minLength) {

  var punctuationless = text.replace(/[.,\/#!?$%\^&\*;:{}=\_`~()]/g,"");
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
