// Adjusts sound changes to work with unSoundChange()
function cleanSCs(soundChanges = [""]) {
  
  // Deals with sound changes with squiggly brackets
  const deSquiggle = (soundChange) => {
    if (soundChange.includes("{")) {
      const arrowPos = soundChange.indexOf(">");
      const dashPos = soundChange.indexOf("/");

      let prevSounds = soundChange.slice(0, arrowPos);
      let currSounds = soundChange.slice(arrowPos + 1, dashPos);
      const env = soundChange.slice(dashPos + 1);

      // Deal with segments outside squiggly brackets
      let prePrevSquiggle = "";
      let postPrevSquiggle = "";
      let preCurrSquiggle = "";
      let postCurrSquiggle = "";
      const outSquiggleFinder = (str, preSquiggle, postSquiggle) => {
        if (str[0] != "{") {
          preSquiggle = str.slice(0, str.indexOf("{"));
          str = str.slice(str.indexOf("{") + 1);
        } else {
          str = str.slice(1);
        }
        if (str[str.length - 1] != "}") {
          postSquiggle = str.slice(str.indexOf("}") + 1);
          str = str.slice(0, str.indexOf("}"));
        } else {
          str = str.slice(0, -1);
        }
        return [str, preSquiggle, postSquiggle];
      }

      [prevSounds, prePrevSquiggle, postPrevSquiggle] = outSquiggleFinder(prevSounds, prePrevSquiggle, postPrevSquiggle);
      [currSounds, preCurrSquiggle, postCurrSquiggle] = outSquiggleFinder(currSounds, preCurrSquiggle, postCurrSquiggle);
        

      [prevSounds, currSounds] = [prevSounds.split(","), currSounds.split(",")];
      const newSCs = prevSounds.map(function(x, i) {return prePrevSquiggle + x + postPrevSquiggle + ">" + preCurrSquiggle + currSounds[i] + postCurrSquiggle + "/" + env});
      return newSCs;
    }
    return [soundChange];
  } 

  soundChanges = soundChanges.map(deSquiggle);
  let cleanedSCs = [];
  for (let i = 0; i < soundChanges.length; i++) {
    cleanedSCs = cleanedSCs.concat(soundChanges[i]);
  }
  return cleanedSCs;
}

// Puts sound changes in input into a list
function listSCs(input = "") {
  input = input.split("=");
  input = input.filter(function(x) {return x != false});
  input = input.map(function(x) {return x.split(" ").join("")});
  return cleanSCs(input);
}




