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

    const newSCs = prevSounds.map((x, i) => prePrevSquiggle + x + postPrevSquiggle + ">" + preCurrSquiggle + (i >= currSounds.length ? "" : currSounds[i]) + postCurrSquiggle + env);
    return newSCs;
  }
  return [soundChange];
}

// Puts sound changes in input into a list
function cleanSCs(soundChanges = "") {
  cleanedSCs = []
  soundChanges = soundChanges.split("=");

  soundChanges.forEach(soundChange => {
    soundChange = soundChange.split(" ").join("");
    if (soundChange) {

      if (soundChange.indexOf("{") != -1) {
        cleanedSCs = cleanedSCs.concat(deSquiggle(soundChange));
      } else {
        cleanedSCs = cleanedSCs.concat([soundChange]);
      }
    }
  });

  return cleanedSCs;
}