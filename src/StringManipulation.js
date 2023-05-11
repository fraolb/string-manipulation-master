//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  if(str.length == 0)
    return 0
  return str.match(/[aeiou]/gi).length;
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  return str.includes(checkStr)
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  var words = str.split(' ');
  var longest = '';
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}