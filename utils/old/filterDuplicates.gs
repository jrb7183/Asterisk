// Removes duplicate possible word forms from list. This is a function birthed from laziness
// and can be replaced with more efficient code in UnSoundChange when I have more time. 
function filterDuplicates(posWords = [""], tempList = []) {
  if (tempList.length == 0 || !(includesInList(posWords[0], tempList))) {
    tempList = tempList.concat(posWords[0]);
  }
  if (posWords.length == 1) {
    return tempList;
  }
  return filterDuplicates(posWords.slice(1), tempList);
}
