// Generates all possible word forms that could have evolved into the current word. wordList must start as a list containing single string
function posWordGen(wordList = [""], currSoundInfo = [[]], prevSounds = [""]) {
  let posWords = [];
  posWords = splice(wordList, parseInt(currSoundInfo[0][0]), currSoundInfo[0][1].length, prevSounds);
  if (currSoundInfo.length == 1) {
    return posWords;
  }
  return posWords.concat(posWordGen(wordList.concat(posWords), currSoundInfo.slice(1), prevSounds));
}