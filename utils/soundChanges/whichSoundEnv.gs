// Finds which current sounds are actually in the correct environment 
function whichSoundInEnv(word = "", currSoundDict = {}, env = [""], underPos = 0) {
  // Thorough check to find if words contain environments and, if so, where they do 
  const envChecker = (currSoundInfo = [""], env = "") => {
    const currSound = currSoundInfo[1];
    const currSoundPos = currSoundInfo[0];
    let tempDict = {};

    // Deals with null environments
    if (env.includes("_")) {
      const tempPos = findEnvPos(word, env);
      if (tempPos != -1) {
        tempDict[tempPos] = currSound;
      }
    }

    // Deals with "regular" environments  
    else if (word.includes(env) && env[underPos] == currSound) {
      const startI = currSoundPos - underPos;
      if (startI > -1 && word.slice(startI, startI + env.length) == env) {
        tempDict[currSoundPos] = currSound;
      }
    }

    // Deals with word-initial/final environments
    else if (env.includes("#")) {

      // Initial
      if (word.slice(0, env.length - 1) == env.slice(1) && currSoundPos == underPos - 1) {
        tempDict[currSoundPos] = currSound;
      }

      // Final
      if (word.slice(word.length - env.length + 1) == env.slice(0, -1) && currSoundPos == word.length - env.length + underPos + 1) {
        tempDict[currSoundPos] = currSound;
      }

      // Initial and Final
      if (word == env.slice(1, -1) && currSoundPos == underPos - 1) {
        tempDict[currSoundPos] = currSound;
      }
    }
    return tempDict;
  }

  const currSoundList = Object.entries(currSoundDict);
  let trueSoundDict = {};

  // Iterates through current sounds to check if they are in an environment 
  const tempList = currSoundList.map(function(x) {return envChecker(x, env[0])});
  tempList.forEach(pair => Object.assign(trueSoundDict, pair));

  // Iterates through environments
  if (env.length != 1) {
    return Object.assign(trueSoundDict, whichSoundInEnv(word, currSoundDict, env.slice(1), underPos));
  }

  return trueSoundDict;
}