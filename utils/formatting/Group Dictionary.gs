//Takes in a str with concatenated groups in the format X = [sound1, sound2..., soundn]
function groupDictCreator(groups = "") {
  if (groups.indexOf("]") == groups.length - 1) {
    let str = groups.slice(groups.indexOf("[") + 1, groups.length - 1).split(" ").join("");
    let tempDict = {};
    tempDict[groups[0]] = str.split(",");
    return tempDict;
  }
  return Object.assign({}, groupDictCreator(groups.slice(0, groups.indexOf("]") + 1)), groupDictCreator(groups.slice(groups.indexOf("]") + 1, groups.length)));
}

