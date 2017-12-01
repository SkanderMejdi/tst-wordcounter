function wordCounter(text, minLength) {

  var wordTab = text.split(" ");
  var countTab = {};

  for (var i = 0; i < wordTab.length; i++) {
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
