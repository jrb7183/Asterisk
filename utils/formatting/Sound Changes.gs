// Deal with segments outside squiggly brackets
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

// Deals with sound changes with squiggly brackets
const deSquiggle = (soundChange) => {
  if (soundChange.includes("{")) {
    const arrowPos = soundChange.indexOf(">");
    const dashPos = soundChange.indexOf("/");

    let prevSounds = soundChange.slice(0, arrowPos);
    let currSounds = soundChange.slice(arrowPos + 1, dashPos);
    let env = "/" + soundChange.slice(dashPos + 1);
    if (dashPos == -1) {
      currSounds = currSounds.concat("}")
      env = ""
    }
    
    let prePrevSquiggle = "";
    let postPrevSquiggle = "";
    let preCurrSquiggle = "";
    let postCurrSquiggle = "";

    [prevSounds, prePrevSquiggle, postPrevSquiggle] = outSquiggleFinder(prevSounds, prePrevSquiggle, postPrevSquiggle);
    [currSounds, preCurrSquiggle, postCurrSquiggle] = outSquiggleFinder(currSounds, preCurrSquiggle, postCurrSquiggle);
    [prevSounds, currSounds] = [prevSounds.split(","), currSounds.split(",")];

    const newSCs = prevSounds.map((x, i) => prePrevSquiggle + x + postPrevSquiggle + ">" + preCurrSquiggle + currSounds[i] + postCurrSquiggle + env);
    return newSCs;
  }
  return [soundChange];
} 

// Adjusts sound changes to work with unSoundChange()
function cleanSCs(soundChanges = [""]) {
  cleanedSCs = []

  soundChanges.forEach(soundChange => {
    cleanedSCs = cleanedSCs.concat(deSquiggle(soundChange));
  });

  return cleanedSCs;
}

// Puts sound changes in input into a list
function listSCs(input = "") {
  input = input.split("=");
  input = input.filter((x) => x != false);
  input = input.map((x) => x.split(" ").join(""));
  return cleanSCs(input);
}