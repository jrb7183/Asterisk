// Returns true if a string includes any of the values in the list
function includesInList(str = "", list = [""]) {
  if (list[0].includes("_")) {
    list = list.map(function(x) {return splice([x], x.indexOf("_"),1, [""])[0]});
  } if (list[0].includes("#")) {
    list = list.filter(function(x) {return hashStrHelper(str, x)});
  } else {
    list = list.filter(function(x) {return str.includes(x)});
  }
  return list.length != 0;
}