// source list: https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/Portuguese_wordlist

wordList = document.getElementById("mw-content-text").childNodes[0].getElementsByTagName("ol")[0];
wordListSize = document.getElementById("mw-content-text").childNodes[0].getElementsByTagName("ol")[0].childElementCount;
mostFrequentWordValue = wordList.childNodes[0].childNodes[1].nodeValue.trim()
for(var i = 1; i < wordListSize; i++){
  currentItem = wordList.childNodes[2*i];
  currentWordValue = currentItem.childNodes[1].nodeValue.trim();
  zipf = mostFrequentWordValue/currentWordValue;
  zipfTextNode = document.createTextNode(" zipf:  " + zipf);
  currentItem.appendChild(zipfTextNode);
}
