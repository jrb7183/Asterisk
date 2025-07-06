// Finds which current sounds are in a word and their location in the word
function findCurrSounds(word = "", currSounds = [""]) {
  let trueSoundDict ={};
  let i = 0;
  let limit = currSounds[0].length

  while (limit <= word.length) {
    substr = word.slice(i, limit)
    
    for (let j = 0; j < currSounds.length; j++) {
      if (substr == currSounds[j]) {
        trueSoundDict[i] = currSounds[j];
      }
    }
    i++;
    limit++;
  }
  return trueSoundDict;
}