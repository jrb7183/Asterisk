// Finds which current sounds are in a word and their location in the word
function findCurrSounds(word = "", currSounds = [""], currSoundPos = 0) {
  if (word.length == currSounds[0].length) {
    const findCurrSound = (currSound) => {
      if (word == currSound) {
        let tempDict = {};
        tempDict[currSoundPos] = currSound;
        return tempDict;
      }
      return false;
    }
    tempList = currSounds.map(findCurrSound);
    tempList = tempList.filter(function(x) {return x != false});
    let trueSoundDict = {};
    if (tempList) {
      tempList.forEach(pair => Object.assign(trueSoundDict, pair))
    }
    return trueSoundDict;
  }
  const trueSoundsDict = findCurrSounds(word.slice(0, currSounds[0].length), currSounds, currSoundPos);
  const tempDict = findCurrSounds(word.slice(1), currSounds, currSoundPos + 1);
  if (!("no" in trueSoundsDict)) {
    return Object.assign(trueSoundsDict, tempDict);
  }
  return tempDict;
}