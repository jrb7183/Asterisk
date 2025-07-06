// Imports data from the spreadsheet and returns possible previous word forms. It's second input is necessary for the second function to work
function sheetMediator(inputWord, groups, soundChanges) {
  if (inputWord != "") {
    if (soundChanges[0] != "=") {
      return unSoundChange(listSCs(soundChanges), [inputWord], groupDictCreator(groups));
    }
  }
}
