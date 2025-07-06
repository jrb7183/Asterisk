// += WORKS (IN SOME PLACES) IF YOU WANT TO CLEAN UP THE CODE
// FINSIH ADDING map()/filter()/reduce() FUNCTIONS TO REDUCE THE AMOUNT OF RECURSION

// Returns all possible word forms that could have evolved into the input word given soundChanges
function unSoundChange(soundChanges = [""], wordList = [""], groupDict = {}, bool = true) {
  let posWords = [];
  if (soundChanges.length == 1 && wordList.length == 1){
    const word = wordList[0];
    const soundChange = soundChanges[0];
    const arrowPos = soundChange.indexOf(">");
    const dashPos = soundChange.indexOf("/");
    let currSoundsStr = "";
    if (dashPos == -1) {
      currSoundsStr = soundChange.slice(arrowPos + 1);
    } else {
      currSoundsStr = soundChange.slice(arrowPos + 1, dashPos);
    }
    let currSounds = groupExpander(currSoundsStr, groupDict);
    
    if (includesInList(word, currSounds) && currSounds.length > 0) {
      let currSoundsInfo = {};
      currSoundsInfo = findCurrSounds(word, currSounds, 0);
      let environment = "";
      if (dashPos == -1) {
        environment = "_";
      } else {
        environment = soundChange.slice(dashPos + 1);
      }
      currSounds = Object.values(currSoundsInfo);
      if (currSounds[0] != "") {
        environment = splice([environment], environment.indexOf("_"),1, currSounds);
      } else {
        environment = [environment];
      }

      let environments = environment.map(function(x) {return groupExpander(x, groupDict)});
      environments = environments.reduce(function(x, y) {return x.concat(y)});
      
      environments = environments.filter(function(x) {return includesInList(word, [x])});
      if (environments.length != 0) {
        currSoundsInfo = whichSoundInEnv(word, currSoundsInfo, environments);
        
        if (Object.keys(currSoundsInfo).length != 0) {
          let prevSounds = groupExpander(soundChange.slice(0, arrowPos), groupDict);
          posWords = posWordGen([word], Object.entries(currSoundsInfo), prevSounds);
        }
      }
    }
    if (bool) {
      return [word].concat(posWords);
    } if (posWords.length != 0) {
      return posWords;
    }
    return [false];
  }
  // Removes false values from a list
  const falseRemover = (list) => list.filter((x) => x != false);

  // On recursive calls where the length of soundChanges is 1 and wordList > 1, the function is called recursively again for the number of times equal to the length of wordList  
  if (soundChanges.length == 1) {
    posWords = wordList.map((x) => unSoundChange(soundChanges, [x], groupDict, false)[0]);
    return posWords;
  }

  posWords = unSoundChange([soundChanges[0]], wordList, groupDict, false);
  posWords = falseRemover(posWords);
  posWords = posWords.concat(unSoundChange(soundChanges.slice(1), posWords.concat(wordList), groupDict, false));
  posWords = falseRemover(posWords);

  if (posWords.length == 0 || (posWords.length == 1 && posWords[0] == wordList[0]))  {
    return filterDuplicates(wordList);
  }
  if (bool){
    return filterDuplicates(wordList.concat(posWords));
  }
  return filterDuplicates(posWords);
}
