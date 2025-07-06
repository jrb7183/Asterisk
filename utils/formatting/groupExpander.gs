// Takes in a string and returns a list of all the possible variations of that string (if it contains predefined groups indicated by capital letters) 
function groupExpander(environment = "", groupDict = {}) {
  environment = envCleaner(environment)
  if (/[A-Z]/.test(environment)) {
    let uppers = upperList(environment);
    // groupDict[caps[0]] accesses the values in groupDict with the corresponding uppercase letter as a key
    const upperReplacer = (caps, env) => splice(env, caps[1], 1, groupDict[caps[0]]);

    uppers[0] = upperReplacer(uppers[0], [environment]); // This is kind of bad practice since it's adding a different data type to the list, but it makes everything a lot easier
    if (uppers.length==1) {
      return uppers[0];
    }
    output = uppers.reduce(function(x, y) {return upperReplacer(y, x)});
    return output
  }
  return [environment];
}