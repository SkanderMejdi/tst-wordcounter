function wordCounter(text, minLength) {

  var punctuationless = text.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
  var wordTab = punctuationless.split(" ");
  var countTab = {};

  for (var i = 0; i < wordTab.length; i++) {
    wordTab[i] = wordTab[i].toLowerCase();
    if (wordTab[i].length < minLength) {
      wordTab.splice(i--, 1);
    } else {
      if (countTab[wordTab[i]] == 1) {
        countTab[wordTab[i]] += 1
      } else {
        countTab[wordTab[i]] = 1;
      }
    }
  }
  return countTab;
}

module.exports = wordCounter;
