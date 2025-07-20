// Returns all possible word forms that could have evolved into the input word given soundChanges
function unSoundChange(soundChanges = [""], wordList = [""], groupDict = {}, bool = true) {
  let allPosWords = [];

  // On recursive calls where the length of soundChanges is 1 and wordList > 1, the function is called recursively again for the number of times equal to the length of wordList  
  if (soundChanges.length == 1) {
    wordList.forEach((word) => {
      const soundChange = soundChanges[0];
      const arrowPos = soundChange.indexOf(">");
      const dashPos = soundChange.indexOf("/");
      let currSoundsStr = "";
      let posWords = []
      if (dashPos == -1) {
        currSoundsStr = soundChange.slice(arrowPos + 1);
      } else {
        currSoundsStr = soundChange.slice(arrowPos + 1, dashPos);
      }

      let currSounds = groupExpander(currSoundsStr, groupDict);
      let currSoundsInfo = findCurrSounds(word, currSounds);
      if (!(Object.keys(currSoundsInfo).length) && currSounds[0] == "") {
        currSoundsInfo["0"] = "";
      }

      if (Object.keys(currSoundsInfo).length) {
        
        let environment = "_";
        if (dashPos != -1) {
          environment = soundChange.slice(dashPos + 1);
        }

        const underPos = environment.indexOf("_")
        currSounds = Object.values(currSoundsInfo);

        if (currSounds[0] != "") {
          environment = splice([environment], underPos, 1, currSounds);
        } else {
          environment = [environment];
        }

        let environments = []
        environment.forEach((variant) => environments = environments.concat(groupExpander(variant, groupDict)));

        // Filter out duplicates and environments not found in word
        environments = [...new Set(environments)]
        environments = environments.filter((environment) => {return includesInList(word, [environment])});

        if (environments.length != 0) {
          currSoundsInfo = whichSoundInEnv(word, currSoundsInfo, environments, underPos);
          
          if (Object.keys(currSoundsInfo).length) {
            let prevSounds = groupExpander(soundChange.slice(0, arrowPos), groupDict);
            posWords = posWordGen(word, Object.entries(currSoundsInfo), prevSounds);
          }
        }
      }
      if (bool) {
        allPosWords = allPosWords.concat([word].concat(posWords));
      } else if (posWords.length != 0) {
        allPosWords = allPosWords.concat(posWords);
      }
    });
    return allPosWords;
  }

  allPosWords = unSoundChange([soundChanges[0]], wordList, groupDict, false);
  allPosWords = allPosWords.concat(unSoundChange(soundChanges.slice(1), [...new Set(allPosWords.concat(wordList))], groupDict, false));

  if (allPosWords.length == 0 || (allPosWords.length == 1 && allPosWords[0] == wordList[0]))  {
    return wordList;
  }
  if (bool){
    return [...new Set(wordList.concat(allPosWords))];
  }
  return [...new Set(allPosWords)];
}
