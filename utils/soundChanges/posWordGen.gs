// Generates all possible word forms that could have evolved into the current word. wordList must start as a list containing single string
function posWordGen(word = "", currSoundInfo = [[]], prevSounds = [""]) {
  let posWords = [word];
  currSoundInfo.sort((currSound1, currSound2) => currSound2[0] - currSound1[0]);

  currSoundInfo.forEach( currSound => {
    posWords = posWords.concat(splice(posWords, parseInt(currSound[0]), currSound[1]?.length || 0, prevSounds));
  })
  
  return posWords;
}